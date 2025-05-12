// src/components/PrivacyPolicy.js
import React from 'react';
import Footer from '../component/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-4">Last Updated: May 6, 2025</p>

        <section className="space-y-6 text-gray-700">
          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
            <p>
              At Alpha Traders DAO, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website or use our services. By using our website, you consent to the practices described in this policy.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Personal Information</strong>: Name, email address, and other details you provide when subscribing to our newsletter, contacting us, or creating an account.
              </li>
              <li>
                <strong>Non-Personal Information</strong>: IP address, browser type, pages visited, and time spent on our website to improve your experience.
              </li>
              <li>
                <strong>Cookies</strong>: We use cookies to track user behavior and enhance site functionality. See our Cookie Policy for details.
              </li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and improve our services and website content.</li>
              <li>Send newsletters, updates, or respond to inquiries.</li>
              <li>Analyze trends and user behavior to enhance user experience.</li>
            </ul>
          </div>

          {/* Sharing Your Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Sharing Your Information</h2>
            <p>
              We do not sell or rent your personal information. We may share your information with third-party service providers (e.g., analytics or marketing tools) who comply with this policy. We may also disclose information to comply with legal obligations.
            </p>
          </div>

          {/* Your Rights */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Your Rights</h2>
            <p>
              Depending on your location, you may have rights under laws like GDPR or CCPA, including the right to access, correct, or delete your personal data. To exercise these rights, contact us at privacy@doalabs.com.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Cookies</h2>
            <p>
              We use cookies to enhance your browsing experience and analyze site traffic. You can manage cookie preferences via your browser settings. For more details, see our Cookie Policy.
            </p>
          </div>

          {/* Policy Updates */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Policy Updates</h2>
            <p>
              We may update this Privacy Policy periodically. Changes will be posted on this page, and significant updates will be communicated via email or a website notice.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, contact us through the contact page
              <br />
             
              <br />
             
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;