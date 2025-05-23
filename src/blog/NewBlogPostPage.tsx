
import React from 'react';
import BlogEditor from './BlogEditor';

const NewBlogPostPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <BlogEditor />
        </div>
    );
};

export default NewBlogPostPage;