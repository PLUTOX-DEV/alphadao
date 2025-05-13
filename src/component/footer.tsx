// src/components/Footer.js

import { FaTelegram, FaTwitter, FaGithub } from 'react-icons/fa'; // Social media icons

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social media links data
  const socialLinks = [
    { icon: <FaTelegram />, href: 'https://t.co/OQ2Jlv2MHl', label: 'Telegram' },
    { icon: <FaTwitter />, href: 'http://x.com/Alpha_Daos', label: 'Twitter' },
    { icon: <FaGithub />, href: 'https://github.com/alphadao-org', label: 'GitHub' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">


{/* Newsletter & Social Media Section */}
        <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            {/* Newsletter Form */}
            <form className="w-full max-w-xs mb-6">
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <div className="flex">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 text-gray-900 bg-gray-100 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-900 text-white rounded-r-md hover:bg-gray-900 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </div>
            </form>
            {/* Social Media Links */}
             <div className="flex space-x-4 justify-center align-top">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-2xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

 {/* Divider */}
        <hr className="my-8 border-gray-700" />
        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-400 flex justify-center-safe">
          <p>© {currentYear} Alpha Traders DOA. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;