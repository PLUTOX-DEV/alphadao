import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/bg-sign-in-basic.jpeg';
import { FcGoogle } from 'react-icons/fc';
import { FaWallet } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { motion } from "framer-motion";

interface FormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmailSignIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email Sign-In:', formData);
    alert('Email sign-in submitted! (Placeholder)');
    setFormData({ email: '', password: '' });
  };

  const handleGoogleSignIn = () => {
    console.log('Google Sign-In triggered');
    alert('Google sign-in initiated! (Placeholder)');
  };

  const handleWalletSignIn = () => {
    console.log('Wallet Sign-In triggered');
    alert('Wallet sign-in initiated! (Placeholder)');
  };
  const handleTwitterSignIn = () => {
    console.log('Wallet Sign-In triggered');
    alert('Wallet sign-in initiated! (Placeholder)');
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div
      className="min-h-screen bg-gray-950 "
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: 'max',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundColor: 'rgba(243, 244, 246, 0.9)',
      }}
    >
        <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
      <main className="container mx-auto px-3 py-1">
            <div className="max-w-md mx-auto bg-gray-900 opacity-90 shadow-md rounded-lg p-8 mt-1">
              <div className='lg:ml-15 md:ml-15'><Link to="/home"><img className=" motion-safe:w-15 h-15 animate-spin-slow display: inline mb-2" src='./Daologo.png'/><h1 className=" text-2xl  font-bold display: inline text-purple-900
               text-center font-serif">
          ALPHA DAO
        </h1></Link></div>
          <div className="mb-5 ml-0 text-center text-sm text-white ">
            <h2 className='text-3xl font-bold text-gray-400 dark:text white mt-0.5 mb-6 border-b-4 border-purple-900 drop-shadow'>Welcome Back!</h2>
            <p className="mb-10 text-gray-300 font-semibold">
              Sign in to your account
            </p>
            <p>
              <Link to="/sign-up" className="text-purple-500 hover:underline">
                Don’t have an account?{' '} Sign Up
              </Link>
            </p>
          </div>
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center px-4 py-3 mb-4 border border-gray-300 rounded-md hover:bg-purple-500 transition-colors duration-200"
          >
            <FcGoogle className="text-2xl mr-2" />
            <span className="text-white font-semibold">Sign in with Google</span>
          </button>
          <button
            onClick={handleTwitterSignIn}
            className="w-full flex items-center justify-center px-4 py-3 mb-4 border border-gray-300 rounded-md hover:bg-purple-500 transition-colors duration-200"   
          >
            <FaTwitter className="text-2xl mr-2 text-blue-600" />
            <span className="text-white font-semibold">Sign in with Twitter</span>
          </button>
          <button
            onClick={handleWalletSignIn}
            className="w-full flex items-center justify-center px-4 py-3 mb-6 border border-gray-300 rounded-md hover:bg-purple-500 transition-colors duration-200"
          >
            <FaWallet className="text-2xl mr-2 text-blue-600" />
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

            <div className="mb-6">
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
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 focus:outline-none"
                  tabIndex={-1}
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