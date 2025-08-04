import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, BookOpen, Video, Play, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isFormLoaded, setIsFormLoaded] = useState(false);
  const [formError, setFormError] = useState(false);

  useEffect(() => {
    // Ensure MailerLite form is properly initialized
    const script = document.createElement('script');
    script.src = "https://groot.mailerlite.com/js/w/webforms.min.js?v176e10baa5e7ed80d35ae235be3d5024";
    script.async = true;
    
    script.onload = () => {
      setIsFormLoaded(true);
    };
    
    script.onerror = () => {
      setFormError(true);
      console.error('Failed to load MailerLite form');
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);

  return (
    <footer className="bg-gray-50 pt-16 pb-12 border-t">
      <div className="container">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-br from-accurate-purple-50 to-accurate-blue-50 rounded-2xl p-8 md:p-12 shadow-xl mb-16 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accurate-purple-100 rounded-full filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accurate-blue-100 rounded-full filter blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center relative">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-accurate-purple-600 to-accurate-blue-600 bg-clip-text text-transparent">
                Stay Updated
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Get the latest accounting tips, tax updates, and software features
                delivered straight to your inbox.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <svg className="w-5 h-5 text-accurate-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Weekly insights and updates</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <svg className="w-5 h-5 text-accurate-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Exclusive tips and resources</span>
              </div>
            </div>
            <div className="space-y-4 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              {formError ? (
                <div className="text-center p-4">
                  <p className="text-red-500">Unable to load the newsletter form. Please try again later.</p>
                </div>
              ) : !isFormLoaded ? (
                <div className="text-center p-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accurate-purple-500 mx-auto"></div>
                  <p className="text-gray-500 mt-2">Loading newsletter form...</p>
                </div>
              ) : (
                <div id="mlb2-26144170" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-26144170">
                  <div className="ml-form-align-center">
                    <div className="ml-form-embedWrapper embedForm">
                      <div className="ml-form-embedBody ml-form-embedBodyHorizontal row-form">
                        <div className="ml-form-embedContent" style={{ marginBottom: "0px" }}>
                          <p className="text-sm text-gray-600 mb-4">Join our newsletter to receive exclusive updates and insights about accounting software and business management.</p>
                        </div>
                        <form className="ml-block-form pt-5" action="https://assets.mailerlite.com/jsonp/432672/forms/154818387283805748/subscribe" data-code="" method="post" target="_blank">
                          <div className="ml-form-formContent horozintalForm">
                            <div className="ml-form-horizontalRow">
                              <div className="ml-input-horizontal">
                                <div style={{ width: "50%" }} className="horizontal-fields">
                                  <div className="ml-field-group ml-field-name">
                                    <input type="text" className="form-control" data-inputmask="" name="fields[name]" placeholder="Name" autoComplete="given-name" />
                                  </div>
                                </div>
                                <div style={{ width: "50%" }} className="horizontal-fields">
                                  <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                                    <input type="email" className="form-control" data-inputmask="" name="fields[email]" placeholder="Email" autoComplete="email" />
                                  </div>
                                </div>
                              </div>
                              <div className="ml-button-horizontal primary">
                                <button type="submit" className="primary">Subscribe</button>
                                <button disabled={true} style={{ display: "none" }} type="button" className="loading">
                                  <div className="ml-form-embedSubmitLoad"></div>
                                  <span className="sr-only">Loading...</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <input type="hidden" name="ml-submit" value="1" />
                          <div className="ml-mobileButton-horizontal">
                            <button type="submit" className="primary">Subscribe</button>
                            <button disabled={true} style={{ display: "none" }} type="button" className="loading">
                              <div className="ml-form-embedSubmitLoad"></div>
                              <span className="sr-only">Loading...</span>
                            </button>
                          </div>
                          <input type="hidden" name="anticsrf" value="true" />
                        </form>
                      </div>
                      <div className="ml-form-successBody row-success" style={{ display: "none" }}>
                        <div className="ml-form-successContent">
                          <h4>Thank you!</h4>
                          <p>You have successfully joined our subscriber list.</p>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-6">
              <Link to="/" className="inline-block">
                <img 
                  src="/images/logo.png" 
                  alt="MyAccurate Books Logo" 
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            <p className="text-gray-600 mb-4">
              Empowering SMEs with intuitive accounting solutions for better financial management
            </p>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/share/p/199YswmpRc" className="text-gray-400 hover:text-accurate-purple-500 transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/myaccuratebooks" className="text-gray-400 hover:text-accurate-purple-500 transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://x.com/MyaccurateBooks" className="text-gray-400 hover:text-accurate-purple-500 transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accurate-purple-500 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="font-semibold text-sm uppercase text-gray-500 mb-4">Product</h4>
            <ul className="space-y-3">
              <li><Link to="/features" className="text-gray-600 hover:text-accurate-purple-500 transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-accurate-purple-500 transition-colors">Pricing</Link></li>
              <li><Link to="/demo" className="text-gray-600 hover:text-accurate-purple-500 transition-colors">Demo & Resources</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-accurate-purple-500 transition-colors">Updates</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-semibold text-sm uppercase text-gray-500 mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-gray-600 hover:text-accurate-purple-500 transition-colors">Blog</Link></li>
              <li><Link to="/webinars" className="text-gray-600 hover:text-accurate-purple-500 transition-colors">Webinars</Link></li>
              <li><Link to="/help-center" className="text-gray-600 hover:text-accurate-purple-500 transition-colors">Help Center</Link></li>
              <li><Link to="/updates" className="text-gray-600 hover:text-accurate-purple-500 transition-colors">Updates</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-sm uppercase text-gray-500 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-600 hover:text-accurate-purple-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-accurate-purple-500 transition-colors">Contact</Link></li>
              <li><Link to="/partners" className="text-gray-600 hover:text-accurate-purple-500 transition-colors">Partners</Link></li>
              <li><Link to="/testimonials" className="text-gray-600 hover:text-accurate-purple-500 transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
            <ul className="space-y-4">
              <li>
                <a href="/terms" className="text-base text-gray-500 hover:text-gray-900">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-base text-gray-500 hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} MyAccurate Books. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="#" className="text-gray-500 hover:text-accurate-purple-500 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-accurate-purple-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-accurate-purple-500 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
