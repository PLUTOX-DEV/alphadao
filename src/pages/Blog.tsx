// src/components/Blog.tsx
import React from 'react';
import Header from '../component/Header';
import Footer from '../component/footer';

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
      <div className='bg-transparent'>
        <Header />
        </div>
      <main className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-4xl font-bold text-white  text-center mb-8 mt-16">
          Alpha DAO Blog
        </h1>
        <p className="text-white text-center max-w-2xl mx-auto mb-12">
          Stay updated with the latest insights and trends in technology.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-whit e shadow-md rounded-lg overflow-hidden bg-gray-500"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                <p className="text-gray-600">{post.excerpt}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-blue-600 hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;