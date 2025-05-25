// src/components/Blog.tsx
import React from 'react';
import Header from '../component/Header';
import Footer from '../component/footer';
import BlogSearch from '../blog/BlogSearch'
import BlogList from '../blog/BlogList';
import BlogPagination from '../blog/Pagination';



const Blog: React.FC = () => {
 
  return (

    <div
      className="min-h-screen bg-gray-950 flex flex-col"
      style={{
        backgroundSize: 'max',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className='border-b-1 border-black bg-purple-950 rounded-2xl text-white'>
        <Header />
      </div>
      <BlogSearch/> 
      <BlogList/>
      <BlogPagination/>
      <Footer />
    </div>
  );
};

export default Blog;