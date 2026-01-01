import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getUserFromToken } from '@/lib/auth';
import { initializePayment } from '@/lib/paystack';
import { nanoid } from 'nanoid';

export async function POST(request: NextRequest) {
    try {
        const token = request.headers.get('authorization');
        const user = getUserFromToken(token);

        if (!user) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            );
        }

        // Check if user already has a successful payment
        const existingPayment = await prisma.payment.findFirst({
            where: {
                userId: user.userId,
                status: 'success',
            },
        });

        if (existingPayment) {
            return NextResponse.json(
                { error: 'You have already paid for the test' },
                { status: 400 }
            );
        }

        // Get user details
        const userDetails = await prisma.user.findUnique({
            where: { id: user.userId },
        });

        if (!userDetails) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            );
        }

        // Generate unique reference
        const reference = `TEST-${nanoid(10)}`;

        // Initialize payment with Paystack
        const amount = parseInt(process.env.TEST_PRICE || '2900');
        const paystackResponse = await initializePayment(
            userDetails.email,
            amount,
            reference
        );

        if (!paystackResponse.status) {
            throw new Error('Payment initialization failed');
        }

        // Create payment record
        await prisma.payment.create({
            data: {
                userId: user.userId,
                amount,
                reference,
                status: 'pending',
            },
        });

        return NextResponse.json({
            authorization_url: paystackResponse.data.authorization_url,
            reference,
        });
    } catch (error) {
        console.error('Payment initialization error:', error);
        return NextResponse.json(
            { error: 'Failed to initialize payment' },
            { status: 500 }
        );
    }
}
