import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const [active, setActive] = useState(false);

  return (
    <section className="relative z-10 min-h-[70vh] flex items-center bg-gradient-to-br from-[#1a1333] via-[#2d184a] to-[#3a1c5c] overflow-hidden">
      {/* Decorative Blurs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-700 opacity-30 rounded-full blur-3xl -z-1 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 opacity-20 rounded-full blur-3xl -z-1 animate-pulse" />

      <div className="container mx-auto px-6 mb-12 mt-5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
              Start Your Journey Into The Web3 Landscape With
              <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-600 px-2 animate-gradient-x font-serif">
                ALPHA DAO
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 mb-8 font-light max-w-2xl mx-auto">
              Unlock exclusive access, connect with pioneers, and shape the future of decentralized communities.
            </p>
            <Link onClick={() => setActive(!active)} to="/sign-in">
              <button
                className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden text-lg font-semibold rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 shadow-lg hover:from-pink-500 hover:to-purple-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300"
              >
                <span className="relative z-10 text-white tracking-wide">
                  Get ALPHA
                </span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl" />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
