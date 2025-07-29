import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
            backgroundImage: `linear-gradient(rgba(20, 20, 20, 0.7), rgba(0, 0, 0, 0.9)), url(${logo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Header />
          <ToastContainer />
          <main className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="backdrop-blur-md bg-gray-900/80 shadow-2xl rounded-3xl p-10 w-full max-w-md text-white flex flex-col items-center space-y-6"
            >
              <div className="flex flex-col items-center space-y-2">
                <img src={Daologo} alt="Alpha DAO" className="w-16 h-16 animate-spin-slow" />
                <h1 className="text-3xl font-bold tracking-widest text-purple-400">ALPHA DAO</h1>
                <p className="text-sm text-gray-300">Sign in to your account</p>
              </div>

              <button
                onClick={handleCustomGoogleSignIn}
                className="mt-4 flex items-center justify-center gap-3 w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-medium rounded-lg transition duration-300"
              >
                <img
                  src="https://developers.google.com/identity/images/g-logo.png"
                  alt="Google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>
            </motion.div>
          </main>
        </div>
      )}
    </>
  );
};

export default SignIn;
