import { motion } from "framer-motion";
import {useState} from "react";
import { Link } from "react-router-dom";
export default function Hero() {

  const [active, setActive] = useState(false);
  return (
    <div className="relative z-10 min-h-130 md:mt-14 md:mb-14 flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold text-white mb-6">
              Start Your Journey Into The Web3 Landscape With
              <div>
                <span className="text-transparent bg-clip-text bg-gradient-to-r px-10 from-purple-400 to-pink-600">
                  ALPHA DAO
                </span>
              </div>
              <Link onClick={() => setActive(!active)} to="/">
              <button  className="relative inline-flex items-center justify-center p-0.5 mb-2 mt-4 me-2 overflow-hidden text-sm font-medium text-white-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white  focus:bg-gray-950 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent active:bg-pink-400">
                  Get ALPHA
                </span>
              </button>
              </Link>
            </h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
