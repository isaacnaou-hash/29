import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block mb-4 px-4 py-2 bg-white rounded-full shadow-md">
                <span className="text-sm font-semibold text-gray-700">✨ Trusted by 10,000+ professionals</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Prove Your English{' '}
                <span className="text-gradient">Proficiency</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get professionally certified in English language skills. Trusted by employers worldwide, our comprehensive test evaluates your reading, grammar, and vocabulary in just 60 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth/register" className="btn btn-primary text-lg px-8 py-4">
                  Take the Test - $29
                </Link>
                <Link href="#how-it-works" className="btn btn-secondary text-lg px-8 py-4">
                  Learn More
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">Instant Results</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">PDF Certificate</span>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative card card-elevated p-8 bg-white">
                <div className="absolute -top-4 -right-4 w-24 h-24 gradient-primary rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 gradient-secondary rounded-full opacity-20 blur-2xl"></div>
                <div className="relative">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Test Highlights</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">20 Comprehensive Questions</h4>
                        <p className="text-gray-600 text-sm">Reading comprehension, grammar, and vocabulary</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">60-Minute Duration</h4>
                        <p className="text-gray-600 text-sm">Timed test with auto-save functionality</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Official Certificate</h4>
                        <p className="text-gray-600 text-sm">Professional PDF with unique ID</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-gradient">EnglishPro?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The most trusted English proficiency certification platform for professionals worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Employer Trusted</h3>
              <p className="text-gray-600">
                Our certificates are recognized and accepted by leading companies across industries for hiring decisions.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Results</h3>
              <p className="text-gray-600">
                Get your score and proficiency level immediately after completing the test. No waiting period required.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Assessment</h3>
              <p className="text-gray-600">
                Evaluate reading comprehension, grammar proficiency, and vocabulary mastery in one rigorous test.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It <span className="text-gradient">Works</span>
            </h2>
            <p className="text-xl text-gray-600">Get certified in three simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="card-elevated bg-white p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 gradient-primary opacity-10 rounded-bl-full"></div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mb-6">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Register & Pay</h3>
                  <p className="text-gray-600">
                    Create your account and complete the secure $29 payment via Paystack. Instant access to the test.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="card-elevated bg-white p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 gradient-secondary opacity-10 rounded-bl-full"></div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-full gradient-secondary flex items-center justify-center mb-6">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Take the Test</h3>
                  <p className="text-gray-600">
                    Complete 20 questions covering reading, grammar, and vocabulary within 60 minutes. Auto-save ensures no progress is lost.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="card-elevated bg-white p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 gradient-accent opacity-10 rounded-bl-full"></div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center mb-6">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Certified</h3>
                  <p className="text-gray-600">
                    Receive your official certificate immediately with your score, proficiency level, and unique ID. Download as PDF.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, <span className="text-gradient">Transparent</span> Pricing
            </h2>
            <p className="text-xl text-gray-600">One test. One price. Unlimited opportunities.</p>
          </div>

          <div className="card-elevated shadow-glow max-w-md mx-auto bg-gradient-to-br from-white to-blue-50 p-10 text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 gradient-primary opacity-20 rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="inline-block mb-4 px-4 py-2 bg-green-100 rounded-full">
                <span className="text-sm font-semibold text-green-700">One-Time Payment</span>
              </div>
              <div className="mb-6">
                <span className="text-6xl font-bold text-gray-900">$29</span>
                <span className="text-gray-600 text-xl"> / test</span>
              </div>
              <ul className="space-y-4 mb-8 text-left">
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">20 comprehensive questions</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">60-minute timed test</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Instant results & scoring</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Official PDF certificate</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Unique certificate ID</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Lifetime certificate access</span>
                </li>
              </ul>
              <Link href="/auth/register" className="btn btn-primary w-full text-lg py-4">
                Start Your Test Now
              </Link>
              <p className="text-sm text-gray-500 mt-4">Secure payment via Paystack</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 gradient-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Prove Your English Skills?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have certified their English proficiency with EnglishPro
          </p>
          <Link href="/auth/register" className="btn bg-white text-primary hover:shadow-2xl text-lg px-10 py-4">
            Get Started for $29
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
