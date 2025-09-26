import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play, BarChart3, Users, Package, CreditCard, FileText, Smartphone } from "lucide-react";
import SEO from '@/components/SEO';

const FeaturesPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Point of Sale (POS)",
        "description": "Process sales quickly, print receipts, and track inventory movements in real-time"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Customer Management",
        "description": "Build and maintain customer profiles with purchase history and communication logs"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Item Management",
        "description": "Track inventory levels, set reorder points, and manage product details"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Features - Comprehensive Bookkeeping Solutions"
        description="Discover our comprehensive bookkeeping features designed to streamline your business finances. From automated bookkeeping to real-time reporting."
        keywords="bookkeeping features, accounting software features, financial management tools, automated bookkeeping"
        canonical="/features"
        ogImage="https://myaccuratebooks.com/images/features-og.jpg"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-white font-['Poppins']">
        {/* Hero Section */}
        <section className="bg-[#FF8C42] py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                The features you need.
                <br />
                <span className="text-[#1E3A8A]">All in one place.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
                Powerful accounting software that helps you send invoices, track inventory, 
                manage cashflow, and streamline your business operations across Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-[#FF8C42] hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-lg shadow-lg"
                  asChild
                >
                  <Link to="/pricing">Start my free trial</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-[#FF8C42] font-semibold px-8 py-4 text-lg rounded-lg"
                  asChild
                >
                  <Link to="/demo">Request a demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                {/* Point of Sale Feature */}
                <div className="bg-[#E8F4FD] rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#1E3A8A] mb-6">
                      Point of Sale (POS)
                    </h2>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      Process sales quickly, print receipts, and track inventory movements in real-time. 
                      Accept multiple payment methods including M-Pesa, cash, and card payments with 
                      seamless integration to your accounting records.
                    </p>
                    <Button 
                      variant="link" 
                      className="text-[#1E3A8A] font-semibold text-lg p-0 h-auto hover:text-[#FF8C42]"
                      asChild
                    >
                      <Link to="/demo" className="inline-flex items-center">
                        Learn about POS <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                  
                  {/* POS Interface Mockup */}
                  <div className="absolute -right-8 -bottom-8 w-80 h-64 bg-white rounded-2xl shadow-2xl border border-gray-200 transform rotate-3">
                    <div className="absolute inset-0 bg-white/80 rounded-2xl"></div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-800">New Sale</h3>
                        <div className="text-sm text-gray-500">POS Terminal</div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm">Product A</span>
                          <span className="font-semibold">KES 500</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm">Product B</span>
                          <span className="font-semibold">KES 750</span>
                        </div>
                        <div className="border-t pt-3 flex justify-between items-center">
                          <span className="font-bold">Total</span>
                          <span className="font-bold text-lg">KES 1,250</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Customer Management Feature */}
                <div className="bg-[#1E3A8A] rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                      Customer Management
                    </h2>
                    <p className="text-lg text-white/90 mb-8 leading-relaxed">
                      Build and maintain customer profiles with detailed purchase history, 
                      communication logs, and preferences. Track customer interactions and 
                      improve relationships with comprehensive customer insights.
                    </p>
                    <Button 
                      variant="link" 
                      className="text-white font-semibold text-lg p-0 h-auto hover:text-[#FF8C42]"
                      asChild
                    >
                      <Link to="/demo" className="inline-flex items-center">
                        Learn about Customer Management <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                  
                  {/* Customer Interface Mockup */}
                  <div className="absolute -right-8 -bottom-8 w-80 h-64 bg-white rounded-2xl shadow-2xl border border-gray-200 transform -rotate-3">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <Users className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">Sarah Kimani</h3>
                          <p className="text-sm text-gray-500">Premium Customer</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Total Purchases</span>
                          <span className="font-semibold">KES 45,000</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Last Purchase</span>
                          <span className="font-semibold">2 days ago</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Status</span>
                          <span className="text-green-600 font-semibold">Active</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Row */}
              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                {/* Item Management */}
                <div className="bg-[#F0F9FF] rounded-3xl p-8 relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#1E3A8A] mb-4">
                      Item Management
                    </h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Track inventory levels, set reorder points, and manage product details 
                      with barcode scanning and automated stock alerts.
                    </p>
                    <Button 
                      variant="link" 
                      className="text-[#1E3A8A] font-semibold p-0 h-auto hover:text-[#FF8C42]"
                      asChild
                    >
                      <Link to="/demo" className="inline-flex items-center">
                        Learn about Inventory <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  
                  {/* Inventory Mockup */}
                  <div className="absolute -right-4 -bottom-4 w-48 h-32 bg-white rounded-xl shadow-lg border border-gray-200">
                    <div className="absolute inset-0 bg-white/80 rounded-xl"></div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold">Stock Levels</span>
                        <Package className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Product A</span>
                          <span className="text-green-600">150 units</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>Product B</span>
                          <span className="text-red-600">5 units</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payments Integration */}
                <div className="bg-[#1E3A8A] rounded-3xl p-8 text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                      Payments Integration
                    </h2>
                    <p className="text-white/90 mb-6 leading-relaxed">
                      Accept M-Pesa, bank transfers, and cash payments with automatic 
                      reconciliation and real-time payment tracking.
                    </p>
                    <Button 
                      variant="link" 
                      className="text-white font-semibold p-0 h-auto hover:text-[#FF8C42]"
                      asChild
                    >
                      <Link to="/demo" className="inline-flex items-center">
                        Learn about Payments <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  
                  {/* Payment Methods Mockup */}
                  <div className="absolute -right-4 -bottom-4 w-48 h-32 bg-white rounded-xl shadow-lg border border-gray-200">
                    <div className="absolute inset-0 bg-white/80 rounded-xl"></div>
                    <div className="p-4">
                      <div className="text-sm font-semibold text-gray-800 mb-3">Payment Methods</div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-5 bg-green-500 rounded text-white text-xs flex items-center justify-center">M</div>
                        <span className="text-xs text-gray-700">M-Pesa</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <CreditCard className="h-4 w-4 text-blue-600" />
                        <span className="text-xs text-gray-700">Cards</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-gray-400 rounded"></div>
                        <span className="text-xs text-gray-700">Bank Transfer</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* More Features */}
                <div className="bg-[#FEF3C7] rounded-3xl p-8 relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-[#FF8C42] rounded-xl flex items-center justify-center mb-6">
                      <span className="text-white font-bold text-xl">+</span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#1E3A8A] mb-6">
                      More features
                    </h2>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <Link to="/demo" className="flex items-center text-[#1E3A8A] hover:text-[#FF8C42] font-medium">
                        Multi-User Access <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                      <Link to="/demo" className="flex items-center text-[#1E3A8A] hover:text-[#FF8C42] font-medium">
                        Financial Reports <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                      <Link to="/demo" className="flex items-center text-[#1E3A8A] hover:text-[#FF8C42] font-medium">
                        Expense Tracking <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                      <Link to="/demo" className="flex items-center text-[#1E3A8A] hover:text-[#FF8C42] font-medium">
                        Invoice Management <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                      <Link to="/demo" className="flex items-center text-[#1E3A8A] hover:text-[#FF8C42] font-medium">
                        Mobile App <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                      <Link to="/demo" className="flex items-center text-[#1E3A8A] hover:text-[#FF8C42] font-medium">
                        Cloud Backup <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                      <Link to="/demo" className="flex items-center text-[#1E3A8A] hover:text-[#FF8C42] font-medium">
                        Tax Compliance <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                      <Link to="/demo" className="flex items-center text-[#1E3A8A] hover:text-[#FF8C42] font-medium">
                        Business Analytics <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Features Row */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Financial Reports */}
                <div className="bg-[#F0F9FF] rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#1E3A8A] mb-6">
                      Financial Reports
                    </h2>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      Generate comprehensive financial statements, profit & loss reports, 
                      and cash flow analysis with real-time data visualization and 
                      customizable reporting templates.
                    </p>
                    <Button 
                      variant="link" 
                      className="text-[#1E3A8A] font-semibold text-lg p-0 h-auto hover:text-[#FF8C42]"
                      asChild
                    >
                      <Link to="/demo" className="inline-flex items-center">
                        Learn about Reports <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                  
                  {/* Reports Dashboard Mockup */}
                  <div className="absolute -right-8 -bottom-8 w-80 h-64 bg-white rounded-2xl shadow-2xl border border-gray-200 transform rotate-2">
                    <div className="absolute inset-0 bg-white/80 rounded-2xl"></div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-800">P&L Report</h3>
                        <BarChart3 className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Revenue</span>
                          <span className="font-semibold text-green-600">KES 125,000</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Expenses</span>
                          <span className="font-semibold text-red-600">KES 85,000</span>
                        </div>
                        <div className="border-t pt-2 flex justify-between">
                          <span className="font-bold text-gray-800">Net Profit</span>
                          <span className="font-bold text-green-600">KES 40,000</span>
                        </div>
                      </div>
                      <div className="mt-4 h-16 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg flex items-end justify-center">
                        <div className="text-xs text-gray-500">📊 Chart View</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile App */}
                <div className="bg-[#FEF3C7] rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-[#FF8C42] rounded-xl flex items-center justify-center mb-6">
                      <Smartphone className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#1E3A8A] mb-6">
                      Mobile Access
                    </h2>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      Access your business data anytime, anywhere with our powerful mobile 
                      application. Process sales, check inventory, and view reports on the go.
                    </p>
                    <Button 
                      variant="link" 
                      className="text-[#1E3A8A] font-semibold text-lg p-0 h-auto hover:text-[#FF8C42]"
                      asChild
                    >
                      <Link to="/demo" className="inline-flex items-center">
                        Download Mobile App <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                  
                  {/* Mobile App Mockup */}
                  <div className="absolute -right-4 -bottom-4 w-32 h-56 bg-gray-900 rounded-2xl shadow-2xl overflow-hidden transform rotate-6">
                    <div className="absolute inset-0 bg-gray-900/80 rounded-2xl"></div>
                    <div className="bg-white h-full m-1 rounded-xl">
                      <div className="p-3">
                        <div className="bg-[#FF8C42] text-white text-center py-2 rounded-lg mb-3">
                          <div className="text-xs font-semibold">MyAccurate Books</div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-xs">
                            <div className="w-3 h-3 bg-blue-100 rounded"></div>
                            <span>Dashboard</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <div className="w-3 h-3 bg-green-100 rounded"></div>
                            <span>Sales</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <div className="w-3 h-3 bg-orange-100 rounded"></div>
                            <span>Inventory</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <div className="w-3 h-3 bg-purple-100 rounded"></div>
                            <span>Reports</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expense Tracking */}
                <div className="bg-[#F8FAFC] rounded-3xl p-8 relative overflow-hidden border border-gray-200">
                  <div className="relative z-10">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#1E3A8A] mb-4">
                      Expense Tracking
                    </h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Keep track of all business expenses with receipt scanning, 
                      automated categorization, and detailed expense reports for tax preparation.
                    </p>
                    <Button 
                      variant="link" 
                      className="text-[#1E3A8A] font-semibold p-0 h-auto hover:text-[#FF8C42]"
                      asChild
                    >
                      <Link to="/demo" className="inline-flex items-center">
                        Learn about Expenses <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  
                  {/* Expense Mockup */}
                  <div className="absolute -right-4 -bottom-4 w-48 h-32 bg-white rounded-xl shadow-lg border border-gray-200">
                    <div className="absolute inset-0 bg-white/80 rounded-xl"></div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold">Recent Expenses</span>
                        <FileText className="h-4 w-4 text-orange-600" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Office Supplies</span>
                          <span>KES 3,000</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>Fuel</span>
                          <span>KES 5,500</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>Marketing</span>
                          <span>KES 12,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Multi-User Access */}
                <div className="bg-[#1E3A8A] rounded-3xl p-8 text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                      Multi-User Access
                    </h2>
                    <p className="text-white/90 mb-6 leading-relaxed">
                      Grant different access levels to team members with role-based 
                      permissions and secure user management controls.
                    </p>
                    <Button 
                      variant="link" 
                      className="text-white font-semibold p-0 h-auto hover:text-[#FF8C42]"
                      asChild
                    >
                      <Link to="/demo" className="inline-flex items-center">
                        Learn about Access Control <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  
                  {/* User Management Mockup */}
                  <div className="absolute -right-4 -bottom-4 w-48 h-32 bg-white rounded-xl shadow-lg border border-gray-200">
                    <div className="absolute inset-0 bg-white/80 rounded-xl"></div>
                    <div className="p-4">
                      <div className="text-sm font-semibold text-gray-800 mb-3">Team Members</div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-xs font-semibold text-blue-600">A</span>
                          </div>
                          <div>
                            <div className="text-xs font-medium">Admin</div>
                            <div className="text-xs text-gray-500">Full Access</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-xs font-semibold text-green-600">S</span>
                          </div>
                          <div>
                            <div className="text-xs font-medium">Staff</div>
                            <div className="text-xs text-gray-500">Sales Only</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Preview Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1E3A8A] mb-6">
                See MyAccurate Books in Action
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Experience the power of our comprehensive dashboard
              </p>
            </div>
            
            {/* Dashboard Screenshot */}
            <div className="relative max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                  {/* Browser Header */}
                  <div className="bg-gray-100 px-6 py-4 flex items-center gap-3 border-b">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-white rounded-md px-4 py-2 text-sm text-gray-600 ml-4">
                      app.myaccuratebook.com
                    </div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
                    <div className="absolute inset-0 bg-white/90 rounded-2xl"></div>
                    <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <img src="/images/logo.png" alt="MyAccurate Books" className="h-10 w-auto" />
                        <span className="text-xl font-semibold text-gray-800">Dashboard</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-medium">👤</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Key Metrics Cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm opacity-90">Sales</span>
                          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                            💰
                          </div>
                        </div>
                        <div className="text-2xl font-bold mb-1">KES 125,000</div>
                        <div className="text-xs opacity-75 flex items-center gap-1">
                          <span className="text-green-300">↗ +15%</span> from last month
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-2xl">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm opacity-90">Expenses</span>
                          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                            💳
                          </div>
                        </div>
                        <div className="text-2xl font-bold mb-1">KES 85,000</div>
                        <div className="text-xs opacity-75 flex items-center gap-1">
                          <span className="text-red-300">↗ +8%</span> from last month
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-2xl">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm opacity-90">Purchases</span>
                          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                            🛍️
                          </div>
                        </div>
                        <div className="text-2xl font-bold mb-1">KES 65,000</div>
                        <div className="text-xs opacity-75 flex items-center gap-1">
                          <span className="text-green-300">↗ +12%</span> from last month
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-2xl">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm opacity-90">Profit</span>
                          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                            📈
                          </div>
                        </div>
                        <div className="text-2xl font-bold mb-1">KES 40,000</div>
                        <div className="text-xs opacity-75">Net Profit Margin: 32%</div>
                      </div>
                    </div>
                    
                    {/* Charts Section */}
                    <div className="grid lg:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold text-gray-800">Sales Performance</h3>
                          <div className="text-sm text-gray-500">Weekly Sales • Aug 3 - Aug 9, 2025</div>
                        </div>
                        <div className="h-40 bg-gradient-to-t from-blue-50 to-transparent rounded-lg flex items-end justify-center">
                          <div className="text-gray-400 text-sm">📊 Interactive Chart</div>
                        </div>
                      </div>
                      
                      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                        <h3 className="font-semibold text-gray-800 mb-4">Recent Activity</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">New invoice #INV-001 created</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">Payment received from Sarah K.</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">Expense recorded: Office supplies</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">Stock alert: Product A running low</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#1E3A8A]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to streamline your business?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join thousands of businesses across Africa using MyAccurate Books
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-[#FF8C42] hover:bg-[#FF8C42]/90 text-white font-semibold px-8 py-4 text-lg rounded-lg"
                  asChild
                >
                  <Link to="/pricing">Start Free Trial</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1E3A8A] font-semibold px-8 py-4 text-lg rounded-lg"
                  asChild
                >
                  <Link to="/demo">Schedule Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FeaturesPage;