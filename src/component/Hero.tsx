import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/Dao.jpeg";

export default function Hero() {
  const [active, setActive] = useState(false);

  return (
    <div
      className="relative z-10 min-h-130 bg-gray-950 md:mt-14 md:mb-14 flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 27, 75, 0.7), rgb(0, 0, 0)), url(${logo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderBottom: "1px solid rgba(55, 48, 163, 0.3)", // subtle purple border
        boxShadow: "0 20px 40px -20px rgba(30,27,75,0.7)", // soft shadow
      }}
    >
      <div className="container mx-auto px-6 font-[Georgia] sm-px-12 md:px-16 lg:px-20 xl:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-5xl font-bold text-purple-400 mt-22 mb-4">
              Unlock <br /> the Power of <br /> Collective Finance
            </h1>

            <p className="text-lg mb-6 text-white">
              Decentralized. Community-Owned. Built on TON. <br />
              Join Alpha DAO and shape the future of people-powered investing.
            </p>

            <div>
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r px-10 from-purple-950 to-gray-300"
                style={{ fontFamily: "'Georgia', cursive" }}
              >
                ALPHA DAO
              </span>
            </div>

            <Link onClick={() => setActive(!active)} to="/sign-in">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mt-4 me-2 overflow-hidden text-sm font-medium text-gray-300 rounded-lg group hover:text-white focus:bg-gray-950 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span className="relative px-5 py-2.5 bg-gray-800 transition-all ease-in duration-75 bg-gradient-to-r from-purple-700 to-purple-950 rounded-md group-hover:bg-transparent">
                  Get ALPHA
                </span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl" />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
