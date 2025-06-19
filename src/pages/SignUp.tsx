import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/bg2.jpg';
import { FcGoogle } from 'react-icons/fc';
import FaWallet from '../assets/ton_symbol.svg';
import { FaTwitter } from 'react-icons/fa';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";

import { motion } from "framer-motion";

import supabase from "../services/supabaseClient";
import { ToastContainer, toast } from "react-toastify";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}
const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [, setLoading] = useState(false);

  // State for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmailSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;

    }
    setLoading(true);
    // setLoading(true);

    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    // setLoading(false);
     if (error) {
      toast.error(error.message, { position: "top-right" });
    } else {
      toast.success("Signup successful! Check your email for verification.", {
        position: "top-right",
      });
      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };
  const handleGoogleSignUp = () => {
    console.log('Google Sign-In triggered');
    alert('Google sign-in initiated! (Placeholder)');
  };

  const handleWalletSignUp = () => {
    console.log('Wallet Sign-In triggered');
    alert('Wallet sign-in initiated! (Placeholder)');
  };
  const handleTwitterSignUp = () => {
    console.log('Wallet Sign-In triggered');
    alert('Wallet sign-in initiated! (Placeholder)');
  };
  

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
      <main className="container mx-auto px-3 py-3 font-[Georgia]">

      <ToastContainer/>

        <div className="max-w-md mx-auto bg-gray-900 opacity-90 shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-500 text-center mb-8 font-serif sm:text-2xl">
            BEGIN YOUR JOURNEY WITH ALPHA DAO
          </h1>
          <button
            onClick={handleGoogleSignUp}
            className="w-full flex items-center justify-center px-4 py-3 mb-4 border border-gray-300 rounded-md hover:bg-purple-500 transition-colors duration-200"
          >
            <FcGoogle className="text-2xl mr-2" />
            <span className="text-white font-semibold">Sign up with Google</span>
          </button>
          <button
            onClick={handleTwitterSignUp}
            className="w-full flex items-center justify-center px-4 py-3 mb-4 border border-gray-300 rounded-md hover:bg-purple-500 transition-colors duration-200"
          >
            <FaTwitter className="text-2xl mr-2 text-blue-600" />
            <span className="text-white font-semibold">Sign up with Twitter</span>
          </button>
          <button
            onClick={handleWalletSignUp}
            className="w-full flex items-center bg-blue-700 justify-center px-4 py-3 mb-6 border border-blue-700 rounded-md hover:bg-blue-500 transition-colors duration-200"
          >
            <img src={FaWallet} alt="Ton Wallet" className="w-6 h-6 mr-2" />
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
              <label
                htmlFor="email"
                className="block text-white font-semibold mb-2"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-900"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-white font-semibold mb-2"
              >
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
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 focus:outline-none"
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-white font-semibold mb-2"
              >
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
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 focus:outline-none"
                  tabIndex={-1}
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-3 bg-gradient-to-r from-purple-700 to-purple-950 opacity-100 text-white font-semibold rounded-md hover:bg-purple-500 transition-colors duration-200"
            >
              Sign Up with Email
            </button>
          </form>

          <div className="mt-4 text-center text-sm text-gray-600">
            <p>
              Already have an account?{' '}
              <Link to="/sign-in" className="text-purple-500 hover:underlinee">
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