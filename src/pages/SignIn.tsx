import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Daologo from '../../public/Daologo.png';
import logo from '../../public/bg-sign-in-basic.jpeg';

import Header from '../component/Header';
import Loader from '../component/loader';
import {
  TonConnectButton,
  useTonAddress
} from '@tonconnect/ui-react';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const userAddress = useTonAddress();
  const [loading, setLoading] = useState(false);

  // Handle TON wallet login
  useEffect(() => {
    if (userAddress) {
      setLoading(true);
      console.log('TON Wallet Address:', userAddress);

      fetch('https://alphadao.onrender.com/api/auth/ton', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // Important for session cookies
        body: JSON.stringify({ wallet: userAddress }),
      })
        .then(async (res) => {
          if (!res.ok) throw new Error('Auth failed');
          const data = await res.json();
          console.log('TON login success:', data);
          navigate('/profile');
        })
        .catch((err) => {
          console.error('TON login error:', err);
          alert('TON login failed. Try again.');
        })
        .finally(() => setLoading(false));
    }
  }, [userAddress]);

  // Inject Telegram Login Script
  useEffect(() => {
    const existingScript = document.getElementById('telegram-login-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'telegram-login-script';
      script.src = 'https://telegram.org/js/telegram-widget.js?7';
      script.setAttribute('data-telegram-login', 'alphadaoxbot'); // your bot username
      script.setAttribute('data-size', 'large');
      script.setAttribute('data-radius', '10');
      script.setAttribute('data-auth-url', 'https://alphadao.onrender.com/api/auth/telegram'); // your backend
      script.setAttribute('data-request-access', 'write');
      script.async = true;

      const container = document.getElementById('telegram-login-button');
      if (container) {
        container.appendChild(script);
      }
    }
  }, []);

  if (loading) return <Loader />;

  return (
    <div
      className="min-h-screen bg-gray-950"
      style={{
        backgroundImage: `linear-gradient(rgba(20, 20, 20, 0.7), rgba(0, 0, 0, 0.9)), url(${logo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Header />
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

          {/* TON Wallet Connect Button */}
          <div className="w-full">
            <TonConnectButton className="w-full" />
          </div>

          {/* Telegram Login Widget */}
          <div id="telegram-login-button" className="w-full mt-6" />
        </motion.div>
      </main>
    </div>
  );
};

export default SignIn;
