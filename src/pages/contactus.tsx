import { useState } from 'react';
import Footer from '../component/footer';

const enquiryOptions = [
  { value: '', label: 'Select an enquiry type' },
  { value: 'general', label: 'General Enquiry' },
  { value: 'support', label: 'Technical Support' },
  { value: 'sales', label: 'Sales Enquiry' },
  { value: 'partnership', label: 'Partnership Opportunities' },
];

const initialFormState = {
  firstName: '',
  lastName: '',
  email: '',
  enquiry: '',
  message: '',
};

const ContactUs = () => {
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder for form submission logic (e.g., API call)
    console.log('Form submitted:', formData);
    setFormData(initialFormState);
    alert('Thank you for your message! We’ll get back to you soon.');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-900 via-purple-800 to-purple-700">
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white drop-shadow mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-white mb-10 max-w-2xl mx-auto text-center">
          We’d love to hear from you! Fill out the form below, and our team will respond within one business day.
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 shadow-xl rounded-2xl p-8 max-w-2xl mx-auto space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-purple-900 font-semibold mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-purple-900 font-semibold mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-purple-900 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          {/* Enquiry Dropdown */}
          <div>
            <label htmlFor="enquiry" className="block text-purple-900 font-semibold mb-2">
              Enquiry Type
            </label>
            <select
              id="enquiry"
              name="enquiry"
              value={formData.enquiry}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-purple-900"
              required
            >
              {enquiryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-purple-900 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 resize-vertical"
              rows={5}
              required
            />
          </div>
          {/* Submit Button */}
          <div className="text-center pt-2">
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-purple-700 to-purple-900 text-white font-semibold rounded-md shadow hover:from-purple-800 hover:to-purple-950 transition-colors duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
