// src/components/SignIn.tsx
import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Footer from "../component/footer";
import logo from '../assets/backgr/bg-sign-in-basic.jpeg';
import { FcGoogle } from 'react-icons/fc';
import { FaWallet } from 'react-icons/fa';

interface FormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

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

  return (
    <div
      className="min-h-screen bg-gray-100"
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: 'max',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundColor: 'rgba(243, 244, 246, 0.9)',
      }}
    >
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
          Sign In To Get ALPHA
        </h1>

        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-8">
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center px-4 py-3 mb-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
          >
            <FcGoogle className="text-2xl mr-2" />
            <span className="text-gray-700 font-semibold">Sign in with Google</span>
          </button>

          <button
            onClick={handleWalletSignIn}
            className="w-full flex items-center justify-center px-4 py-3 mb-6 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
          >
            <FaWallet className="text-2xl mr-2 text-blue-600" />
            <span className="text-gray-700 font-semibold">Sign in with Wallet</span>
          </button>

          <div className="relative my-6">
            <hr className="border-gray-300" />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-gray-500">
              OR
            </span>
          </div>

          <form onSubmit={handleEmailSignIn}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Sign In with Email
            </button>
          </form>

          <div className="mt-4 text-center text-sm text-gray-600">
            <p>
              Don’t have an account?{' '}
              <Link to="/signup" className="text-blue-600 hover:underline">
                Sign Up
              </Link>
            </p>
            <p className="mt-2">
              Forgot your password?{' '}
              <Link to="/forgot-password" className="text-blue-600 hover:underline">
                Reset Password
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;