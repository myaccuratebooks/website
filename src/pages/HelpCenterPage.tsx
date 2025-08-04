import { useState } from "react";
import { Search, BookOpen, MessageCircle, Video, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const HelpCenterPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      title: "Getting Started",
      items: [
        {
          question: "How do I set up my account?",
          answer: "To set up your account, follow these steps: 1) Sign up with your email, 2) Verify your email address, 3) Complete your business profile, 4) Connect your bank accounts (optional)."
        },
        {
          question: "What are the system requirements?",
          answer: "Our software works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version of your preferred browser for the best experience."
        }
      ]
    },
    {
      title: "Account Management",
      items: [
        {
          question: "How do I change my password?",
          answer: "You can change your password by going to Account Settings > Security > Change Password. Make sure to use a strong password with a mix of letters, numbers, and special characters."
        },
        {
          question: "Can I have multiple users on one account?",
          answer: "Yes, you can add multiple users to your account with different permission levels. Go to Account Settings > Users to manage your team members."
        }
      ]
    }
  ];

  const supportResources = [
    {
      title: "Documentation",
      icon: <BookOpen className="h-6 w-6" />,
      description: "Comprehensive guides and documentation for all features",
      link: "/docs"
    },
    {
      title: "Community Forum",
      icon: <MessageCircle className="h-6 w-6" />,
      description: "Connect with other users and share experiences",
      link: "/community"
    },
    {
      title: "Video Tutorials",
      icon: <Video className="h-6 w-6" />,
      description: "Step-by-step video guides for common tasks",
      link: "/tutorials"
    },
    {
      title: "Knowledge Base",
      icon: <FileText className="h-6 w-6" />,
      description: "Searchable database of articles and solutions",
      link: "/knowledge-base"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-accurate-purple-50 to-accurate-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How can we help you?
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Find answers to common questions, browse our documentation, or get in touch with our support team.
            </p>
            <div className="relative max-w-2xl mx-auto">
              <Input
                type="text"
                placeholder="Search for help..."
                className="w-full pl-12 pr-4 py-3 rounded-lg border-gray-300 focus:ring-accurate-purple-500 focus:border-accurate-purple-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Support Resources */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Support Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportResources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-accurate-purple-500 mb-4">{resource.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, index) => (
              <div key={index} className="mb-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-gray-50 rounded-lg p-6"
                    >
                      <h4 className="text-lg font-medium text-gray-900 mb-2">
                        {item.question}
                      </h4>
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Still need help?
            </h2>
            <p className="text-gray-600 mb-8">
              Our support team is here to help you with any questions or issues you may have.
            </p>
            <Button className="bg-accurate-purple-600 hover:bg-accurate-purple-700 text-white px-8 py-3 rounded-lg">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage; 