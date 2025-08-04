import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TermsOfServicePage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </motion.div>
          
          <div className="prose prose-lg max-w-none">
            <motion.div variants={itemVariants} className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 hover:shadow-md transition-shadow duration-300">
              <p className="text-blue-700">
                Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the MyAccurate Books website and software (the "Service") operated by MyAccurate Books ("us", "we", or "our").
              </p>
            </motion.div>

            <motion.section variants={itemVariants} className="mb-12 group">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">1. Agreement to Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using MyAccurate Books ("the Service"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing the Service.
              </p>
              <p className="text-gray-600">
                These Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and MyAccurate Books ("we," "us," or "our"), concerning your access to and use of the Service.
              </p>
            </motion.section>

            <motion.section variants={itemVariants} className="mb-12 group">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">2. Intellectual Property Rights</h2>
              <p className="text-gray-600 mb-4">
                The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of MyAccurate Books and its licensors. The Service is protected by copyright, trademark, and other laws of both Kenya and foreign countries.
              </p>
              <p className="text-gray-600 mb-4">
                Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of MyAccurate Books.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-gray-900 mb-2">License Restrictions</h3>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>You must not modify or copy the materials</li>
                  <li>You must not use the materials for any commercial purpose without our consent</li>
                  <li>You must not attempt to decompile or reverse engineer any software contained in the Service</li>
                  <li>You must not remove any copyright or other proprietary notations from the materials</li>
                  <li>You must not transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
              </div>
            </motion.section>

            <motion.section variants={itemVariants} className="mb-12 group">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">3. User Accounts</h2>
              <p className="text-gray-600 mb-4">
                When you create an account with us, you must provide accurate and complete information. You are responsible for:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow duration-300">
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Maintaining the security of your account and password</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use of your account</li>
                  <li>Ensuring that your account information is accurate and up-to-date</li>
                  <li>Accepting responsibility for all activities that occur under your account</li>
                </ul>
              </div>
            </motion.section>

            <motion.section variants={itemVariants} className="mb-12 group">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">4. Data Protection and Privacy</h2>
              <p className="text-gray-600 mb-4">
                We take data protection seriously. Our use of your data is governed by our Privacy Policy. By using the Service, you agree that:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow duration-300">
                <ul className="list-disc pl-6 text-gray-600">
                  <li>You are responsible for the accuracy of the data you input</li>
                  <li>We may store and process your data in accordance with our Privacy Policy</li>
                  <li>We implement appropriate security measures to protect your data</li>
                  <li>You consent to our collection and use of your data as described in our Privacy Policy</li>
                  <li>We may use your data to improve our services and provide better support</li>
                </ul>
              </div>
            </motion.section>

            <motion.section variants={itemVariants} className="mb-12 group">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">5. Payment Terms and Subscription</h2>
              <p className="text-gray-600 mb-4">
                Subscription fees are billed in advance on a monthly or annual basis. You agree to:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow duration-300">
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Pay all fees in accordance with your selected plan</li>
                  <li>Provide accurate billing information</li>
                  <li>Authorize us to charge your payment method for all fees</li>
                  <li>Understand that fees are non-refundable except as required by law</li>
                  <li>Accept that subscription fees may change with notice</li>
                  <li>Maintain valid payment information throughout your subscription</li>
                </ul>
              </div>
            </motion.section>

            <motion.section variants={itemVariants} className="mb-12 group">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">6. Service Level Agreement</h2>
              <p className="text-gray-600 mb-4">
                We strive to maintain high availability of the Service but do not guarantee:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow duration-300">
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Uninterrupted access to the Service</li>
                  <li>That the Service will be error-free</li>
                  <li>That the Service will meet your specific requirements</li>
                  <li>That the Service will be available 24/7</li>
                  <li>That the Service will be free from security vulnerabilities</li>
                </ul>
              </div>
            </motion.section>

            <motion.section variants={itemVariants} className="mb-12 group">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">7. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                In no event shall MyAccurate Books be liable for any damages arising out of the use or inability to use the Service, including but not limited to:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow duration-300">
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Direct, indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, data, or business interruption</li>
                  <li>Any other damages arising from the use of the Service</li>
                  <li>Loss of business information or data</li>
                  <li>Costs of substitute goods or services</li>
                </ul>
              </div>
            </motion.section>

            <motion.section variants={itemVariants} className="mb-12 group">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">8. Termination and Suspension</h2>
              <p className="text-gray-600 mb-4">
                We may terminate or suspend your access to the Service immediately, without prior notice, for any reason, including:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow duration-300">
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Breach of these Terms of Service</li>
                  <li>Non-payment of fees</li>
                  <li>Fraudulent or illegal activity</li>
                  <li>Violation of any applicable laws or regulations</li>
                  <li>Engagement in any activity that may harm the Service or other users</li>
                </ul>
              </div>
            </motion.section>

            <motion.section variants={itemVariants} className="mb-12 group">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">9. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the Service. Your continued use of the Service after such modifications constitutes your acceptance of the new terms.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 hover:shadow-md transition-shadow duration-300">
                <p className="text-yellow-700">
                  It is your responsibility to review these Terms periodically for changes. Your continued use of the Service following the posting of any changes to these Terms constitutes acceptance of those changes.
                </p>
              </div>
            </motion.section>

            <motion.section variants={itemVariants} className="mb-12 group">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">10. Governing Law</h2>
              <p className="text-gray-600 mb-4">
                These Terms shall be governed and construed in accordance with the laws of Kenya, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-600">
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
              </p>
            </motion.section>

            <motion.section variants={itemVariants} className="mb-12 group">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">11. Contact Information</h2>
              <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow duration-300">
                <p className="text-gray-600 mb-2">If you have any questions about these Terms of Service, please contact us at:</p>
                <ul className="list-none pl-6 text-gray-600">
                  <li className="mb-2">Email: support@myaccuratebooks.com</li>
                  <li className="mb-2">Phone: +254 116 333 000</li>
                  <li className="mb-2">Address: 83, Westlands Road Nairobi, Kenya</li>
                  <li>Website: www.myaccuratebooks.com</li>
                </ul>
              </div>
            </motion.section>

            <motion.div variants={itemVariants} className="mt-12 pt-8 border-t border-gray-200">
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                <p className="text-gray-600 font-medium">
                  By using MyAccurate Books, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them. If you do not agree to these Terms, please do not use the Service.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfServicePage; 