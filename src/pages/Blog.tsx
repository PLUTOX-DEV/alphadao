// src/components/Blog.tsx
import React from 'react';
import Header from '../component/Header';
import Footer from '../component/footer';
import BlogSearch from '../blog/BlogSearch'
import BlogList from '../blog/BlogList';
import BlogPagination from '../blog/Pagination';
import { motion } from 'framer-motion';



const Blog: React.FC = () => {
 
  return (
    

    <div
      className="min-h-screen bg-gray-900 flex flex-col"
    >

      <div className='border-b-1 border-black bg-purple-950 rounded-2xl text-white py-7'>

        <Header />
      </div>
      <motion.div
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