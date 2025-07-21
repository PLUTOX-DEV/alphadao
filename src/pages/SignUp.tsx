import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../public/bg2.jpg';
import Daologo from '../../public/Daologo.png';
import { FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import api from '../api/axiosInstance';
import Header from '../component/Header';
import 'react-toastify/dist/ReactToastify.css';

declare global {
  interface Window {
    google: any;
  }
}

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

    if (window.google && clientId) {
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleGoogleResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById('googleSignInDiv'),
        { theme: 'filled_blue', size: 'large', width: '100%' }
      );
    }
  }, []);

  const handleGoogleResponse = async (response: any) => {
    const idToken = response.credential;
    try {
      const res = await api.post('/api/auth/google', { idToken });
      localStorage.setItem('token', res.data.token);
      toast.success('Google sign-up successful!');
      navigate('/profile');
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Google sign-up failed!');
    }
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
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <main className="container mx-auto px-3 py-16 font-[Georgia]">
          <ToastContainer />
          <div className="max-w-md mx-auto bg-gray-900/90 shadow-lg rounded-lg p-8 mt-4 flex flex-col items-center">
            <Link to="/" className="flex flex-col items-center mb-4">
              <img
                className="w-16 h-16 animate-spin-slow mb-2"
                src={Daologo}
                alt="Alpha DAO Logo"
              />
              <h1 className="text-4xl font-bold text-purple-300 text-center">
                ALPHA DAO
              </h1>
            </Link>

            <h2 className="text-2xl font-bold text-gray-300 mb-1">Create an Account</h2>
            <p className="text-sm text-gray-400 mb-6">Join the Alpha DAO community</p>

            <p className="text-sm text-gray-400 mb-6">
              Already have an account?{' '}
              <Link to="/sign-in" className="text-purple-500 hover:underline">
                Sign In
              </Link>
            </p>

            <div id="googleSignInDiv" className="w-full mb-4" />

            <button
              type="button"
              disabled
              className="w-full flex items-center justify-center px-4 py-3 mb-6 border border-gray-600 rounded-md bg-gray-700 cursor-not-allowed"
            >
              <FaTwitter className="text-2xl mr-2 text-blue-500" />
              <span className="text-white font-semibold">Twitter sign-up coming soon</span>
            </button>
          </div>
        </main>
      </motion.div>
    </div>
  );
};

export default SignUp;
