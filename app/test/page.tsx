'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import questions from '@/data/questions.json';

interface Answer {
    questionId: number;
    selectedOption: number;
}

export default function TestPage() {
    const router = useRouter();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [timeRemaining, setTimeRemaining] = useState(3600); // 60 minutes in seconds
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        // Check if user has paid
        checkAccess();

        // Start timer
        const timer = setInterval(() => {
            setTimeRemaining((prev) => {
                if (prev <= 1) {
                    handleSubmit();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const checkAccess = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                router.push('/auth/login');
                return;
            }

            const response = await fetch('/api/user/dashboard', {
                headers: { 'Authorization': `Bearer ${token}` },
            });

            const data = await response.json();

            if (!data.hasPaid) {
                alert('Please complete payment first');
                router.push('/dashboard');
                return;
            }

            if (data.hasCompletedTest) {
                alert('You have already completed the test');
                router.push('/dashboard');
                return;
            }

            setLoading(false);
        } catch (error) {
            console.error('Access check error:', error);
            router.push('/dashboard');
        }
    };

    const handleAnswer = (optionIndex: number) => {
        const newAnswers = answers.filter(a => a.questionId !== questions[currentQuestion].id);
        newAnswers.push({
            questionId: questions[currentQuestion].id,
            selectedOption: optionIndex,
        });
        setAnswers(newAnswers);
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleSubmit = async () => {
        if (submitting) return;

        setSubmitting(true);

        try {
            const token = localStorage.getItem('token');
            const response = await fetch('/api/test/submit', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ answers }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to submit test');
            }

            router.push('/dashboard');
        } catch (error) {
            console.error('Submit error:', error);
            alert('Failed to submit test');
            setSubmitting(false);
        }
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const currentAnswer = answers.find(a => a.questionId === questions[currentQuestion].id);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="spinner"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 py-8 px-4">
            <div className="container mx-auto max-w-4xl">
                {/* Header */}
                <div className="card mb-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">English Proficiency Test</h1>
                            <p className="text-gray-600">Question {currentQuestion + 1} of {questions.length}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-600">Time Remaining</p>
                            <p className="text-3xl font-bold text-gradient">{formatTime(timeRemaining)}</p>
                        </div>
                    </div>

                    {/* Progress bar */}
                    <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="h-full gradient-primary transition-all duration-300"
                            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                        ></div>
                    </div>
                </div>

                {/* Question Card */}
                <div className="card card-elevated mb-6">
                    <div className="mb-6">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                            {questions[currentQuestion].type.toUpperCase()}
                        </span>

                        {questions[currentQuestion].passage && (
                            <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <p className="text-gray-700 leading-relaxed">{questions[currentQuestion].passage}</p>
                            </div>
                        )}

                        <h2 className="text-xl font-bold text-gray-900">
                            {questions[currentQuestion].question}
                        </h2>
                    </div>

                    <div className="space-y-3">
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(index)}
                                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${currentAnswer?.selectedOption === index
                                        ? 'border-primary bg-blue-50'
                                        : 'border-gray-200 hover:border-primary hover:bg-gray-50'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${currentAnswer?.selectedOption === index
                                            ? 'border-primary bg-primary'
                                            : 'border-gray-300'
                                        }`}>
                                        {currentAnswer?.selectedOption === index && (
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </div>
                                    <span className="text-gray-700">{option}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                    <button
                        onClick={handlePrevious}
                        disabled={currentQuestion === 0}
                        className="btn btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Previous
                    </button>

                    <div className="text-center text-sm text-gray-600">
                        {answers.length} of {questions.length} answered
                    </div>

                    {currentQuestion < questions.length - 1 ? (
                        <button onClick={handleNext} className="btn btn-primary">
                            Next
                        </button>
                    ) : (
                        <button
                            onClick={handleSubmit}
                            disabled={submitting}
                            className="btn btn-primary"
                        >
                            {submitting ? 'Submitting...' : 'Submit Test'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
