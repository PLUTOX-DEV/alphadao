import { useState } from "react";
import Footer from "../component/footer";
import Header from "../component/Header";
import api from "../api/axiosInstance";  // use this instead of axios directly
import logo from "../assets/chart.jpg";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const enquiryOptions = [
  { value: "", label: "Select an enquiry type" },
  { value: "general", label: "General Enquiry" },
  { value: "support", label: "Technical Support" },
  { value: "sales", label: "Sales Enquiry" },
  { value: "partnership", label: "Partnership Opportunities" },
];

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  enquiry: "",
  message: "",
};

const ContactUs = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      // Updated endpoint path here:
      await api.post("api/auth/contact", formData);
      setFormData(initialFormState);
      toast.success("Thank you! Your message has been sent.");
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-950 bg-opacity-90">
      <Header />
      <ToastContainer />
      <main
        className="flex-grow container mx-auto px-4 mt-8 py-12"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 27, 75, 0.7), rgb(0, 0, 0)), url(${logo})`,
          backgroundSize: "max",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-gray-950 border-b-purple-900 opacity-90 shadow-xl rounded-2xl p-8 max-w-2xl mx-auto space-y-6"
          >
            <h1 className="text-4xl font-serif font-bold text-gray-500 border-b-4 border-purple-900 drop-shadow mb-6 text-center">
              Contact Us
            </h1>
            <p className="text-white mb-10 text-center">
              We’d love to hear from you! Fill out the form below, and our team will respond within one business day.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-semibold mb-2">First Name</label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Last Name</label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Enquiry Type</label>
              <select
                name="enquiry"
                value={formData.enquiry}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 text-gray-400"
                required
              >
                {enquiryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                rows={5}
                required
              />
            </div>

            <div className="text-center pt-2">
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 bg-gradient-to-r from-purple-700 to-purple-950 text-white font-semibold rounded-md shadow hover:from-purple-800 hover:to-purple-950 transition-colors duration-200"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
