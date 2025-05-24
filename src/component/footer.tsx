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
    <footer className="py-6 border-t border-purple-950 mt-10 bg-gray-950">
      <div className="container mx-auto px-4">
{/* Newsletter & Social Media Section */}
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <img className="w-10 h-10 animate-spin-slow" src='./Daologo.png'/>
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
                  className="px-4 py-2 bg-gray-950 text-white rounded-r-md hover:bg-purple-500 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </div>
            </form>
            
            
            {/* Social Media Links */}
             <div className="flex space-x-4 justify-center align-top md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-purple-400 hover:text-purple-300 duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-2xl">{social.icon}</span>
                </a>
              ))}
              <div className='justify-items-center flex-1/2 pb-3 pt-0.1 text-gray-400'><a href='/privacypolicy'>PrivacyPolicy</a></div>
            </div>
          </div>
        

 {/* Divider */}
        <hr className="my-3 border-gray-700" />
        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-400 flex justify-center-safe">
          <p>© {currentYear} ALPHA DAO. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;