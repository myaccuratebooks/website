import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ArrowRight, Calendar, Play, Users, MessageCircle, Star } from "lucide-react";
import SEO from '@/components/SEO';

const HomePage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "My Accurate Books",
    "url": "https://myaccuratebooks.com",
    "logo": "https://myaccuratebooks.com/logo.png",
    "description": "Professional bookkeeping and accounting services for businesses of all sizes.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254116333000",
      "contactType": "customer service"
    }
  };

  const upcomingWebinars = [
    {
      title: "Mastering Financial Reports",
      date: "March 15, 2024",
      time: "2:00 PM EST",
      speaker: "Sarah Johnson",
      role: "Senior Accountant"
    },
    {
      title: "Tax Season Preparation",
      date: "March 20, 2024",
      time: "3:30 PM EST",
      speaker: "Michael Chen",
      role: "Tax Specialist"
    }
  ];

  const latestUpdates = [
    {
      title: "Advanced Financial Reporting",
      date: "March 1, 2024",
      description: "New customizable dashboards and real-time analytics"
    },
    {
      title: "Performance Optimization",
      date: "February 28, 2024",
      description: "50% faster page load times and improved responsiveness"
    }
  ];

  return (
    <>
      <SEO
        title="Professional Bookkeeping Services"
        description="Get accurate and reliable bookkeeping services for your business. We offer comprehensive accounting solutions tailored to your needs."
        keywords="bookkeeping, accounting services, business accounting, financial management"
        ogImage="https://myaccuratebooks.com/images/home-og.jpg"
        structuredData={structuredData}
      />
    <div>
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        <img
          src="/images/comp.jpg"
          alt="Professional using a device"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <div className="max-w-xl text-white text-center md:text-left animate-in fade-in slide-in-from-bottom-2">
            <p className="mb-2 text-base md:text-lg font-semibold text-white/90">
              MyAccurateBooks Accounting Software
            </p>
            <h1 className="mb-2 text-4xl md:text-6xl font-bold">One platform</h1>
            <h2 className="mb-6 text-2xl md:text-4xl font-bold text-white/90">
              Built for business owners
            </h2>
            <p className="mb-8 text-lg md:text-xl text-white/90">
              Accounting is just the start. Manage sales, track stock, send invoices, get paid, and grow—all in one powerful
              platform made for Kenyan businesses.
            </p>
            <Button
              asChild
              className="bg-green-600 hover:bg-green-700 text-white rounded-full font-bold px-8 py-6"
            >
              <Link to="/pricing">Explore plans &amp; pricing</Link>
            </Button>
          </div>
        </div>
        <Link
          to="/contact"
          className="fixed bottom-24 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-colors"
          aria-label="Chat with a sales expert"
        >
          <MessageCircle className="w-5 h-5" />
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <SectionHeading
            title="Streamline Your Business Operations"
            subtitle="MyAccurate Books provides all the essential tools to help SMEs manage their finances with confidence and ease."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Point of Sale (POS)"
              description="Easily process sales, track inventory, and manage customer transactions all in one place."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <path d="M4 9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9Z" />
                  <path d="M10 13h4" />
                  <path d="M7 16h.01" />
                  <path d="M17 16h.01" />
                  <path d="M5 5h14" />
                </svg>
              }
            />
            <FeatureCard
              title="Customer Management"
              description="Build and maintain customer relationships with detailed profiles, histories, and communication tools."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              }
            />
            <FeatureCard
              title="Item Management"
              description="Track stock levels, set reorder points, and manage product details efficiently."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <path d="M20 7h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" />
                  <path d="M16 3h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8" />
                  <path d="M12 12h.01" />
                </svg>
              }
            />
            <FeatureCard
              title="Payments Integration"
              description="Accept multiple payment methods including Mpesa, bank transfers, and cash with seamless integration."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
              }
            />
            <FeatureCard
              title="Multi-User Access"
              description="Control what your employees can see and do within the system with role-based permissions."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              }
            />
            <FeatureCard
              title="Cloud-Based Solution"
              description="Access your business data anytime, anywhere, from any device with secure cloud storage."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                </svg>
              }
            />
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/features">View All Features</Link>
            </Button>
          </div>
        </div>
      </section>

         {/* Mobile App Section */}
         <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Take Your Business On The Go
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                  Access your business data anytime, anywhere with our powerful mobile application. Keep track of sales, inventory, and finances right from your phone.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accurate-purple-600">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span className="text-gray-700">Real-time sales tracking</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accurate-purple-600">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span className="text-gray-700">Mobile POS functionality</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accurate-purple-600">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span className="text-gray-700">Instant inventory updates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accurate-purple-600">
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <line x1="2" x2="22" y1="10" y2="10" />
                    </svg>
                    <span className="text-gray-700">Secure card payments on the go</span>
                  </li>
                </ul>
                <a
                  href="https://play.google.com/store/apps/details?id=core.rwk.myaccuratebooks&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src="/images/playstore.webp"
                    alt="Get it on Google Play"
                    className="h-16 w-auto hover:opacity-90 transition-opacity"
                  />
                </a>
              </div>
              <div className="relative animate-on-scroll">
                <div className="absolute inset-0 bg-gradient-to-r from-accurate-purple-200 to-accurate-blue-200 rounded-lg transform rotate-3"></div>
                <div className="relative">
                  <img
                    src="/images/phone.jpg"
                    alt="MyAccurate Books Mobile App"
                    className="w-full h-auto rounded-lg shadow-xl"
                  />
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Upcoming Features */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Coming Soon"
            subtitle="We're constantly improving MyAccurate Books. Here are some features we're working on."
          />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 animate-on-scroll">
              <div className="w-12 h-12 bg-accurate-purple-100 rounded-md flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accurate-purple-600">
                  <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-7h-2c0-1-.5-1.5-1-2z" />
                  <path d="M2 9v1c0 1.1.9 2 2 2h1" />
                  <path d="M16 11h0" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Petty Cash Management</h3>
              <p className="text-gray-600 mb-4">
                Track small expenses and maintain petty cash balances with detailed logs and reports.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-accurate-purple-600 rounded-full mr-2"></span>
                  <span>Cash withdrawal and deposit tracking</span>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-accurate-purple-600 rounded-full mr-2"></span>
                  <span>Expense categorization</span>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-accurate-purple-600 rounded-full mr-2"></span>
                  <span>Reconciliation tools</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <div className="w-12 h-12 bg-accurate-purple-100 rounded-md flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accurate-purple-600">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                  <path d="M8 14h.01" />
                  <path d="M12 14h.01" />
                  <path d="M16 14h.01" />
                  <path d="M8 18h.01" />
                  <path d="M12 18h.01" />
                  <path d="M16 18h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Payroll System</h3>
              <p className="text-gray-600 mb-4">
                Calculate salaries, manage employee payments, and handle statutory deductions automatically.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-accurate-purple-600 rounded-full mr-2"></span>
                  <span>Tax calculation and reporting</span>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-accurate-purple-600 rounded-full mr-2"></span>
                  <span>Employee benefits management</span>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-accurate-purple-600 rounded-full mr-2"></span>
                  <span>Direct deposit integration</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
              <div className="w-12 h-12 bg-accurate-purple-100 rounded-md flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accurate-purple-600">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Business Analytics</h3>
              <p className="text-gray-600 mb-4">
                Gain deeper insights into your business performance with customizable dashboards and reports.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-accurate-purple-600 rounded-full mr-2"></span>
                  <span>Sales forecasting</span>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-accurate-purple-600 rounded-full mr-2"></span>
                  <span>Profit margin analysis</span>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-accurate-purple-600 rounded-full mr-2"></span>
                  <span>Custom report builder</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <SectionHeading
            title="How MyAccurate Books Works"
            subtitle="Get your business finances under control in three simple steps."
          />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 animate-on-scroll">
              <div className="w-16 h-16 rounded-full bg-accurate-purple-100 flex items-center justify-center mb-6 text-accurate-purple-600 font-bold text-xl">1</div>
              <h3 className="text-xl font-bold mb-3">Sign Up</h3>
              <p className="text-gray-600">Create your account and set up your business profile with our simple onboarding process.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 rounded-full bg-accurate-purple-100 flex items-center justify-center mb-6 text-accurate-purple-600 font-bold text-xl">2</div>
              <h3 className="text-xl font-bold mb-3">Input Your Data</h3>
              <p className="text-gray-600">Add your products, services, and customer information with our guided setup wizard.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
              <div className="w-16 h-16 rounded-full bg-accurate-purple-100 flex items-center justify-center mb-6 text-accurate-purple-600 font-bold text-xl">3</div>
              <h3 className="text-xl font-bold mb-3">Start Managing</h3>
              <p className="text-gray-600">Begin recording transactions, generating reports, and gaining insights into your business performance.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link to="/pricing">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* New Business Benefits Section */}
      <section className="py-20">
        <div className="container">
          <SectionHeading
            title="Benefits for Your Business"
            subtitle="Discover how MyAccurate Books can transform your financial management"
          />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <ul className="space-y-6">
                <li className="flex animate-on-scroll">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-accurate-purple-100 flex items-center justify-center text-accurate-purple-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Save Time</h3>
                    <p className="text-gray-600">Automate repetitive financial tasks and reduce manual data entry by up to 60%, giving you more time to focus on growing your business.</p>
                  </div>
                </li>
                <li className="flex animate-on-scroll" style={{ animationDelay: "0.2s" }}>
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-accurate-purple-100 flex items-center justify-center text-accurate-purple-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Reduce Errors</h3>
                    <p className="text-gray-600">Eliminate common accounting mistakes with automatic calculations and data validation that ensures your financial records are always accurate.</p>
                  </div>
                </li>
                <li className="flex animate-on-scroll" style={{ animationDelay: "0.4s" }}>
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-accurate-purple-100 flex items-center justify-center text-accurate-purple-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Make Better Decisions</h3>
                    <p className="text-gray-600">Gain real-time insights into your business performance with comprehensive financial reports and dashboards that help you make informed decisions.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 relative animate-on-scroll">
              <div className="absolute inset-0 bg-gradient-to-r from-accurate-blue-200 to-accurate-purple-200 rounded-lg transform -rotate-2"></div>
              <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 relative">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Business owner using MyAccurate Books"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accurate-blue-600 text-white rounded-lg p-4 shadow-lg">
                <p className="font-bold">Trusted by 1000+ SMEs</p>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <Button size="lg" variant="default" className="gap-2" asChild>
              <Link to="/about">
                Learn More About Us <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container">
          <SectionHeading
            title="What Our Customers Say"
            subtitle="Businesses across Africa trust MyAccurate Books to manage their finances and streamline operations."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="MyAccurate Books has transformed how we manage our finances. The interface is intuitive, and we no longer need an accountant for day-to-day bookkeeping."
              name="Sarah Kimani"
              role="Owner"
              company="Nairobi Crafts"
            />
            <TestimonialCard
              quote="As someone with no accounting background, this software has been a lifesaver. I can now track all my business finances with confidence."
              name="David Ochieng"
              role="Founder"
              company="Tech Solutions Ltd"
            />
            <TestimonialCard
              quote="The customer management feature has helped us build better relationships with our clients. We can now track their purchase history and preferences easily."
              name="Amina Hassan"
              role="Manager"
              company="Coastal Supplies"
            />
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/testimonials">Read More Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Webinars Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Upcoming Webinars
              </h2>
              <p className="text-gray-600">
                Join our expert-led sessions to learn more about MyAccurate Books
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {upcomingWebinars.map((webinar, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                >
                  <div className="flex items-center space-x-4 text-gray-600 mb-4">
                    <Calendar className="h-5 w-5" />
                    <span>{webinar.date} at {webinar.time}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {webinar.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Users className="h-5 w-5 mr-2" />
                    <span>{webinar.speaker} - {webinar.role}</span>
                  </div>
                  <Button className="w-full bg-accurate-purple-600 hover:bg-accurate-purple-700 text-white">
                    Register Now
                  </Button>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                to="/webinars"
                className="inline-flex items-center text-accurate-purple-600 hover:text-accurate-purple-700"
              >
                View all webinars
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Latest Updates
              </h2>
              <p className="text-gray-600">
                Stay informed about new features and improvements
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {latestUpdates.map((update, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
                >
                  <div className="flex items-center space-x-4 text-gray-600 mb-4">
                    <Star className="h-5 w-5 text-accurate-purple-500" />
                    <span>{update.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {update.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{update.description}</p>
                  <Link
                    to="/updates"
                    className="text-accurate-purple-600 hover:text-accurate-purple-700 inline-flex items-center"
                  >
                    Learn more
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See MyAccurate Books in Action
            </h2>
            <p className="text-gray-600 mb-8">
              Watch our demo to see how MyAccurate Books can transform your business accounting
            </p>
            <div className="aspect-video bg-gray-100 rounded-xl mb-8 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Button className="bg-accurate-purple-600 hover:bg-accurate-purple-700 text-white p-4 rounded-full">
                  <Play className="h-8 w-8" />
                </Button>
              </div>
            </div>
            <Link to="/demo">
              <Button className="bg-accurate-purple-600 hover:bg-accurate-purple-700 text-white px-8 py-3 rounded-lg">
                Schedule a Live Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-gray-600 mb-8">
              Join our growing network of partners and expand your business
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {/* Partner logos would go here */}
              <div className="h-12 bg-gray-200 rounded"></div>
              <div className="h-12 bg-gray-200 rounded"></div>
              <div className="h-12 bg-gray-200 rounded"></div>
              <div className="h-12 bg-gray-200 rounded"></div>
            </div>
            <Link to="/partners">
              <Button className="bg-accurate-purple-600 hover:bg-accurate-purple-700 text-white px-8 py-3 rounded-lg">
                Become a Partner
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Have questions? Our team is here to help you succeed
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 bg-gray-50 rounded-xl">
                <MessageCircle className="h-8 w-8 text-accurate-purple-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Live Chat
                </h3>
                <p className="text-gray-600">
                  Chat with our support team in real-time
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <Calendar className="h-8 w-8 text-accurate-purple-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Schedule Call
                </h3>
                <p className="text-gray-600">
                  Book a call with our experts
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <MessageCircle className="h-8 w-8 text-accurate-purple-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Email Us
                </h3>
                <p className="text-gray-600">
                  Get in touch via email
                </p>
              </div>
            </div>
            <Link to="/contact">
              <Button className="bg-accurate-purple-600 hover:bg-accurate-purple-700 text-white px-8 py-3 rounded-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accurate-purple-600 to-accurate-blue-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Control of Your Business Finances?</h2>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of SMEs across Africa who are simplifying their accounting with MyAccurate Books.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-accurate-purple-600" asChild>
                <Link to="/contact">Book a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default HomePage;
