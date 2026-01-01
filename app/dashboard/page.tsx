'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface UserData {
    id: string;
    name: string;
    email: string;
    hasPaid: boolean;
    hasCompletedTest: boolean;
    testResult?: {
        score: number;
        totalQuestions: number;
        proficiencyLevel: string;
        certificateId: string;
    };
}

export default function DashboardPage() {
    const router = useRouter();
    const [userData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);
    const [initiatingPayment, setInitiatingPayment] = useState(false);

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                router.push('/auth/login');
                return;
            }

            const response = await fetch('/api/user/dashboard', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }

            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.error('Error fetching user data:', error);
            router.push('/auth/login');
        } finally {
            setLoading(false);
        }
    };

    const handlePayNow = async () => {
        setInitiatingPayment(true);
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('/api/payment/initialize', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.error || 'Failed to initialize payment');
                return;
            }

            // Redirect to Paystack payment page
            window.location.href = data.authorization_url;
        } catch (error) {
            console.error('Payment initialization error:', error);
            alert('Failed to initialize payment');
        } finally {
            setInitiatingPayment(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="spinner"></div>
            </div>
        );
    }

    if (!userData) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                                <span className="text-white font-bold text-xl">E</span>
                            </div>
                            <span className="text-xl font-bold text-gray-900">
                                English<span className="text-gradient">Pro</span>
                            </span>
                        </Link>
                        <button
                            onClick={() => {
                                localStorage.removeItem('token');
                                router.push('/');
                            }}
                            className="text-gray-600 hover:text-gray-900"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-6 py-12 max-w-4xl">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        Welcome, {userData.name}!
                    </h1>
                    <p className="text-gray-600">Manage your English proficiency test</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="card">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Payment Status</p>
                                <p className="text-lg font-bold text-gray-900">
                                    {userData.hasPaid ? 'Paid' : 'Pending'}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full gradient-secondary flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Test Status</p>
                                <p className="text-lg font-bold text-gray-900">
                                    {userData.hasCompletedTest ? 'Completed' : 'Not Started'}
                                </p>
                            </div>
                        </div>
                    </div>

                    {userData.testResult && (
                        <div className="card">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Your Score</p>
                                    <p className="text-lg font-bold text-gray-900">
                                        {userData.testResult.score}/{userData.testResult.totalQuestions}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {!userData.hasPaid && (
                    <div className="card card-elevated mb-8 gradient-primary text-white">
                        <h2 className="text-2xl font-bold mb-4">Complete Payment to Start Test</h2>
                        <p className="mb-6">
                            Pay $29 to unlock the English proficiency test and get your official certificate upon completion.
                        </p>
                        <button
                            onClick={handlePayNow}
                            disabled={initiatingPayment}
                            className="btn bg-white text-primary hover:shadow-xl"
                        >
                            {initiatingPayment ? 'Processing...' : 'Pay $29 Now'}
                        </button>
                    </div>
                )}

                {userData.hasPaid && !userData.hasCompletedTest && (
                    <div className="card card-elevated mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Take the Test?</h2>
                        <p className="text-gray-600 mb-6">
                            You have 60 minutes to complete 20 questions covering reading comprehension, grammar, and vocabulary.
                            Make sure you're in a quiet environment with a stable internet connection.
                        </p>
                        <Link href="/test" className="btn btn-primary">
                            Start Test Now
                        </Link>
                    </div>
                )}

                {userData.hasCompletedTest && userData.testResult && (
                    <div className="card card-elevated mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Test Completed!</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Final Score</p>
                                <p className="text-3xl font-bold text-gray-900">
                                    {userData.testResult.score}/{userData.testResult.totalQuestions}
                                </p>
                                <p className="text-lg text-gray-600">
                                    ({Math.round((userData.testResult.score / userData.testResult.totalQuestions) * 100)}%)
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Proficiency Level</p>
                                <p className="text-3xl font-bold text-gradient">
                                    {userData.testResult.proficiencyLevel}
                                </p>
                            </div>
                        </div>
                        <Link
                            href={`/certificate?id=${userData.testResult.certificateId}`}
                            className="btn btn-primary"
                        >
                            View & Download Certificate
                        </Link>
                    </div>
                )}
            </main>
        </div>
    );
}
