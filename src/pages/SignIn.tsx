import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Daologo from "../../public/Daologo.png";
import logo from "../../public/bg-sign-in-basic.jpeg";

import Header from "../component/Header";
import Loader from "../component/loader";

import { TonConnectButton, useTonAddress } from "@tonconnect/ui-react";
import toast from "react-hot-toast";
import api from "../api/axiosInstance";

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const walletAddress = useTonAddress();
  const [loading, setLoading] = useState(false);

  // ✅ TON Wallet auth handler
  useEffect(() => {
    if (!walletAddress) return;

    const loginWithTon = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://alphadao.onrender.com/api/auth/ton",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ wallet: walletAddress }),
          }
        );

        if (!response.ok) throw new Error("TON auth failed");
        const data = await response.json();

        if (data.token) {
          localStorage.setItem("token", data.token);
        }

        console.log("[✅] TON login success:", data);
        navigate("/profile");
      } catch (err) {
        console.error("[❌] TON login error:", err);
        toast.error("TON login failed. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loginWithTon();
  }, [walletAddress, navigate]);

  // ✅ Telegram Login Widget
  useEffect(() => {
    const container = document.getElementById("telegram-login-widget-wrapper");
    if (!container) return;

    // Clean up existing widget if any
    container.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.async = true;
    script.setAttribute("data-telegram-login", "alphadaoxbot"); // <- replace with your bot username
    script.setAttribute("data-size", "large");
    script.setAttribute("data-request-access", "write");
    script.setAttribute("data-userpic", "true");
    script.setAttribute("data-onauth", "handleTelegramAuth(user)");

    container.appendChild(script);

    // Expose global callback
    (window as any).handleTelegramAuth = async (user: any) => {
      try {
        setLoading(true);
        const res = await api.post("/api/auth/telegram", user);

        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
        }

        toast.success("Signed in with Telegram!");
        navigate("/profile");
      } catch {
        toast.error("Telegram login failed.");
      } finally {
        setLoading(false);
      }
    };
  }, [navigate]);

  // ✅ Show loader during login
  if (loading) return <Loader />;

  return (
    <div
      className="min-h-screen bg-gray-950"
      style={{
        backgroundImage: `linear-gradient(rgba(20, 20, 20, 0.7), rgba(0, 0, 0, 0.9)), url(${logo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
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
          {/* Logo and Title */}
          <div className="flex flex-col items-center space-y-2">
            <img
              src={Daologo}
              alt="Alpha DAO"
              className="w-16 h-16 animate-spin-slow"
            />
            <h1 className="text-3xl font-bold tracking-widest text-purple-400">
              ALPHA DAO
            </h1>
            <p className="text-sm text-gray-300">Sign in to your account</p>
          </div>

          {/* TON Wallet Connect */}
          <div className="w-full">
            <TonConnectButton className="w-full" />
          </div>

          {/* Telegram Login Widget */}
          <div
            className="w-full mt-6 flex justify-center"
            id="telegram-login-widget-wrapper"
          />
        </motion.div>
      </main>
    </div>
  );
};

export default SignIn;
// Note: Replace YOUR_TELEGRAM_BOT_USERNAME with your actual Telegram bot username