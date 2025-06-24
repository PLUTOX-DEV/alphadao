import React from 'react';
import BlogCard from './BlogCard';
import { useBlog } from './context/BlogContext';
import Loader from '../component/loader';

const BlogList: React.FC = () => {
    const { blogPosts, loading, error } = useBlog();

    if (loading) {

        return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"> <Loader/> </div>;
    }

    if (error) {
        return <div className="text-center py-10 text-xl text-red-600">Error: {error}</div>;
    }

    if (!blogPosts || blogPosts.length === 0) {
        return <div className="text-center py-10 text-xl text-gray-600">No blog posts found.</div>;
    }

    return (
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 max-w-7xl mx-auto">
            {blogPosts.map(post => (
                <BlogCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default BlogList;