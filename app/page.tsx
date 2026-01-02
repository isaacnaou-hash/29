import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pb-12 md:pb-24 px-6 overflow-hidden bg-mesh" id="hero" style={{ paddingTop: '8rem' }}>
        {/* Animated orbs */}
        <div className="orb w-96 h-96 gradient-primary top-0 right-0" style={{ animationDelay: '0s' }}></div>
        <div className="orb w-80 h-80 gradient-secondary bottom-20 left-0" style={{ animationDelay: '2s' }}></div>
        <div className="orb w-72 h-72 gradient-accent top-40 left-1/3" style={{ animationDelay: '4s' }}></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              {/* Floating badge */}
              <div className="inline-block mb-6 px-5 py-2.5 glass-white rounded-full shadow-lg animate-float">
                <span className="text-sm font-semibold text-gray-800">
                  ✨ Trusted by <span className="text-gradient font-bold">10,000+</span> professionals
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-6 text-shadow break-words pt-4">
                Prove Your English{' '}
                <span className="text-gradient block mt-2">Proficiency</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Get professionally certified in English language skills. Trusted by employers worldwide,
                our comprehensive test evaluates your reading, grammar, and vocabulary in just{' '}
                <span className="font-bold text-gradient-pink">60 minutes</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto">
                <Link href="/auth/register" className="btn btn-primary text-lg px-10 py-5 hover-glow">
                  Take the Test - $29
                </Link>
                <Link href="#how-it-works" className="btn glass-white text-gray-900 border-2 border-white/50 hover:bg-white text-lg px-10 py-5 transition-all">
                  Learn More
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-3 group">
                  <div className="w-12 h-12 rounded-full gradient-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-gray-900 font-bold block">Instant Results</span>
                    <span className="text-gray-500 text-sm">Immediate scoring</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-gray-900 font-bold block">PDF Certificate</span>
                    <span className="text-gray-500 text-sm">Professional format</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Test highlights card */}
            <div className="relative animate-fade-in animate-delay-200">
              <div className="relative card card-elevated p-10 bg-white hover-lift">
                {/* Decorative gradient orbs */}
                <div className="absolute -top-6 -right-6 w-32 h-32 gradient-primary rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 gradient-secondary rounded-full opacity-20 blur-3xl"></div>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Test Highlights</span>
                  </div>

                  <ul className="space-y-6">
                    <li className="flex items-start gap-4 group">
                      <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-1">20 Comprehensive Questions</h4>
                        <p className="text-gray-600">Reading comprehension, grammar, and vocabulary</p>
                      </div>
                    </li>

                    <li className="flex items-start gap-4 group">
                      <div className="w-14 h-14 rounded-2xl gradient-secondary flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-1">60-Minute Duration</h4>
                        <p className="text-gray-600">Timed test with auto-save functionality</p>
                      </div>
                    </li>

                    <li className="flex items-start gap-4 group">
                      <div className="w-14 h-14 rounded-2xl gradient-accent flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-1">Official Certificate</h4>
                        <p className="text-gray-600">Professional PDF with unique ID</p>
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
      <section id="features" className="py-16 md:py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-purple-50 scroll-mt-20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 md:mb-20 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 text-shadow">
              Why Choose <span className="text-gradient">EnglishPro?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The most trusted English proficiency certification platform for professionals worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="card card-gradient text-center group hover-lift animate-fade-in">
              <div className="relative mb-8 inline-block">
                <div className="w-20 h-20 gradient-primary rounded-3xl flex items-center justify-center shadow-glow group-hover:shadow-glow-pink transition-all duration-500 group-hover:rotate-12">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Employer Trusted</h3>
              <p className="text-gray-600 leading-relaxed">
                Our certificates are recognized and accepted by leading companies across industries for hiring decisions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card card-gradient text-center group hover-lift animate-fade-in animate-delay-100">
              <div className="relative mb-8 inline-block">
                <div className="w-20 h-20 gradient-secondary rounded-3xl flex items-center justify-center shadow-glow-cyan group-hover:shadow-glow-pink transition-all duration-500 group-hover:rotate-12">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-white text-xs font-bold">⚡</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant Results</h3>
              <p className="text-gray-600 leading-relaxed">
                Get your score and proficiency level immediately after completing the test. No waiting period required.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card card-gradient text-center group hover-lift animate-fade-in animate-delay-200">
              <div className="relative mb-8 inline-block">
                <div className="w-20 h-20 gradient-accent rounded-3xl flex items-center justify-center shadow-glow-pink group-hover:shadow-glow-cyan transition-all duration-500 group-hover:rotate-12">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">★</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Assessment</h3>
              <p className="text-gray-600 leading-relaxed">
                Evaluate reading comprehension, grammar proficiency, and vocabulary mastery in one rigorous test.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 px-6 bg-white relative overflow-hidden scroll-mt-20">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 gradient-primary opacity-5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 gradient-secondary opacity-5 blur-3xl rounded-full"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12 md:mb-20 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 text-shadow">
              How It <span className="text-gradient">Works</span>
            </h2>
            <p className="text-xl text-gray-600">Get certified in three simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-1 bg-gradient-to-r from-purple-primary via-cyan-light to-pink-light opacity-20"></div>

            {/* Step 1 */}
            <div className="relative animate-slide-up">
              <div className="card-elevated bg-white p-10 relative overflow-hidden hover-lift">
                <div className="absolute top-0 left-0 w-full h-2 gradient-primary"></div>
                <div className="absolute top-0 right-0 w-48 h-48 gradient-primary opacity-10 blur-3xl rounded-full"></div>

                <div className="relative">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-8 shadow-lg">
                    <span className="text-white font-black text-3xl">1</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Register & Pay</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Create your account and complete the secure $29 payment via Paystack. Instant access to the test.
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Secure payment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative animate-slide-up animate-delay-100">
              <div className="card-elevated bg-white p-10 relative overflow-hidden hover-lift">
                <div className="absolute top-0 left-0 w-full h-2 gradient-secondary"></div>
                <div className="absolute top-0 right-0 w-48 h-48 gradient-secondary opacity-10 blur-3xl rounded-full"></div>

                <div className="relative">
                  <div className="w-16 h-16 rounded-full gradient-secondary flex items-center justify-center mb-8 shadow-lg">
                    <span className="text-white font-black text-3xl">2</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Take the Test</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Complete 20 questions covering reading, grammar, and vocabulary within 60 minutes. Auto-save ensures no progress is lost.
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">60 minutes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative animate-slide-up animate-delay-200">
              <div className="card-elevated bg-white p-10 relative overflow-hidden hover-lift">
                <div className="absolute top-0 left-0 w-full h-2 gradient-accent"></div>
                <div className="absolute top-0 right-0 w-48 h-48 gradient-accent opacity-10 blur-3xl rounded-full"></div>

                <div className="relative">
                  <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center mb-8 shadow-lg">
                    <span className="text-white font-black text-3xl">3</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Get Certified</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Receive your official certificate immediately with your score, proficiency level, and unique ID. Download as PDF.
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">Instant download</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 px-6 bg-gradient-to-br from-purple-50 via-white to-cyan-50 relative overflow-hidden scroll-mt-20">
        <div className="absolute top-20 left-10 w-72 h-72 gradient-primary opacity-10 blur-3xl rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 gradient-secondary opacity-10 blur-3xl rounded-full animate-float" style={{ animationDelay: '1s' }}></div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-12 md:mb-20 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 text-shadow">
              Simple, <span className="text-gradient">Transparent</span> Pricing
            </h2>
            <p className="text-lg md:text-xl text-gray-600">One test. One price. Unlimited opportunities.</p>
          </div>

          <div className="max-w-lg mx-auto animate-scale-in">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 gradient-shimmer opacity-20 blur-2xl group-hover:opacity-40 transition-opacity rounded-3xl"></div>

              <div className="relative card-elevated glass-white p-6 md:p-12 text-center overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-24 -right-24 w-48 h-48 gradient-primary opacity-20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 gradient-secondary opacity-20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

                <div className="relative">
                  <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full shadow-md">
                    <span className="text-sm font-bold text-green-700 uppercase tracking-wide">One-Time Payment</span>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-7xl font-black text-gradient text-shadow-strong">$29</span>
                    </div>
                    <span className="text-gray-600 text-xl font-medium">/ test</span>
                  </div>

                  <ul className="space-y-5 mb-10 text-left max-w-sm mx-auto">
                    {[
                      '20 comprehensive questions',
                      '60-minute timed test',
                      'Instant results & scoring',
                      'Official PDF certificate',
                      'Unique certificate ID',
                      'Lifetime certificate access'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 shadow-md">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/auth/register" className="btn btn-gradient w-full text-xl py-6 mb-6 shadow-glow-pink hover:scale-105 transition-all">
                    Start Your Test Now
                  </Link>

                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="font-medium">Secure payment via Paystack</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 gradient-shimmer relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8 text-shadow-strong">
              Ready to Prove Your English Skills?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of professionals who have certified their English proficiency with{' '}
              <span className="font-bold">EnglishPro</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/auth/register" className="btn bg-white text-primary hover:shadow-2xl text-xl px-12 py-6 hover:scale-105 transition-all">
                Get Started for $29
              </Link>
              <Link href="#features" className="btn glass-white text-white border-2 border-white/30 text-xl px-12 py-6 hover:scale-105 transition-all">
                Learn More
              </Link>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">No subscription</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Instant access</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Lifetime access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
