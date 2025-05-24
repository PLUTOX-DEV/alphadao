// src/components/SignUp.tsx
import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/bg2.jpg';
import { FcGoogle } from 'react-icons/fc';
import { FaWallet } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmailSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Email Sign-Up:', formData);
    alert('Sign-up submitted! (Placeholder)');
    setFormData({ email: '', password: '', confirmPassword: '' });
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
        backgroundImage: `url(${logo})`,
        backgroundSize: 'max',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundColor: 'rgba(243, 244, 246, 0.9)',
      }}
    >
      <main className="container mx-auto px-3 py-1">
        <div className="max-w-md mx-auto bg-gray-900 opacity-90 shadow-md rounded-lg p-8">
<h1 className="text-3xl font-bold text-white text-center mb-8 font-serif sm:text-2xl">
          ENTER THE DAO
        </h1>
        <button
                    onClick={handleGoogleSignUp}
                    className="w-full flex items-center justify-center px-4 py-3 mb-4 border border-gray-300 rounded-md hover:bg-purple-500 transition-colors duration-200"
                  >
                    <FcGoogle className="text-2xl mr-2" />
                    <span className="text-white font-semibold">Sign in with Google</span>
                  </button>
                  <button
                    onClick={handleTwitterSignUp}
                    className="w-full flex items-center justify-center px-4 py-3 mb-4 border border-gray-300 rounded-md hover:bg-purple-500 transition-colors duration-200"   
                  >
                    <FaTwitter className="text-2xl mr-2 text-blue-600" />
                    <span className="text-white font-semibold">Sign in with Twitter</span>
                  </button>
                  <button
                    onClick={handleWalletSignUp}
                    className="w-full flex items-center justify-center px-4 py-3 mb-6 border border-gray-300 rounded-md hover:bg-purple-500 transition-colors duration-200"
                  >
                    <FaWallet className="text-2xl mr-2 text-blue-600" />
                    <span className="text-white font-semibold">Sign in with Ton Wallet</span>
                  </button>
        
                  <div className="relative my-6">
                    <hr className="border-gray-300" />
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-gray-500">
                      OR
                    </span>
                  </div>
        
          <form onSubmit={handleEmailSignUp}>
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

            <div className="mb-4">
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

            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 font-semibold mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-3 bg-purple-900 text-white font-semibold rounded-md hover:bg-purple-500 transition-colors duration-200"
            >
              Sign Up with Email
            </button>
          </form>

          <div className="mt-4 text-center text-sm text-gray-600">
            <p>
              Already have an account?{' '}
              <Link to="/sign-in" className="text-blue-600 hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;