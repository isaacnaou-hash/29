import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getUserFromToken } from '@/lib/auth';
import questions from '@/data/questions.json';
import { nanoid } from 'nanoid';

interface Answer {
    questionId: number;
    selectedOption: number;
}

function calculateProficiencyLevel(percentage: number): string {
    if (percentage >= 90) return 'Expert';
    if (percentage >= 75) return 'Advanced';
    if (percentage >= 60) return 'Intermediate';
    return 'Beginner';
}

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

        const { answers }: { answers: Answer[] } = await request.json();

        // Check if user has paid
        const payment = await prisma.payment.findFirst({
            where: {
                userId: user.userId,
                status: 'success',
            },
        });

        if (!payment) {
            return NextResponse.json(
                { error: 'Payment required' },
                { status: 403 }
            );
        }

        // Check if already completed
        const existingResult = await prisma.testResult.findFirst({
            where: { userId: user.userId },
        });

        if (existingResult) {
            return NextResponse.json(
                { error: 'Test already completed' },
                { status: 400 }
            );
        }

        // Calculate score
        let score = 0;
        questions.forEach((question) => {
            const userAnswer = answers.find(a => a.questionId === question.id);
            if (userAnswer && userAnswer.selectedOption === question.correctAnswer) {
                score++;
            }
        });

        const totalQuestions = questions.length;
        const percentage = (score / totalQuestions) * 100;
        const proficiencyLevel = calculateProficiencyLevel(percentage);
        const certificateId = nanoid(12);

        // Save test result
        const result = await prisma.testResult.create({
            data: {
                userId: user.userId,
                score,
                totalQuestions,
                answers: JSON.stringify(answers),
                proficiencyLevel,
                certificateId,
            },
        });

        return NextResponse.json({
            message: 'Test submitted successfully',
            score,
            totalQuestions,
            proficiencyLevel,
            certificateId,
        });
    } catch (error) {
        console.error('Test submission error:', error);
        return NextResponse.json(
            { error: 'Failed to submit test' },
            { status: 500 }
        );
    }
}
