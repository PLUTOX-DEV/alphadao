// src/components/Blog.tsx
import React from 'react';
import Header from '../component/Header';
import Footer from '../component/footer';
import BlogSearch from '../blog/BlogSearch'
import BlogList from '../blog/BlogList';
import BlogPagination from '../blog/Pagination';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    { 
      title: 'The Future of AI in Business',
      excerpt: 'Explore how AI is reshaping industries and driving innovation.',
      date: 'May 10, 2025',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Blockchain Beyond Cryptocurrency',
      excerpt: 'Learn about the diverse applications of blockchain technology.',
      date: 'April 15, 2025',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Building Scalable Software Solutions',
      excerpt: 'Tips and best practices for creating robust software.',
      date: 'March 20, 2025',
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  return (

    <div
      className="min-h-screen bg-gray-900 flex flex-col"
      style={{
        backgroundSize: 'max',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className=''>
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