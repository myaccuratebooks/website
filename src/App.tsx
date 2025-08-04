import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import HomePage from "@/pages/HomePage";
import FeaturesPage from "@/pages/FeaturesPage";
import PricingPage from "@/pages/PricingPage";
import AboutPage from "@/pages/AboutPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "@/pages/ContactPage";
import DemoPage from "./pages/DemoPage";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import WhatsAppFab from "@/components/WhatsAppFab";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import HelpCenterPage from "./pages/HelpCenterPage";
import WebinarsPage from "./pages/WebinarsPage";
import PartnersPage from "./pages/PartnersPage";
import UpdatesPage from "./pages/UpdatesPage";

const queryClient = new QueryClient();

const App: React.FC = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/features" element={<FeaturesPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/testimonials" element={<TestimonialsPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/demo" element={<DemoPage />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                  <Route path="/terms" element={<TermsOfServicePage />} />
                  <Route path="/help-center" element={<HelpCenterPage />} />
                  <Route path="/webinars" element={<WebinarsPage />} />
                  <Route path="/partners" element={<PartnersPage />} />
                  <Route path="/updates" element={<UpdatesPage />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </main>
            <WhatsAppFab />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
