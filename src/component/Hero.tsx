import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative z-10 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Start Your Journey Into The Web3 Landscape With
              <div>
                <span className="text-transparent bg-clip-text bg-gradient-to-r px-10 from-purple-400 to-pink-600">
                  ALPHA DAO
                </span>
              </div>
            </h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
}