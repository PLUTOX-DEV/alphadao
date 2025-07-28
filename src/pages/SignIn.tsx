import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../public/bg-sign-in-basic.jpeg';
import Daologo from '../../public/Daologo.png';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import api from '../api/axiosInstance';
import Header from '../component/Header';
import Loader from '../component/loader';
import 'react-toastify/dist/ReactToastify.css';

declare global {
  interface Window {
    google: any;
  }
}

const SignIn: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleResponse = async (response: any) => {
    const idToken = response.credential;
    try {
      setLoading(true);
      const res = await api.post('/api/auth/google', { idToken });
      localStorage.setItem('token', res.data.token);
      toast.success('Google sign-in successful!');
      navigate('/profile');
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Google sign-in failed!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

    if (window.google && clientId) {
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleGoogleResponse,
      });
    }
  }, []);

  const handleCustomGoogleSignIn = () => {
    if (window.google) {
      window.google.accounts.id.prompt();
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
            <main className="container mx-auto px-4 py-16 flex justify-center font-[Georgia]">
              <ToastContainer />
              <div className="max-w-md w-full bg-gray-900/95 shadow-lg rounded-2xl p-8 flex flex-col items-center space-y-4">
                <Link to="/" className="flex flex-col items-center mb-2">
                  <img
                    className="w-16 h-16 animate-spin-slow mb-2"
                    src={Daologo}
                    alt="Alpha DAO Logo"
                  />
                  <h1 className="text-3xl font-bold text-purple-300 text-center">
                    ALPHA DAO
                  </h1>
                </Link>

                <h2 className="text-xl font-semibold text-gray-300">Welcome Back!</h2>
                <p className="text-sm text-gray-400">Sign in to your account</p>

                <button
                  onClick={handleCustomGoogleSignIn}
                  className="mt-4 flex items-center justify-center gap-3 w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition duration-300"
                >
                  <img
                    src="https://developers.google.com/identity/images/g-logo.png"
                    alt="Google"
                    className="w-5 h-5"
                  />
                  Sign in with Google
                </button>

                <p className="text-xs text-gray-400 mt-6">
                  Don’t have an account?{' '}
                  <Link to="/sign-up" className="text-purple-500 hover:underline">
                    Sign Up
                  </Link>
                </p>

                <p className="text-xs text-gray-400">
                  Forgot your password?{' '}
                  <Link to="/forgot-password" className="text-purple-500 hover:underline">
                    Reset Password
                  </Link>
                </p>
              </div>
            </main>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default SignIn;
