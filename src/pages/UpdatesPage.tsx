import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Tag, ArrowRight, Star, Zap, Shield } from "lucide-react";

const UpdatesPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Updates" },
    { id: "features", name: "New Features" },
    { id: "improvements", name: "Improvements" },
    { id: "fixes", name: "Bug Fixes" }
  ];

  const updates = [
    {
      id: 1,
      title: "Advanced Financial Reporting",
      date: "2024-03-01",
      category: "features",
      description: "Introducing our new advanced financial reporting module with customizable dashboards and real-time analytics.",
      highlights: [
        "Custom report builder",
        "Real-time data visualization",
        "Export to multiple formats",
        "Automated report scheduling"
      ],
      icon: <Star className="h-6 w-6 text-accurate-purple-500" />
    },
    {
      id: 2,
      title: "Performance Optimization",
      date: "2024-02-28",
      category: "improvements",
      description: "We've made significant performance improvements to enhance your experience with MyAccurate Books.",
      highlights: [
        "50% faster page load times",
        "Improved data processing",
        "Enhanced mobile responsiveness",
        "Optimized database queries"
      ],
      icon: <Zap className="h-6 w-6 text-accurate-purple-500" />
    },
    {
      id: 3,
      title: "Security Enhancements",
      date: "2024-02-25",
      category: "improvements",
      description: "New security features to protect your financial data and ensure compliance with industry standards.",
      highlights: [
        "Two-factor authentication",
        "Enhanced encryption",
        "Audit logging",
        "Compliance reporting"
      ],
      icon: <Shield className="h-6 w-6 text-accurate-purple-500" />
    }
  ];

  const filteredUpdates = activeCategory === "all"
    ? updates
    : updates.filter(update => update.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-accurate-purple-50 to-accurate-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Product Updates
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Stay informed about the latest features, improvements, and fixes in MyAccurate Books
            </p>
          </div>
        </div>
      </div>

      {/* Updates Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex justify-center space-x-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-3 rounded-lg font-medium ${
                  activeCategory === category.id
                    ? "bg-accurate-purple-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Updates List */}
          <div className="max-w-4xl mx-auto space-y-8">
            {filteredUpdates.map((update) => (
              <div
                key={update.id}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-200"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="mr-4">{update.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {update.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-gray-600 mt-1">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{update.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Tag className="h-4 w-4 mr-2" />
                          <span className="capitalize">{update.category}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{update.description}</p>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-4">
                    Key Highlights
                  </h4>
                  <ul className="space-y-3">
                    {update.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-2 w-2 rounded-full bg-accurate-purple-500 mt-2 mr-3"></div>
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="bg-accurate-purple-600 hover:bg-accurate-purple-700 text-white px-6 py-3 rounded-lg flex items-center">
                  Learn More
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter to receive updates about new features and improvements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-accurate-purple-500 focus:border-accurate-purple-500"
              />
              <Button className="bg-accurate-purple-600 hover:bg-accurate-purple-700 text-white px-8 py-3 rounded-lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatesPage; 