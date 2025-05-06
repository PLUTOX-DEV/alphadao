// src/components/ContactUs.js
import React, { useState } from 'react';
import Footer from '../component/Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    enquiry: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic (e.g., API call)
    console.log('Form submitted:', formData);
    // Reset form (optional)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      enquiry: '',
      message: '',
    });
    // Show success message or redirect (optional)
    alert('Thank you for your message! We’ll get back to you soon.');
  };

  const enquiryOptions = [
    { value: '', label: 'Select an enquiry type' },
    { value: 'general', label: 'General Enquiry' },
    { value: 'support', label: 'Technical Support' },
    { value: 'sales', label: 'Sales Enquiry' },
    { value: 'partnership', label: 'Partnership Opportunities' },
  ];

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-shadow-white mb-6">Contact Us</h1>
        <p className="text-white mb-8 max-w-2xl">
          We’d love to hear from you! Fill out the form below, and our team will
          respond within one business day.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-8 max-w-2xl mx-auto"
        >
          {/* First Name */}
          <div className="mb-6">
            <label
              htmlFor="firstName"
              className="block text-gray-700 font-semibold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Last Name */}
          <div className="mb-6">
            <label
              htmlFor="lastName"
              className="block text-gray-700 font-semibold mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Enquiry Dropdown */}
          <div className="mb-6">
            <label
              htmlFor="enquiry"
              className="block text-gray-700 font-semibold mb-2"
            >
              Enquiry Type
            </label>
            <select
              id="enquiry"
              name="enquiry"
              value={formData.enquiry}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              {enquiryOptions.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
              rows="5"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactUs;