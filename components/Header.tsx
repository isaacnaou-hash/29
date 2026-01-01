'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        // Check if user is logged in
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        window.location.href = '/';
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white shadow-md backdrop-blur-lg bg-opacity-90'
                    : 'bg-transparent'
                }`}
        >
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

                    <nav className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/#features"
                            className="text-gray-700 hover:text-primary font-medium transition-colors"
                        >
                            Features
                        </Link>
                        <Link
                            href="/#how-it-works"
                            className="text-gray-700 hover:text-primary font-medium transition-colors"
                        >
                            How It Works
                        </Link>
                        <Link
                            href="/#pricing"
                            className="text-gray-700 hover:text-primary font-medium transition-colors"
                        >
                            Pricing
                        </Link>
                    </nav>

                    <div className="flex items-center space-x-4">
                        {isLoggedIn ? (
                            <>
                                <Link href="/dashboard" className="btn btn-secondary">
                                    Dashboard
                                </Link>
                                <button onClick={logout} className="btn btn-primary">
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link href="/auth/login" className="text-gray-700 hover:text-primary font-medium transition-colors">
                                    Login
                                </Link>
                                <Link href="/auth/register" className="btn btn-primary">
                                    Get Started
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
