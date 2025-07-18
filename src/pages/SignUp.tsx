import React, { useState, useEffect, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../public/bg2.jpg";
import { FaTwitter, FaEyeSlash, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import api from "../api/axiosInstance";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

declare global {
  interface Window {
    google: any;
  }
}

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Google Sign-In
  useEffect(() => {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    console.log("Google Client ID:", clientId);

    if (window.google && clientId) {
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleGoogleResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById("googleSignInDiv"),
        { theme: "outline", size: "large", width: "100%" }
      );
    } else {
      console.error("Google API not loaded or Client ID missing");
    }
  }, []);

  const handleGoogleResponse = async (response: any) => {
    const idToken = response.credential;
    try {
      const res = await api.post("/api/auth/google", { idToken });
      localStorage.setItem("token", res.data.token);
      toast.success("Google sign-in successful!");
      navigate("/"); // redirect to homepage
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Google sign-in failed!");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmailSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setLoading(true);

    try {
      const res = await api.post("/api/auth/register", {
        email: formData.email,
        password: formData.password,
      });
      toast.success(res.data.message || "Signup successful! Please verify your email.");
      setFormData({ email: "", password: "", confirmPassword: "" });
      // Optional: redirect here too
      // navigate("/");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Signup failed!");
    } finally {
      setLoading(false);
    }
  };

  const handleWalletSignUp = () => {
    alert("Wallet sign-in initiated! (Placeholder)");
  };

  const handleTwitterSignUp = () => {
    alert("Twitter sign-in initiated! (Placeholder)");
  };

  return (
    <div
      className="min-h-screen bg-gray-950"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 27, 75, 0.7), rgb(0, 0, 0)), url(${logo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <main className="container mx-auto px-3 py-3 font-[Georgia]">
          <ToastContainer />

          <div className="max-w-md mx-auto bg-gray-900 opacity-90 shadow-md rounded-lg p-8">
            <h1 className="text-3xl font-bold text-gray-500 text-center mb-8 font-serif sm:text-2xl">
              BEGIN YOUR JOURNEY WITH ALPHA DAO
            </h1>

            <div id="googleSignInDiv" className="mb-4" />

            <button
              onClick={handleTwitterSignUp}
              className="w-full flex items-center justify-center px-4 py-3 mb-4 border border-gray-300 rounded-md hover:bg-purple-500 transition-colors duration-200"
              type="button"
            >
              <FaTwitter className="text-2xl mr-2 text-blue-600" />
              <span className="text-white font-semibold">Sign up with Twitter</span>
            </button>

            <button
              onClick={handleWalletSignUp}
              className="w-full flex items-center bg-blue-700 justify-center px-4 py-3 mb-6 border border-blue-700 rounded-md hover:bg-blue-500 transition-colors duration-200"
              type="button"
            >
              <img src="/ton_symbol.svg" alt="Ton Wallet" className="w-6 h-6 mr-2" />
              <span className="text-white font-semibold">Sign up with Ton Wallet</span>
            </button>

            <div className="relative my-6">
              <hr className="border-gray-300" />
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white px-4 text-gray-500">
                OR
              </span>
            </div>

            <form onSubmit={handleEmailSignUp}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-900"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-white font-semibold mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-900 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="confirmPassword" className="block text-white font-semibold mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-900 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
                    aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full px-4 py-3 bg-gradient-to-r from-purple-700 to-purple-950 text-white font-semibold rounded-md transition-colors duration-200 ${
                  loading ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-500"
                }`}
              >
                {loading ? "Signing Up..." : "Sign Up with Email"}
              </button>
            </form>

            <div className="mt-4 text-center text-sm text-gray-600">
              <p>
                Already have an account?{" "}
                <Link to="/sign-in" className="text-purple-500 hover:underline">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </main>
      </motion.div>
    </div>
  );
};

export default SignUp;
