import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/footer";
import api from "../api/axiosInstance";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { useTonConnectUI } from "@tonconnect/ui-react";
import {
  LogOut,
  Link,
  Gem,
  Youtube,
  CheckCircle2,
  Star,
  Eye,
} from "lucide-react";

interface User {
  id: string;
  name: string;
  email?: string;
  username?: string;
  picture?: string;
  provider?: "local" | "google" | "telegram" | "ton";
}

interface Task {
  id: string;
  title: string;
  description: string;
  reward: string;
  completed: boolean;
  codeInput?: string;
}

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"dashboard" | "settings" | "tasks">("dashboard");
  const [user, setUser] = useState<User | null>(null);
  const [avatar, setAvatar] = useState<string | null>(null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  const [tonConnectUI] = useTonConnectUI();
  const BASE_URL = "https://alphadao.onrender.com";

  // ✅ Fetch user data
  const fetchUser = async () => {
    try {
      const res = await api.get("/api/auth/me", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      setUser(res.data);
      setName(res.data.name || "");
      setUsername(res.data.username || "");

      const pictureUrl = res.data.picture
        ? res.data.picture.startsWith("http")
          ? res.data.picture
          : `${BASE_URL}${res.data.picture}`
        : null;

      setAvatar(pictureUrl);
    } catch {
      toast.error("Session expired. Please sign in.");
      navigate("/sign-in");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Load tasks
  const fetchTasks = async () => {
    setTasks([
      {
        id: "1",
        title: "Connect your TON Wallet",
        description: "Link your TON wallet to unlock rewards.",
        reward: "10 ALPHA",
        completed: user?.provider === "ton",
      },
      {
        id: "2",
        title: "Stake your first tokens",
        description: "Start staking to earn rewards and voting power.",
        reward: "20 ALPHA",
        completed: false,
      },
      {
        id: "3",
        title: "Watch YouTube & Claim Code",
        description: "Enter the secret code shown in the video.",
        reward: "15 ALPHA",
        completed: false,
      },
    ]);
  };

  useEffect(() => {
    fetchUser();
    fetchTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  // ✅ Save profile settings
  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("name", name);
      if (username) formData.append("username", username);
      if (password) formData.append("password", password);
      if (avatarFile) formData.append("picture", avatarFile);

      await api.put("/api/auth/me", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success("Profile updated successfully!");
      fetchUser();
    } catch {
      toast.error("Failed to update profile.");
    }
  };

  // ✅ Logout
  const handleLogout = async () => {
    localStorage.removeItem("token");
    if (user?.provider === "ton") {
      try {
        await tonConnectUI.disconnect();
        toast.success("Disconnected TON wallet");
      } catch (err) {
        console.error("TON disconnect error:", err);
      }
    }
    navigate("/sign-in");
  };

  // ✅ Avatar upload preview
  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setAvatar(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  // ✅ Mark task complete
  const handleCompleteTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, completed: true } : task))
    );
    toast.success("Task completed! 🎉");
  };

  // ✅ Verify YouTube/manual code
  const handleVerifyCode = (task: Task) => {
    if (task.codeInput?.trim().toUpperCase() === "ALPHA123") {
      handleCompleteTask(task.id);
      toast.success(`Code verified! 🎉 You earned ${task.reward}`);
    } else {
      toast.error("Invalid code. Try again.");
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
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl text-white transition"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-6 border-b border-gray-700 mb-6">
          {["dashboard", "tasks", "settings"].map((tab) => (
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

        {/* Dashboard */}
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
              {user.email && <p className="text-sm text-gray-500">{user.email}</p>}
              <p className="text-xs text-gray-400 mt-1">
                Provider: <span className="capitalize">{user.provider}</span>
              </p>
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

        {/* Tasks */}
        {activeTab === "tasks" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gray-800/60 backdrop-blur p-6 rounded-2xl shadow-xl"
          >
            <h2 className="text-xl font-bold mb-4 text-purple-400">Tasks & Rewards</h2>
            <div className="space-y-4">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-700 rounded-xl hover:bg-gray-600 transition"
                >
                  {/* Icon + Info */}
                  <div className="flex items-center gap-4">
                    <span className="text-purple-400">
                      {task.id === "1" && <Link className="w-6 h-6" />}
                      {task.id === "2" && <Gem className="w-6 h-6" />}
                      {task.id === "3" && <Youtube className="w-6 h-6" />}
                      {!["1", "2", "3"].includes(task.id) && <Star className="w-6 h-6" />}
                    </span>
                    <div>
                      <h3 className="font-semibold">{task.title}</h3>
                      <p className="text-sm text-gray-400">{task.description}</p>
                      <p className="text-xs text-green-400">Reward: {task.reward}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  {task.completed ? (
                    <span className="mt-3 md:mt-0 flex items-center gap-1 px-3 py-1 bg-green-600 rounded-md text-sm text-center">
                      <CheckCircle2 className="w-4 h-4" /> Completed
                    </span>
                  ) : task.id === "3" ? (
                    <div className="mt-3 md:mt-0 flex gap-2">
                      <input
                        type="text"
                        placeholder="Enter code"
                        className="px-3 py-2 rounded-lg bg-gray-600 text-sm text-white focus:outline-none"
                        onChange={(e) =>
                          setTasks((prev) =>
                            prev.map((t) =>
                              t.id === task.id ? { ...t, codeInput: e.target.value } : t
                            )
                          )
                        }
                      />
                      <button
                        onClick={() => handleVerifyCode(task)}
                        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-semibold"
                      >
                        Claim
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleCompleteTask(task.id)}
                      className="mt-3 md:mt-0 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-semibold"
                    >
                      Complete
                    </button>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Settings */}
        {activeTab === "settings" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gray-800/60 backdrop-blur p-6 rounded-2xl max-w-2xl mx-auto shadow-xl"
          >
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
            <form onSubmit={handleSaveSettings} className="space-y-5">
              {/* Avatar Upload */}
              <div>
                <label className="text-sm text-gray-400">Avatar</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                  className="block text-sm mt-1"
                />
              </div>

              {/* Name */}
              <div>
                <label className="text-sm text-gray-400">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 bg-gray-700 rounded-md text-white focus:outline-none"
                />
              </div>

              {/* Username & Password */}
              {user.provider !== "ton" && (
                <>
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
                        {showPassword ? <Eye className="w-4 h-4" /> : "Show"}
                      </button>
                    </div>
                  </div>
                </>
              )}

              <button
                type="submit"
                className="w-full py-2 bg-purple-700 hover:bg-purple-800 rounded-xl font-semibold transition"
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
