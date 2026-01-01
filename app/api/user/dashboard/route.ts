import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getUserFromToken } from '@/lib/auth';

export async function GET(request: NextRequest) {
    try {
        const token = request.headers.get('authorization');
        const user = getUserFromToken(token ?? undefined);

        if (!user) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            );
        }

        // Get user details
        const userDetails = await prisma.user.findUnique({
            where: { id: user.userId },
            include: {
                payments: {
                    where: { status: 'success' },
                    take: 1,
                },
                testResults: {
                    take: 1,
                    orderBy: { completedAt: 'desc' },
                },
            },
        });

        if (!userDetails) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            );
        }

        const hasPaid = userDetails.payments.length > 0;
        const hasCompletedTest = userDetails.testResults.length > 0;
        const testResult = userDetails.testResults[0];

        return NextResponse.json({
            id: userDetails.id,
            name: userDetails.name,
            email: userDetails.email,
            hasPaid,
            hasCompletedTest,
            testResult: testResult ? {
                score: testResult.score,
                totalQuestions: testResult.totalQuestions,
                proficiencyLevel: testResult.proficiencyLevel,
                certificateId: testResult.certificateId,
            } : null,
        });
    } catch (error) {
        console.error('Dashboard error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
