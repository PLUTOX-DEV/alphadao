import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Daologo from '../../public/Daologo.png';
import logo from '../../public/bg-sign-in-basic.jpeg';

import Header from '../component/Header';
import Loader from '../component/loader';
import {
  TonConnectButton,
  TonConnectUIProvider,
  useTonAddress
} from '@tonconnect/ui-react';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const userAddress = useTonAddress();
  const [loading, setLoading] = useState(false);

  // Handle TON login
  useEffect(() => {
    if (userAddress) {
      setLoading(true);
      console.log('TON Wallet Address:', userAddress);
      
      // TODO: Replace this with an actual API call to your backend
      setTimeout(() => {
        setLoading(false);
        navigate('/profile');
      }, 1000);
    }
  }, [userAddress]);

  if (loading) return <Loader />;

  return (
    <TonConnectUIProvider manifestUrl="https://alphadao.vercel.app/tonconnect-manifest.json">
      {/* TODO: Replace "yourdomain.com" with your actual hosted domain */}
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
            <div className="w-full mt-6">
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                    <script async src="https://telegram.org/js/telegram-widget.js?7"
                      data-telegram-login="alphadaoxbot"
                      data-size="large"
                      data-radius="10"
                      data-auth-url="https://alphadao.onrender.com/api/auth/telegram"
                      data-request-access="write">
                    </script>
                  `,
                }}
              />
              {/* TODO: Replace "YourBotUsername" and "your-backend.com" with actual bot and API */}
            </div>
          </motion.div>
        </main>
      </div>
    </TonConnectUIProvider>
  );
};

export default SignIn;
