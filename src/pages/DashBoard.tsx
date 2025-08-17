// src/pages/Dashboard.tsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/footer";
import api from "../api/axiosInstance";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

interface Service {
  title: string;
  description: string;
  icon: string;
  link: string;
  comingSoon?: boolean;
}

interface User {
  id: string;
  name: string;
  email: string;
  provider?: string; // local, google, telegram, ton
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const services: Service[] = [
    {
      title: "Demo Trading",
      description: "Practice trading with our demo Web3 trading app.",
      icon: "https://img.icons8.com/ios-filled/50/ffffff/line-chart.png",
      link: "/demo-trading",
    },
    {
      title: "AI Chat Bot",
      description: "Get instant answers and trading insights from our AI assistant.",
      icon: "https://img.icons8.com/ios-filled/50/ffffff/artificial-intelligence.png",
      link: "/ai-chatbot",
    },
    {
      title: "MiniApp",
      description: "Access Web3 mini dApps for portfolio, swaps, and more.",
      icon: "https://img.icons8.com/ios-filled/50/ffffff/blockchain-technology.png",
      link: "/miniapp",
    },
    {
      title: "Blog",
      description: "Read the latest news, guides, and updates on Web3 and trading.",
      icon: "https://img.icons8.com/ios-filled/50/ffffff/blog.png",
      link: "/blog",
    },
    {
      title: "Analytics Dashboard",
      description: "View your on-chain analytics and trading performance.",
      icon: "https://img.icons8.com/ios-filled/50/ffffff/combo-chart.png",
      link: "/analytics",
      comingSoon: true,
    },
    {
      title: "Support Center",
      description: "Get help and support for any issues.",
      icon: "https://img.icons8.com/ios-filled/50/ffffff/help.png",
      link: "/support",
    },
  ];

  const fetchUser = async () => {
    try {
      const res = await api.get("/api/auth/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUser(res.data);
    } catch (err) {
      toast.error("Session expired. Please sign in again.");
      navigate("/sign-in");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully!");
    navigate("/sign-in");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white">
        <div className="animate-spin h-12 w-12 border-4 border-purple-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white">
        <p className="text-lg">You are not authorized. Please sign in.</p>
        <Link
          to="/sign-in"
          className="mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-md font-semibold"
        >
          Go to Sign In
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-6 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-bold text-purple-500 mb-4"
        >
          Welcome back, {user.name || "User"}!
        </motion.h1>

        <p className="text-gray-400 mb-10">
          Explore your Web3 dashboard to access dApps, AI tools, and manage your account.
        </p>

        {/* Services Grid */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-800/60 backdrop-blur p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:bg-gray-700/70 transition"
            >
              <img src={service.icon} alt={service.title} className="w-12 h-12 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{service.description}</p>
              {service.comingSoon ? (
                <span className="px-4 py-2 bg-gray-500 text-sm rounded-lg cursor-not-allowed">
                  Coming Soon
                </span>
              ) : (
                <Link
                  to={service.link}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-sm transition"
                >
                  Get Started
                </Link>
              )}
            </div>
          ))}
        </motion.section>

        {/* Quick Actions */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            to="/contactus"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-md font-semibold"
          >
            Contact Support
          </Link>

          {/* Hide "Update Profile" if login is TON (since profile changes might not be supported) */}
          {user.provider !== "ton" && (
            <Link
              to="/profile"
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-md font-semibold"
            >
              Update Profile
            </Link>
          )}

          <button
            onClick={handleLogout}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-md font-semibold"
          >
            Logout
          </button>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;

