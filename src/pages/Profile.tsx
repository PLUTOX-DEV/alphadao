// src/pages/Profile.tsx
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
  User as UserIcon,
  Wallet,
  Youtube,
  Twitter,
  CheckCircle2,
  Lock,
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
  type: "auto" | "manual"; // auto = one-click, manual = requires code
  icon: JSX.Element;
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
  const [verificationCodes, setVerificationCodes] = useState<{ [key: string]: string }>({});

  const [tonConnectUI] = useTonConnectUI();
  const BASE_URL = "https://alphadao.onrender.com";

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

  const fetchTasks = async () => {
    try {
      setTasks([
        {
          id: "1",
          title: "Connect your TON Wallet",
          description: "Link your TON wallet to unlock rewards.",
          reward: "10 ALPHA",
          completed: user?.provider === "ton",
          type: "auto",
          icon: <Wallet className="w-6 h-6 text-cyan-400" />,
        },
        {
          id: "2",
          title: "Subscribe on YouTube",
          description: "Subscribe to AlphaDAO channel and enter code to verify.",
          reward: "20 ALPHA",
          completed: false,
          type: "manual",
          icon: <Youtube className="w-6 h-6 text-red-500" />,
        },
        {
          id: "3",
          title: "Follow AlphaDAO on Twitter",
          description: "Stay updated by following us on social media.",
          reward: "5 ALPHA",
          completed: false,
          type: "auto",
          icon: <Twitter className="w-6 h-6 text-sky-400" />,
        },
      ]);
    } catch {
      toast.error("Failed to fetch tasks");
    }
  };

  useEffect(() => {
    fetchUser();
    fetchTasks();
  }, [navigate]);

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

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setAvatar(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleCompleteTask = (task: Task) => {
    if (task.type === "manual") {
      if (verificationCodes[task.id] === "ALPHA2025") {
        setTasks((prev) =>
          prev.map((t) =>
            t.id === task.id ? { ...t, completed: true } : t
          )
        );
        toast.success("YouTube task verified 🎉");
      } else {
        toast.error("Invalid verification code ❌");
      }
    } else {
      setTasks((prev) =>
        prev.map((t) =>
          t.id === task.id ? { ...t, completed: true } : t
        )
      );
      toast.success("Task completed! 🎉");
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
          <h1 className="text-3xl font-bold text-purple-500 flex items-center gap-2">
            <UserIcon className="w-7 h-7" /> My Profile
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-white transition"
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
                  className="flex items-center justify-between p-4 bg-gray-700 rounded-xl hover:bg-gray-600 transition"
                >
                  <div className="flex items-center gap-3">
                    {task.icon}
                    <div>
                      <h3 className="font-semibold">{task.title}</h3>
                      <p className="text-sm text-gray-400">{task.description}</p>
                      <p className="text-xs text-green-400">Reward: {task.reward}</p>
                    </div>
                  </div>
                  {task.completed ? (
                    <span className="px-3 py-1 bg-green-600 rounded-md text-sm flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Completed
                    </span>
                  ) : task.type === "manual" ? (
                    <div className="flex gap-2 items-center">
                      <input
                        type="text"
                        placeholder="Enter code"
                        value={verificationCodes[task.id] || ""}
                        onChange={(e) =>
                          setVerificationCodes({
                            ...verificationCodes,
                            [task.id]: e.target.value,
                          })
                        }
                        className="px-2 py-1 rounded bg-gray-800 text-white text-sm"
                      />
                      <button
                        onClick={() => handleCompleteTask(task)}
                        className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded-md text-sm"
                      >
                        Verify
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleCompleteTask(task)}
                      className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded-md text-sm"
                    >
                      Complete
                    </button>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
