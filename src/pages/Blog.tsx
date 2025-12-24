// src/components/Blog.tsx
import React from 'react';
import Header from '../component/Header';
import Footer from '../component/footer';
import AnimatedBackground from '../components/AnimatedBackground';
import BlogSearch from '../blog/BlogSearch'
import BlogList from '../blog/BlogList';
import BlogPagination from '../blog/Pagination';
import { motion } from 'framer-motion';



const Blog: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden relative">
      <AnimatedBackground />

      <div className='border-b border-purple-500/20 bg-gray-950/80 backdrop-blur-sm text-white py-7 z-50 relative'>
        <Header />
      </div>
      <motion.div
                  className="relative z-10 bg-gray-900/95 backdrop-blur-sm min-h-screen"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
      <BlogSearch/> 
      <BlogList/>
      <BlogPagination/>
       </motion.div>
     <footer className='mt-auto'>
        <Footer />
      </footer>
    </div>
    
   
  );
};

export default Blog;