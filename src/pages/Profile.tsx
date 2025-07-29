import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/footer";
import api from "../api/axiosInstance";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

interface User {
  id: string;
  name: string;
  email: string;
  username?: string;
  picture?: string;
}

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"dashboard" | "settings">("dashboard");
  const [user, setUser] = useState<User | null>(null);
  const [avatar, setAvatar] = useState<string | null>(null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const fetchUser = async () => {
    try {
      const res = await api.get("/api/auth/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUser(res.data);
      setName(res.data.name);
      setUsername(res.data.username || "");
      setAvatar(res.data.picture ? `https://alphadao.onrender.com${res.data.picture}` : null);
    } catch {
      toast.error("Session expired. Please sign in.");
      navigate("/sign-in");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [navigate]);

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("name", name);
      formData.append("username", username);
      if (password) formData.append("password", password);
      if (avatarFile) formData.append("picture", avatarFile);

      await api.put("/api/auth/me", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Profile updated successfully!");
      fetchUser(); // Refresh user data after update
    } catch {
      toast.error("Failed to update profile.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/sign-in");
  };

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setAvatar(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="animate-spin h-12 w-12 border-4 border-purple-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center mt-20 text-white">
        <p>You are not authorized. Please sign in.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-purple-500">My Profile</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-white transition"
          >
            Logout
          </button>
        </div>

        <div className="flex space-x-6 border-b border-gray-700 mb-6">
          {["dashboard", "settings"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`pb-2 text-sm font-semibold capitalize transition ${
                activeTab === tab
                  ? "text-purple-400 border-b-2 border-purple-500"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "dashboard" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gray-800/60 backdrop-blur p-6 rounded-2xl flex flex-col lg:flex-row gap-10 shadow-xl"
          >
            <div className="lg:w-1/3 text-center lg:text-left">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-700 shadow-lg">
                <img
                  src={avatar || "/default-avatar.png"}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold mt-4">{name}</h2>
              <p className="text-gray-400">@{username || "username"}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>

            <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[ 
                { label: "Tokens", value: "150 ALPHA" },
                { label: "Staked", value: "100 ALPHA" },
                { label: "Votes", value: "5" },
                { label: "Rewards", value: "25 ALPHA" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-gray-700/80 p-4 rounded-xl shadow-md hover:bg-gray-600 transition"
                >
                  <p className="text-gray-400 text-sm">{item.label}</p>
                  <p className="text-lg font-bold">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "settings" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gray-800/60 backdrop-blur p-6 rounded-2xl max-w-2xl mx-auto shadow-xl"
          >
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
            <form onSubmit={handleSaveSettings} className="space-y-5">
              <div>
                <label className="text-sm text-gray-400">Avatar</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                  className="block text-sm mt-1"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 bg-gray-700 rounded-md text-white focus:outline-none"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-2 bg-gray-700 rounded-md text-white focus:outline-none"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400">New Password</label>
                <div className="flex">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 bg-gray-700 rounded-l-md text-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="px-3 bg-gray-600 rounded-r-md text-sm"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-purple-700 hover:bg-purple-800 rounded-md font-semibold transition"
              >
                Save Changes
              </button>
            </form>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
