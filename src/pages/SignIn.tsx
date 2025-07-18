import React, { useState, useEffect, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../public/bg-sign-in-basic.jpeg';

import Daologo from '../../public/Daologo.png';
import { FcGoogle } from 'react-icons/fc';
import FaWallet from '../assets/ton_symbol.svg';
import { FaTwitter, FaEye, FaEyeSlash } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import api from '../api/axiosInstance';
import 'react-toastify/dist/ReactToastify.css';


interface FormData {
  email: string;
  password: string;
}

declare global {
  interface Window {
    google: any;
  }
}

const SignIn: React.FC = () => {

  const [formData, setFormData] = useState<FormData>({ email: '', password: '' });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

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
      navigate("/"); // Redirect after login
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Google sign-in failed!");
    }
  };

  const navigate = useNavigate()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleEmailSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const res = await api.post("/api/auth/login", {
        email: formData.email,
        password: formData.password,
      });
      localStorage.setItem("token", res.data.token);
      toast.success("Sign-in successful!");
      navigate("/");
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Sign-in failed!");
    }
  };

  const handleWalletSignIn = () => {
    alert("Wallet sign-in initiated! (Placeholder)");
  };

  const handleTwitterSignIn = () => {
    alert("Twitter sign-in initiated! (Placeholder)");
  };


    if (data?.user) {
        toast.success("Login successful!");
        navigate("/", { replace: true });
      }
  

    setFormData({ email: '', password: '' });
    
  }
  catch (error) {
      toast.error(
        error.message || "Wrong Login Details. Please check your credentials"
      );
      console.error("Login error:", error);
    } finally {
      setFormData({email:"", password:""})
    }
  
  
 
}

  return (
    <div
      className="min-h-screen bg-gray-950"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 27, 75, 0.7), rgb(0, 0, 0)), url(${logo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <main className="container mx-auto px-3 py-1 font-[Georgia]">
          <ToastContainer />
          <div className="max-w-md mx-auto bg-gray-900 opacity-90 shadow-md rounded-lg p-8 mt-1 flex flex-col items-center">
            <div className="flex flex-col items-center">
              <Link to="/" className="flex flex-col items-center">
                <img
                  className="w-15 h-15 animate-spin-slow mb-2"
                  src={Daologo}
                  alt="Alpha DAO Logo"
                />
                <h1 className="text-4xl font-bold text-purple-300 text-center" style={{ fontFamily: "'Georgia', cursive" }}>
                  ALPHA DAO
                </h1>
              </Link>

            </div>


            <div className="mb-5 ml-0 text-center text-sm text-white ">
              <h2 className="text-3xl font-bold text-gray-400 dark:text white mt-0.5 mb-6 border-b-4 border-purple-900 drop-shadow">
                Welcome Back!
              </h2>
              <p className="mb-10 text-gray-300 font-semibold">Sign in to your account</p>
              <p>
                <Link to="/sign-up" className="text-purple-500 hover:underline">
                  Don’t have an account? Sign Up
                </Link>
              </p>
            </div>

            <div id="googleSignInDiv" className="w-full mb-4" />

            <button
              onClick={handleTwitterSignIn}
              className="w-full flex items-center justify-center px-4 py-3 mb-4 border border-gray-300 rounded-md hover:bg-purple-500 transition-colors duration-200"
            >
              <FaTwitter className="text-2xl mr-2 text-blue-600" />
              <span className="text-white font-semibold">Sign in with Twitter</span>
            </button>

            <button
              onClick={handleWalletSignIn}
              className="w-full flex items-center bg-blue-700 justify-center px-4 py-3 mb-6 border border-blue-700 rounded-md hover:bg-blue-500 transition-colors duration-200"
            >
              <img src={FaWallet} alt="Ton Wallet" className="w-6 h-6 mr-2" />
              <span className="text-white font-semibold">Sign in with Ton Wallet</span>
            </button>

            <div className="relative my-6">
              <hr className="border-gray-300" />
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white px-4 text-gray-500">
                OR
              </span>
            </div>

            <form onSubmit={handleEmailSignIn}>
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-900 pr-10"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block text-white font-semibold mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
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
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 focus:outline-none"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-purple-700 to-purple-950 opacity-100 text-white font-semibold rounded-md hover:bg-purple-500 transition-colors duration-200"
              >
                Sign In with Email
              </button>
            </form>


            <p className="mt-2 text-gray-400">
              Forgot your password?{' '}
              <Link to="/forgot-password" className="text-purple-500 hover:underline">
                Reset Password
              </Link>
            </p>
          </div>
        </main>
      </motion.div>
    </div>
  );
};

export default SignIn;
