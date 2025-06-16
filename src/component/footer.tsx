// src/component/Footer.tsx
import { FaTelegram, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social media links data
  const socialLinks = [
    { icon: <FaTelegram />, href: 'https://t.co/OQ2Jlv2MHl', label: 'Telegram' },
    { icon: <FaTwitter />, href: 'http://x.com/Alpha_Daos', label: 'Twitter' },
    { icon: <FaGithub />, href: 'https://github.com/alphadao-org', label: 'GitHub' },
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Newsletter & Social Media Section */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <img className="w-10 h-10 animate-spin-slow" src="/Daologo.png" alt="Alpha Dao" />
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
              className="w-full px-4 py-2 text-gray-900 bg-gray-100 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-purple-800 text-white rounded-r-md hover:bg-purple-950 transition-colors duration-200"
            >
              Subscribe
            </button>
          </div>
        </form>
        {/* Social Media Links */}
        <div className="flex space-x-4 justify-center md:space-x-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              aria-label={social.label}
              className="text-purple-200 hover:text-purple-900 duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-2xl">{social.icon}</span>
            </a>
          ))}
          <div className="pb-3 pt-0.5 text-gray-400"></div>
        </div>
      </div>
      <hr className="my-3 border-gray-500" />
      {/* Copyright Section */}
      <p>© {currentYear} ALPHA DAO. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
