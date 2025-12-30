import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/Dao.jpeg";

export default function Hero() {
  const [active, setActive] = useState(false);

  return (
    <motion.div
      initial={{ backgroundPositionX: "50%", backgroundPositionY: "50%" }}
      animate={{ backgroundPositionX: "52%", backgroundPositionY: "52%" }}
      transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      className="relative min-h-screen bg-gray-950/90 backdrop-blur-sm md:mt-14 md:mb-14 flex items-center py-20"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 27, 75, 0.8), rgba(0, 0, 0, 0.9)), url(${logo})`,
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        borderBottom: "1px solid rgba(55, 48, 163, 0.3)",
        boxShadow: "0 20px 40px -20px rgba(30,27,75,0.7)",
      }}
    >
      <div className="container mx-auto px-6 sm-px-12 md:px-16 lg:px-20 xl:px-24">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-purple-400">
              AlphaDAO
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              A Digital Nation for Builders, Creators, and Innovators
            </h2>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
              AlphaDAO is a decentralized ecosystem designed to coordinate learning, contribution,
              innovation, and ownership at a global scale.
            </p>

            <div className="text-gray-300 space-y-4">
              <p className="text-lg">We are building the infrastructure where:</p>
              <ul className="text-left inline-block space-y-3 text-lg">
                <li>• skills are verifiable</li>
                <li>• participation is rewarded</li>
                <li>• communities organize into productive economic systems</li>
              </ul>
            </div>

            <div className="text-gray-400 italic space-y-2 text-lg">
              <p>Not hype.</p>
              <p>Not speculation.</p>
              <p className="text-purple-300 font-semibold text-xl">A real system for real builders.</p>
            </div>

            <Link onClick={() => setActive(!active)} to="/sign-in">
              <button className="relative inline-flex items-center justify-center p-0.5 mt-8 overflow-hidden text-lg font-medium text-gray-300 rounded-lg group hover:text-white focus:bg-gray-950 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span className="relative px-8 py-4 bg-gray-800 transition-all ease-in duration-75 bg-gradient-to-r from-purple-700 to-purple-950 rounded-md group-hover:bg-transparent">
                  Get ALPHA
                </span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl" />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
