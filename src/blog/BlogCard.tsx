
import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { BlogPost } from '../types'; // Import BlogPost type

interface BlogCardProps {
    post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
    const defaultImage = '/assets/placeholder-image.jpg';

    return (
        <Link to={`/blog/${post.id}`} className="block border border-gray-700 rounded-2xl">
            <div className="bg-gray-950 rounded-lg shadow-md hover:shadow-xl  hover:bg-gray-800 transition-shadow duration-200 ease-in-out overflow-hidden h-full flex flex-col">
                <div className="relative w-full pb-[56.25%] overflow-hidden bg-gray-200">
                    <img
                        src={post.imageUrl || defaultImage}
                        alt={post.title}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src = defaultImage; }}
                    />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  {post.tags && post.tags.length > 0 && (
                        <div className="mt-2 mb-3 flex flex-wrap gap-2">
                            {post.tags.map(tag => (
                                <span key={tag} className="bg-gray-900 text-gray-200 text-xs font-medium px-3 py-1 rounded-lg border-solid border m-1 border-gray-700">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                    <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                    
                    <p className="text-gray-500 text-base mb-3 flex-grow line-clamp-3">{post.description}</p>

                    <p className="text-sm text-gray-300 mb-1">By {post.author}</p>
                    
                    <p className="text-xs text-gray-500 mt-auto">{format(new Date(post.createdAt), 'MMMM dd,yyyy')}</p>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;