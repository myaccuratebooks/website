import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Star, Users, Globe, Shield } from "lucide-react";

const PartnersPage = () => {
  const [activeTab, setActiveTab] = useState("integration");

  const integrationPartners = [
    {
      name: "QuickBooks",
      logo: "/images/partners/quickbooks.png",
      description: "Seamlessly sync your QuickBooks data with MyAccurate Books for enhanced financial management.",
      category: "Accounting"
    },
    {
      name: "Stripe",
      logo: "/images/partners/stripe.png",
      description: "Process payments and manage transactions directly within MyAccurate Books.",
      category: "Payments"
    },
    {
      name: "Xero",
      logo: "/images/partners/xero.png",
      description: "Connect your Xero account for real-time financial data synchronization.",
      category: "Accounting"
    },
    {
      name: "PayPal",
      logo: "/images/partners/paypal.png",
      description: "Accept PayPal payments and manage your transactions in one place.",
      category: "Payments"
    }
  ];

  const partnershipPrograms = [
    {
      title: "Technology Partner",
      description: "Integrate your software with MyAccurate Books and reach our growing customer base.",
      benefits: [
        "API access and technical support",
        "Co-marketing opportunities",
        "Revenue sharing program",
        "Dedicated partner success manager"
      ]
    },
    {
      title: "Reseller Partner",
      description: "Resell MyAccurate Books to your clients and earn recurring revenue.",
      benefits: [
        "Competitive commission rates",
        "Marketing and sales support",
        "Training and certification",
        "Dedicated account manager"
      ]
    },
    {
      title: "Consulting Partner",
      description: "Help businesses implement and optimize MyAccurate Books.",
      benefits: [
        "Partner portal access",
        "Implementation resources",
        "Technical training",
        "Lead generation support"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Star className="h-8 w-8 text-accurate-purple-500" />,
      title: "Revenue Growth",
      description: "Access new revenue streams through our partnership programs and referral system."
    },
    {
      icon: <Users className="h-8 w-8 text-accurate-purple-500" />,
      title: "Expanded Reach",
      description: "Tap into our growing customer base and expand your market presence."
    },
    {
      icon: <Globe className="h-8 w-8 text-accurate-purple-500" />,
      title: "Global Network",
      description: "Join our network of partners worldwide and grow your business internationally."
    },
    {
      icon: <Shield className="h-8 w-8 text-accurate-purple-500" />,
      title: "Trusted Brand",
      description: "Leverage our established brand and reputation to build credibility."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-accurate-purple-50 to-accurate-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Partner with Us
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Join our partner ecosystem and grow your business with MyAccurate Books
            </p>
            <Button className="bg-accurate-purple-600 hover:bg-accurate-purple-700 text-white px-8 py-3 rounded-lg">
              Become a Partner
            </Button>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Partner Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partnership Programs */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Partnership Programs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {partnershipPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <ul className="space-y-3">
                  {program.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-accurate-purple-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 w-full bg-accurate-purple-600 hover:bg-accurate-purple-700 text-white px-6 py-3 rounded-lg flex items-center justify-center">
                  Learn More
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Integration Partners */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4 mb-12">
            <button
              className={`px-6 py-3 rounded-lg font-medium ${
                activeTab === "integration"
                  ? "bg-accurate-purple-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("integration")}
            >
              Integration Partners
            </button>
            <button
              className={`px-6 py-3 rounded-lg font-medium ${
                activeTab === "technology"
                  ? "bg-accurate-purple-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("technology")}
            >
              Technology Partners
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {partner.name}
                </h3>
                <p className="text-gray-600 mb-4">{partner.description}</p>
                <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  {partner.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-gray-600 mb-8">
              Join our partner ecosystem and start growing your business today.
            </p>
            <Button className="bg-accurate-purple-600 hover:bg-accurate-purple-700 text-white px-8 py-3 rounded-lg">
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage; 