import React, { useState } from 'react';
import SEO from '@/components/SEO';
import { Shield, Lock, FileText, UserCheck, Database, Clock, AlertCircle, Mail, Cookie, ChevronDown, ChevronUp } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    introduction: true,
    definitions: true,
    dataController: true,
    dataCollection: true,
    legalBasis: true,
    dataUsage: true,
    dataSecurity: true,
    dataRetention: true,
    userRights: true,
    cookies: true,
    thirdParty: true,
    children: true,
    changes: true,
    contact: true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <SEO
        title="Privacy Policy - MyAccurate Books"
        description="Our comprehensive privacy policy outlines how we collect, use, and protect your data in compliance with Kenya's Data Protection Act 2019."
        keywords="privacy policy, data protection, Kenya data protection act, data privacy, personal information, GDPR compliance, data security, cookie policy"
      />
      
      <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accurate-purple-600 to-accurate-purple-800">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Table of Contents</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <a href="#introduction" className="text-accurate-purple-600 hover:text-accurate-purple-800">1. Introduction</a>
            <a href="#definitions" className="text-accurate-purple-600 hover:text-accurate-purple-800">2. Definitions</a>
            <a href="#data-controller" className="text-accurate-purple-600 hover:text-accurate-purple-800">3. Data Controller</a>
            <a href="#data-collection" className="text-accurate-purple-600 hover:text-accurate-purple-800">4. Data Collection</a>
            <a href="#legal-basis" className="text-accurate-purple-600 hover:text-accurate-purple-800">5. Legal Basis</a>
            <a href="#data-usage" className="text-accurate-purple-600 hover:text-accurate-purple-800">6. Data Usage</a>
            <a href="#data-security" className="text-accurate-purple-600 hover:text-accurate-purple-800">7. Data Security</a>
            <a href="#data-retention" className="text-accurate-purple-600 hover:text-accurate-purple-800">8. Data Retention</a>
            <a href="#user-rights" className="text-accurate-purple-600 hover:text-accurate-purple-800">9. User Rights</a>
            <a href="#cookies" className="text-accurate-purple-600 hover:text-accurate-purple-800">10. Cookie Policy</a>
            <a href="#third-party" className="text-accurate-purple-600 hover:text-accurate-purple-800">11. Third-Party Services</a>
            <a href="#children" className="text-accurate-purple-600 hover:text-accurate-purple-800">12. Children's Privacy</a>
            <a href="#changes" className="text-accurate-purple-600 hover:text-accurate-purple-800">13. Policy Changes</a>
            <a href="#contact" className="text-accurate-purple-600 hover:text-accurate-purple-800">14. Contact Us</a>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 backdrop-blur-sm bg-opacity-90">
          <div className="prose prose-lg max-w-none">
            {/* Introduction Section */}
            <section id="introduction" className="mb-12">
              <div 
                className="flex items-center justify-between gap-3 mb-6 cursor-pointer"
                onClick={() => toggleSection('introduction')}
              >
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-accurate-purple-500" />
                  <h2 className="text-2xl font-semibold text-gray-900">1. Introduction</h2>
                </div>
                {expandedSections.introduction ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
              {expandedSections.introduction && (
                <div className="bg-gray-50 p-6 rounded-lg transform transition-all duration-300 hover:shadow-md">
                  <p className="text-gray-600 mb-4">
                    MyAccurate Books ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information in compliance with the Kenya Data Protection Act 2019 (the "Act"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our accounting software and website.
                  </p>
                  <p className="text-gray-600">
                    As a data controller registered with the Office of the Data Protection Commissioner (ODPC), we are committed to upholding the principles of data protection as outlined in the Act. This policy is designed to help you understand your rights and our obligations regarding your personal data.
                  </p>
                </div>
              )}
            </section>

            {/* Definitions Section */}
            <section id="definitions" className="mb-12">
              <div 
                className="flex items-center justify-between gap-3 mb-6 cursor-pointer"
                onClick={() => toggleSection('definitions')}
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-8 h-8 text-accurate-purple-500" />
                  <h2 className="text-2xl font-semibold text-gray-900">2. Definitions</h2>
                </div>
                {expandedSections.definitions ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
              {expandedSections.definitions && (
                <div className="bg-gray-50 p-6 rounded-lg transform transition-all duration-300 hover:shadow-md">
                  <p className="text-gray-600 mb-4">In accordance with the Kenya Data Protection Act 2019, the following terms have specific meanings:</p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-accurate-purple-500">•</span>
                      <span><strong>Personal Data:</strong> Any information relating to an identified or identifiable natural person</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accurate-purple-500">•</span>
                      <span><strong>Data Subject:</strong> An individual who is the subject of personal data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accurate-purple-500">•</span>
                      <span><strong>Data Controller:</strong> A natural or legal person who determines the purpose and means of processing personal data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accurate-purple-500">•</span>
                      <span><strong>Data Processor:</strong> A natural or legal person who processes personal data on behalf of the controller</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accurate-purple-500">•</span>
                      <span><strong>Processing:</strong> Any operation performed on personal data, whether automated or not</span>
                    </li>
                  </ul>
                </div>
              )}
            </section>

            {/* Data Controller Section */}
            <section id="data-controller" className="mb-12">
              <div 
                className="flex items-center justify-between gap-3 mb-6 cursor-pointer"
                onClick={() => toggleSection('data-controller')}
              >
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-accurate-purple-500" />
                  <h2 className="text-2xl font-semibold text-gray-900">3. Data Controller</h2>
                </div>
                {expandedSections.dataController ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
              {expandedSections.dataController && (
                <div className="bg-gray-50 p-6 rounded-lg transform transition-all duration-300 hover:shadow-md">
                  <p className="text-gray-600 mb-4">
                    MyAccurate Books is registered as a data controller with the Office of the Data Protection Commissioner (Registration Number: [Your Registration Number]). As the data controller, we are responsible for determining the purposes and means of processing your personal data.
                  </p>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <p className="text-gray-600">
                      <strong>Data Protection Officer</strong><br />
                      Name: [DPO Name]<br />
                      Email: dpo@myaccuratebooks.com<br />
                      Phone: +254 116 333 000<br />
                      Address: 83, Westlands Road Nairobi, Kenya, Nairobi, Kenya
                    </p>
                  </div>
                </div>
              )}
            </section>

            {/* Data Collection Section */}
            <section id="data-collection" className="mb-12">
              <div 
                className="flex items-center justify-between gap-3 mb-6 cursor-pointer"
                onClick={() => toggleSection('data-collection')}
              >
                <div className="flex items-center gap-3">
                  <Database className="w-8 h-8 text-accurate-purple-500" />
                  <h2 className="text-2xl font-semibold text-gray-900">4. Data Collection</h2>
                </div>
                {expandedSections.dataCollection ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
              {expandedSections.dataCollection && (
                <div className="bg-gray-50 p-6 rounded-lg transform transition-all duration-300 hover:shadow-md">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">4.1 Categories of Personal Data</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Identity Data</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>Full name</li>
                        <li>National ID number</li>
                        <li>Passport number (if applicable)</li>
                        <li>Business registration details</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Contact Data</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Physical address</li>
                        <li>Business address</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Financial Data</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>Bank account details</li>
                        <li>Payment information</li>
                        <li>Transaction history</li>
                        <li>Tax information</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Technical Data</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>IP address</li>
                        <li>Browser type</li>
                        <li>Device information</li>
                        <li>Usage data</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-xl font-medium text-gray-900 mb-4">4.2 Methods of Collection</h3>
                  <p className="text-gray-600 mb-4">
                    We collect personal data through various methods, including:
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-accurate-purple-500">•</span>
                      <span>Direct interactions (registration, contact forms, customer support)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accurate-purple-500">•</span>
                      <span>Automated technologies (cookies, web beacons, analytics tools)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accurate-purple-500">•</span>
                      <span>Third-party sources (business partners, service providers)</span>
                    </li>
                  </ul>
                </div>
              )}
            </section>

            {/* Legal Basis Section */}
            <section id="legal-basis" className="mb-12">
              <div 
                className="flex items-center justify-between gap-3 mb-6 cursor-pointer"
                onClick={() => toggleSection('legal-basis')}
              >
                <div className="flex items-center gap-3">
                  <Lock className="w-8 h-8 text-accurate-purple-500" />
                  <h2 className="text-2xl font-semibold text-gray-900">5. Legal Basis for Processing</h2>
                </div>
                {expandedSections.legalBasis ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
              {expandedSections.legalBasis && (
                <div className="bg-gray-50 p-6 rounded-lg transform transition-all duration-300 hover:shadow-md">
                  <p className="text-gray-600 mb-4">
                    Under Section 30 of the Kenya Data Protection Act 2019, we process your personal data based on the following legal grounds:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Consent</h4>
                      <p className="text-gray-600">
                        When you have given clear, informed, and unambiguous consent for specific processing purposes.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Contract</h4>
                      <p className="text-gray-600">
                        When processing is necessary for the performance of a contract with you or to take steps at your request before entering into a contract.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Legal Obligation</h4>
                      <p className="text-gray-600">
                        When processing is necessary to comply with our legal obligations, including tax and accounting requirements.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Legitimate Interests</h4>
                      <p className="text-gray-600">
                        When processing is necessary for our legitimate interests or those of a third party, provided such interests are not overridden by your rights.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Data Usage Section */}
            <section id="data-usage" className="mb-12">
              <div 
                className="flex items-center justify-between gap-3 mb-6 cursor-pointer"
                onClick={() => toggleSection('data-usage')}
              >
                <div className="flex items-center gap-3">
                  <UserCheck className="w-8 h-8 text-accurate-purple-500" />
                  <h2 className="text-2xl font-semibold text-gray-900">6. How We Use Your Information</h2>
                </div>
                {expandedSections.dataUsage ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
              {expandedSections.dataUsage && (
                <div className="bg-gray-50 p-6 rounded-lg transform transition-all duration-300 hover:shadow-md">
                  <p className="text-gray-600 mb-4">
                    We use your personal data for the following purposes, in compliance with the Kenya Data Protection Act 2019:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Service Provision</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>Providing accounting services</li>
                        <li>Processing transactions</li>
                        <li>Managing your account</li>
                        <li>Customer support</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Legal Compliance</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>Tax reporting</li>
                        <li>Regulatory compliance</li>
                        <li>Fraud prevention</li>
                        <li>Legal obligations</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Business Operations</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>Service improvement</li>
                        <li>Analytics and research</li>
                        <li>Quality assurance</li>
                        <li>System maintenance</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Communication</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>Service updates</li>
                        <li>Important notifications</li>
                        <li>Customer support</li>
                        <li>Marketing (with consent)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Data Security Section */}
            <section id="data-security" className="mb-12">
              <div 
                className="flex items-center justify-between gap-3 mb-6 cursor-pointer"
                onClick={() => toggleSection('data-security')}
              >
                <div className="flex items-center gap-3">
                  <Lock className="w-8 h-8 text-accurate-purple-500" />
                  <h2 className="text-2xl font-semibold text-gray-900">7. Data Security</h2>
                </div>
                {expandedSections.dataSecurity ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
              {expandedSections.dataSecurity && (
                <div className="bg-gray-50 p-6 rounded-lg transform transition-all duration-300 hover:shadow-md">
                  <p className="text-gray-600 mb-4">
                    In compliance with Section 41 of the Kenya Data Protection Act 2019, we implement appropriate technical and organizational measures to ensure data security, including:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Technical Measures</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>End-to-end encryption</li>
                        <li>Secure data centers</li>
                        <li>Regular security audits</li>
                        <li>Access controls</li>
                        <li>Firewall protection</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Organizational Measures</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>Staff training</li>
                        <li>Data protection policies</li>
                        <li>Incident response plans</li>
                        <li>Regular risk assessments</li>
                        <li>Vendor management</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Data Retention Section */}
            <section id="data-retention" className="mb-12">
              <div 
                className="flex items-center justify-between gap-3 mb-6 cursor-pointer"
                onClick={() => toggleSection('data-retention')}
              >
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-accurate-purple-500" />
                  <h2 className="text-2xl font-semibold text-gray-900">8. Data Retention</h2>
                </div>
                {expandedSections.dataRetention ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
              {expandedSections.dataRetention && (
                <div className="bg-gray-50 p-6 rounded-lg transform transition-all duration-300 hover:shadow-md">
                  <p className="text-gray-600 mb-4">
                    We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements. Our retention periods are as follows:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Active Users</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>Account data: Duration of active account</li>
                        <li>Transaction records: 7 years</li>
                        <li>Communication logs: 2 years</li>
                        <li>Analytics data: 1 year</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Inactive Users</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>Account data: 1 year after last activity</li>
                        <li>Backup data: 3 years</li>
                        <li>Marketing data: Until consent withdrawal</li>
                        <li>Technical logs: 6 months</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* User Rights Section */}
            <section id="user-rights" className="mb-12">
              <div 
                className="flex items-center justify-between gap-3 mb-6 cursor-pointer"
                onClick={() => toggleSection('user-rights')}
              >
                <div className="flex items-center gap-3">
                  <UserCheck className="w-8 h-8 text-accurate-purple-500" />
                  <h2 className="text-2xl font-semibold text-gray-900">9. Your Rights</h2>
                </div>
                {expandedSections.userRights ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
              {expandedSections.userRights && (
                <div className="bg-gray-50 p-6 rounded-lg transform transition-all duration-300 hover:shadow-md">
                  <p className="text-gray-600 mb-4">
                    Under Section 26 of the Kenya Data Protection Act 2019, you have the following rights:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Access and Control</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>Right to access your personal data</li>
                        <li>Right to rectification of inaccurate data</li>
                        <li>Right to erasure ("right to be forgotten")</li>
                        <li>Right to restrict processing</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Data Portability and Objection</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>Right to data portability</li>
                        <li>Right to object to processing</li>
                        <li>Right to withdraw consent</li>
                        <li>Right to lodge a complaint</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4">
                    To exercise these rights, please contact our Data Protection Officer using the contact details provided in Section 14.
                  </p>
                </div>
              )}
            </section>

            {/* Cookie Policy Section */}
            <section id="cookies" className="mb-12">
              <div 
                className="flex items-center justify-between gap-3 mb-6 cursor-pointer"
                onClick={() => toggleSection('cookies')}
              >
                <div className="flex items-center gap-3">
                  <Cookie className="w-8 h-8 text-accurate-purple-500" />
                  <h2 className="text-2xl font-semibold text-gray-900">10. Cookie Policy</h2>
                </div>
                {expandedSections.cookies ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
              {expandedSections.cookies && (
                <div className="bg-gray-50 p-6 rounded-lg transform transition-all duration-300 hover:shadow-md">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">10.1 What Are Cookies</h3>
                  <p className="text-gray-600 mb-4">
                    Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience and enable certain features to function properly.
                  </p>

                  <h3 className="text-xl font-medium text-gray-900 mb-4">10.2 Types of Cookies We Use</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Essential Cookies</h4>
                      <p className="text-gray-600">
                        Required for the website to function properly. They enable basic functions like page navigation and access to secure areas.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h4>
                      <p className="text-gray-600">
                        Help us understand how visitors interact with our website by collecting and reporting information anonymously.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Functionality Cookies</h4>
                      <p className="text-gray-600">
                        Remember your preferences and settings to provide enhanced, more personal features.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Marketing Cookies</h4>
                      <p className="text-gray-600">
                        Track your browsing habits to enable us to show advertising which is more likely to be of interest to you.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-medium text-gray-900 mb-4">10.3 How to Control Cookies</h3>
                  <p className="text-gray-600 mb-4">
                    You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit our website.
                  </p>

                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3">Browser Settings</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-accurate-purple-500">•</span>
                        <span>Chrome: Settings → Privacy and security → Cookies and other site data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accurate-purple-500">•</span>
                        <span>Firefox: Options → Privacy & Security → Cookies and Site Data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accurate-purple-500">•</span>
                        <span>Safari: Preferences → Privacy → Cookies and website data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accurate-purple-500">•</span>
                        <span>Edge: Settings → Cookies and site permissions → Cookies and site data</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </section>

            {/* Third-Party Services Section */}
            <section id="third-party" className="mb-12">
              <div 
                className="flex items-center justify-between gap-3 mb-6 cursor-pointer"
                onClick={() => toggleSection('third-party')}
              >
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-8 h-8 text-accurate-purple-500" />
                  <h2 className="text-2xl font-semibold text-gray-900">11. Third-Party Services</h2>
                </div>
                {expandedSections.thirdParty ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
              {expandedSections.thirdParty && (
                <div className="bg-gray-50 p-6 rounded-lg transform transition-all duration-300 hover:shadow-md">
                  <p className="text-gray-600 mb-4">
                    We may use third-party services that collect, monitor, and analyze data. These services have their own privacy policies and may collect information as specified in their respective privacy policies. We ensure that all third-party processors comply with the Kenya Data Protection Act 2019.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Service Providers</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>Cloud hosting services</li>
                        <li>Payment processors</li>
                        <li>Analytics providers</li>
                        <li>Customer support tools</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Data Processors</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>IT service providers</li>
                        <li>Marketing agencies</li>
                        <li>Security providers</li>
                        <li>Backup services</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </section>

            <section id="children" className="mb-12">
              <div 
                className="flex items-center justify-between gap-3 mb-6 cursor-pointer"
                onClick={() => toggleSection('children')}
              >
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-8 h-8 text-accurate-purple-500" />
                  <h2 className="text-2xl font-semibold text-gray-900">12. Children's Privacy</h2>
                </div>
                {expandedSections.children ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
              {expandedSections.children && (
                <div className="bg-gray-50 p-6 rounded-lg transform transition-all duration-300 hover:shadow-md">
                  <p className="text-gray-600">
                    Our services are not intended for use by children under 18 years of age. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                  </p>
                </div>
              )}
            </section>

            {/* Policy Changes Section */}
            <section id="changes" className="mb-12">
              <div 
                className="flex items-center justify-between gap-3 mb-6 cursor-pointer"
                onClick={() => toggleSection('changes')}
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-8 h-8 text-accurate-purple-500" />
                  <h2 className="text-2xl font-semibold text-gray-900">13. Changes to This Policy</h2>
                </div>
                {expandedSections.changes ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
              {expandedSections.changes && (
                <div className="bg-gray-50 p-6 rounded-lg transform transition-all duration-300 hover:shadow-md">
                  <p className="text-gray-600">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
                  </p>
                </div>
              )}
            </section>

            {/* Contact Section */}
            <section id="contact" className="mb-12">
              <div 
                className="flex items-center justify-between gap-3 mb-6 cursor-pointer"
                onClick={() => toggleSection('contact')}
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-8 h-8 text-accurate-purple-500" />
                  <h2 className="text-2xl font-semibold text-gray-900">14. Contact Us</h2>
                </div>
                {expandedSections.contact ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
              {expandedSections.contact && (
                <div className="bg-gray-50 p-6 rounded-lg transform transition-all duration-300 hover:shadow-md">
                  <p className="text-gray-600 mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us at:
                  </p>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <p className="text-gray-600">
                      <strong>Data Protection Officer</strong>
                      <br />MyAccurate Books<br />
                      Email: info@myaccuratebooks.com<br />
                      Phone: +254 116 333 000<br />
                      Address: 83, Westlands Road Nairobi, Kenya, Nairobi, Kenya
                    </p>
                  </div>
                  <p className="text-gray-600 mt-4">
                    You also have the right to lodge a complaint with the Office of the Data Protection Commissioner if you believe your rights have been violated.
                  </p>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage; 