import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/footer";
import api from "../api/axiosInstance";
import toast from "react-hot-toast";

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

  useEffect(() => {
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
        setAvatar(res.data.picture || null);
      } catch {
        toast.error("Please log in again.");
        navigate("/sign-in");
      } finally {
        setLoading(false);
      }
    };

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
      toast.success("Profile updated!");
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
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-500 border-t-transparent"></div>
        <p className="mt-4 text-purple-400">Loading profile...</p>
      </div>
    );
  }

  if (!user) {
    return <div className="text-center text-white mt-12">Not authorized</div>;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen font-[Georgia]">
      <Header />

      <div className="container mx-auto px-4 py-12 mt-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-purple-400">Profile</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition"
          >
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6 border-b border-gray-700">
          {["dashboard", "settings"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`pb-2 px-4 ${
                activeTab === tab
                  ? "border-b-2 border-purple-400 text-purple-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tabs Content */}
        {activeTab === "dashboard" && (
          <div className="bg-gray-800 p-6 rounded-lg flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 text-center lg:text-left">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-700">
                <img
                  src={avatar || "/default-avatar.png"}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold mt-4">{name}</h2>
              <p className="text-gray-400">
                @{username} | {user.email}
              </p>
            </div>
            <div className="w-full lg:w-2/3 lg:pl-8 mt-6 lg:mt-0">
              <h3 className="text-xl font-bold mb-4">Dashboard</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">Tokens: 150 ALPHA</div>
                <div className="bg-gray-700 p-4 rounded-lg">Staked: 100 ALPHA</div>
                <div className="bg-gray-700 p-4 rounded-lg">Votes: 5</div>
                <div className="bg-gray-700 p-4 rounded-lg">Rewards: 25 ALPHA</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Profile Settings</h2>
            <form onSubmit={handleSaveSettings} className="space-y-4">
              <div>
                <label className="block text-gray-400 mb-2">Avatar</label>
                <input type="file" accept="image/*" onChange={handleAvatarUpload} />
              </div>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 bg-gray-700 rounded-lg text-white"
                />
              </div>
              <div>
                <label>Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-2 bg-gray-700 rounded-lg text-white"
                />
              </div>
              <div>
                <label>Password</label>
                <div className="flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 bg-gray-700 rounded-l-lg text-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="px-3 bg-gray-600 rounded-r-lg"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-700 px-4 py-2 rounded-full"
              >
                Save Changes
              </button>
            </form>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
