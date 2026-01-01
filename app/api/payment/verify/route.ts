import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyPayment } from '@/lib/paystack';

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const reference = searchParams.get('reference');

        if (!reference) {
            return NextResponse.json(
                { error: 'Reference is required' },
                { status: 400 }
            );
        }

        // Verify payment with Paystack
        const paystackResponse = await verifyPayment(reference);

        if (!paystackResponse.status || paystackResponse.data.status !== 'success') {
            return NextResponse.json(
                { error: 'Payment verification failed' },
                { status: 400 }
            );
        }

        // Update payment record
        const payment = await prisma.payment.findUnique({
            where: { reference },
        });

        if (!payment) {
            return NextResponse.json(
                { error: 'Payment record not found' },
                { status: 404 }
            );
        }

        await prisma.payment.update({
            where: { reference },
            data: {
                status: 'success',
                paystackRef: paystackResponse.data.reference,
            },
        });

        return NextResponse.json({
            message: 'Payment verified successfully',
            status: 'success',
        });
    } catch (error) {
        console.error('Payment verification error:', error);
        return NextResponse.json(
            { error: 'Payment verification failed' },
            { status: 500 }
        );
    }
}
