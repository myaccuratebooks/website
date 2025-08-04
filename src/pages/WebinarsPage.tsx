import { useState } from "react";
import { Calendar, Clock, Users, Play, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WebinarsPage = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingWebinars = [
    {
      id: 1,
      title: "Mastering Financial Reports in MyAccurate Books",
      date: "2024-03-15",
      time: "14:00",
      duration: "60",
      speaker: "Sarah Johnson",
      role: "Senior Accountant",
      description: "Learn how to generate and interpret key financial reports to make better business decisions.",
      attendees: 156,
      image: "/images/webinars/financial-reports.jpg"
    },
    {
      id: 2,
      title: "Tax Season Preparation Best Practices",
      date: "2024-03-20",
      time: "15:30",
      duration: "90",
      speaker: "Michael Chen",
      role: "Tax Specialist",
      description: "Get ready for tax season with our comprehensive guide to preparing your business finances.",
      attendees: 203,
      image: "/images/webinars/tax-season.jpg"
    }
  ];

  const pastWebinars = [
    {
      id: 3,
      title: "Getting Started with MyAccurate Books",
      date: "2024-02-28",
      duration: "45",
      speaker: "Emma Davis",
      role: "Product Specialist",
      description: "A comprehensive guide to setting up and using MyAccurate Books for your business.",
      attendees: 342,
      image: "/images/webinars/getting-started.jpg",
      recordingUrl: "/webinars/getting-started-recording"
    }
  ];

  const featuredWebinar = {
    title: "Advanced Accounting Automation",
    date: "2024-03-25",
    time: "13:00",
    duration: "75",
    speaker: "David Wilson",
    role: "Automation Expert",
    description: "Discover how to automate your accounting processes and save hours every week.",
    image: "/images/webinars/automation.jpg"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-accurate-purple-50 to-accurate-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Learn from the Experts
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Join our live webinars and learn how to make the most of MyAccurate Books
            </p>
          </div>
        </div>
      </div>

      {/* Featured Webinar */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="inline-block bg-accurate-purple-100 text-accurate-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  Featured Webinar
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {featuredWebinar.title}
                </h2>
                <div className="flex items-center space-x-4 text-gray-600 mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{featuredWebinar.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{featuredWebinar.time} ({featuredWebinar.duration} min)</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{featuredWebinar.description}</p>
                <div className="flex items-center mb-8">
                  <div className="flex-shrink-0">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="/images/team/david-wilson.jpg"
                      alt={featuredWebinar.speaker}
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      {featuredWebinar.speaker}
                    </h4>
                    <p className="text-gray-600">{featuredWebinar.role}</p>
                  </div>
                </div>
                <Button className="bg-accurate-purple-600 hover:bg-accurate-purple-700 text-white px-8 py-3 rounded-lg">
                  Register Now
                </Button>
              </div>
              <div className="relative">
                <img
                  src={featuredWebinar.image}
                  alt={featuredWebinar.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                  <Button className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-lg flex items-center">
                    <Play className="h-5 w-5 mr-2" />
                    Watch Preview
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Webinar Tabs */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4 mb-12">
            <button
              className={`px-6 py-3 rounded-lg font-medium ${
                activeTab === "upcoming"
                  ? "bg-accurate-purple-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("upcoming")}
            >
              Upcoming Webinars
            </button>
            <button
              className={`px-6 py-3 rounded-lg font-medium ${
                activeTab === "past"
                  ? "bg-accurate-purple-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("past")}
            >
              Past Webinars
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {activeTab === "upcoming"
              ? upcomingWebinars.map((webinar) => (
                  <div
                    key={webinar.id}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {webinar.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 mr-2" />
                          <span>{webinar.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 mr-2" />
                          <span>{webinar.time} ({webinar.duration} min)</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6">{webinar.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-600">
                          <Users className="h-5 w-5 mr-2" />
                          <span>{webinar.attendees} registered</span>
                        </div>
                        <Button className="bg-accurate-purple-600 hover:bg-accurate-purple-700 text-white px-6 py-2 rounded-lg">
                          Register
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              : pastWebinars.map((webinar) => (
                  <div
                    key={webinar.id}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {webinar.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 mr-2" />
                          <span>{webinar.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 mr-2" />
                          <span>{webinar.duration} min</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6">{webinar.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-600">
                          <Users className="h-5 w-5 mr-2" />
                          <span>{webinar.attendees} attended</span>
                        </div>
                        <Button className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-2 rounded-lg flex items-center">
                          <Play className="h-5 w-5 mr-2" />
                          Watch Recording
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Want to host a webinar?
            </h2>
            <p className="text-gray-600 mb-8">
              Share your expertise with our community and reach thousands of accounting professionals.
            </p>
            <Button className="bg-accurate-purple-600 hover:bg-accurate-purple-700 text-white px-8 py-3 rounded-lg">
              Become a Speaker
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarsPage; 