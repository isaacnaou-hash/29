'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { downloadCertificate } from '@/lib/certificate';

interface CertificateData {
    name: string;
    score: number;
    totalQuestions: number;
    proficiencyLevel: string;
    certificateId: string;
    completedAt: Date;
}

export default function CertificatePage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const certificateId = searchParams.get('id');
    const [certificateData, setCertificateData] = useState<CertificateData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!certificateId) {
            router.push('/dashboard');
            return;
        }

        fetchCertificateData();
    }, [certificateId]);

    const fetchCertificateData = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                router.push('/auth/login');
                return;
            }

            const response = await fetch(`/api/certificate/${certificateId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch certificate');
            }

            const data = await response.json();
            setCertificateData(data);
        } catch (error) {
            console.error('Certificate fetch error:', error);
            alert('Certificate not found');
            router.push('/dashboard');
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = () => {
        if (certificateData) {
            downloadCertificate(certificateData);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="spinner"></div>
            </div>
        );
    }

    if (!certificateData) {
        return null;
    }

    const percentage = Math.round((certificateData.score / certificateData.totalQuestions) * 100);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 py-12 px-4">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        Congratulations, {certificateData.name}!
                    </h1>
                    <p className="text-xl text-gray-600">You've successfully completed the English Proficiency Test</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="card text-center">
                        <p className="text-sm text-gray-600 mb-2">Your Score</p>
                        <p className="text-4xl font-bold text-gradient mb-1">
                            {certificateData.score}/{certificateData.totalQuestions}
                        </p>
                        <p className="text-gray-600">({percentage}%)</p>
                    </div>

                    <div className="card text-center">
                        <p className="text-sm text-gray-600 mb-2">Proficiency Level</p>
                        <p className="text-4xl font-bold text-gradient">
                            {certificateData.proficiencyLevel}
                        </p>
                    </div>

                    <div className="card text-center">
                        <p className="text-sm text-gray-600 mb-2">Certificate ID</p>
                        <p className="text-lg font-mono font-bold text-gray-900">
                            {certificateData.certificateId}
                        </p>
                    </div>
                </div>

                {/* Certificate Preview */}
                <div className="card card-elevated mb-8 bg-white">
                    <div className="aspect-[297/210] bg-gradient-to-br from-blue-50 to-white border-4 border-primary rounded-lg flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute top-0 left-0 w-full h-full"
                                style={{
                                    backgroundImage: 'radial-gradient(circle, #2962ff 1px, transparent 1px)',
                                    backgroundSize: '30px 30px'
                                }}
                            ></div>
                        </div>
                        <div className="relative text-center px-8">
                            <h2 className="text-5xl font-bold text-gradient mb-4">CERTIFICATE</h2>
                            <p className="text-gray-600 text-lg mb-6">of English Proficiency</p>
                            <div className="h-1 w-32 gradient-primary mx-auto mb-6"></div>
                            <p className="text-gray-600 text-sm mb-2">This certifies that</p>
                            <p className="text-4xl font-bold text-gray-900 mb-6">{certificateData.name}</p>
                            <p className="text-gray-600 mb-4">has successfully completed the English Proficiency Test</p>
                            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-6">
                                <div>
                                    <p className="text-sm text-gray-600">Score</p>
                                    <p className="text-2xl font-bold text-primary">
                                        {certificateData.score}/{certificateData.totalQuestions} ({percentage}%)
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Level</p>
                                    <p className="text-2xl font-bold text-secondary">{certificateData.proficiencyLevel}</p>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500">Certificate ID: {certificateData.certificateId}</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button onClick={handleDownload} className="btn btn-primary">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download PDF Certificate
                    </button>
                    <button
                        onClick={() => router.push('/dashboard')}
                        className="btn btn-secondary"
                    >
                        Back to Dashboard
                    </button>
                </div>
            </div>
        </div>
    );
}
