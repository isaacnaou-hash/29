import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getUserFromToken } from '@/lib/auth';

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const token = request.headers.get('authorization');
        const user = getUserFromToken(token);

        if (!user) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            );
        }

        const certificateId = params.id;

        const testResult = await prisma.testResult.findUnique({
            where: { certificateId },
            include: {
                user: true,
            },
        });

        if (!testResult) {
            return NextResponse.json(
                { error: 'Certificate not found' },
                { status: 404 }
            );
        }

        // Verify user owns this certificate
        if (testResult.userId !== user.userId) {
            return NextResponse.json(
                { error: 'Unauthorized access' },
                { status: 403 }
            );
        }

        return NextResponse.json({
            name: testResult.user.name,
            score: testResult.score,
            totalQuestions: testResult.totalQuestions,
            proficiencyLevel: testResult.proficiencyLevel,
            certificateId: testResult.certificateId,
            completedAt: testResult.completedAt,
        });
    } catch (error) {
        console.error('Certificate fetch error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch certificate' },
            { status: 500 }
        );
    }
}
