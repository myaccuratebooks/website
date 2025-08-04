import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Play, Users, MessageCircle, Star } from "lucide-react";

const HomePage = () => {
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-accurate-purple-50 to-accurate-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business Accounting
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Streamline your financial management with our intuitive accounting software
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-accurate-purple-600 hover:bg-accurate-purple-700 text-white px-8 py-3 rounded-lg">
                Get Started
              </Button>
              <Button variant="outline" className="px-8 py-3 rounded-lg">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Webinars Section */}
      <div className="py-20 bg-white">
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
      </div>

      {/* Latest Updates Section */}
      <div className="py-20 bg-gray-50">
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
      </div>

      {/* Demo Section */}
      <div className="py-20 bg-white">
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
      </div>

      {/* Partners Section */}
      <div className="py-20 bg-gray-50">
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
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-white">
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
      </div>
    </div>
  );
};

export default HomePage; 