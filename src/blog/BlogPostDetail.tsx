
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { BlogPost } from '../types'; // Import BlogPost type

const BlogPostDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Specify type for useParams
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const defaultImage = '/assets/placeholder-image.jpg';

    useEffect(() => {
        const getPost = async (): Promise<void> => {
            setLoading(true);
            setError(null);
            try {
                const fetchedPost: BlogPost | undefined = await new Promise(resolve => setTimeout(() => {
                    const allPosts: BlogPost[] = [
                        { id: '1', title: 'First Blog Post', author: 'Jane Doe', description: 'An introduction to something exciting.', content: '<p>This is the <b>content</b> of the first blog post. It features different <span style="font-size: 24px;">font sizes</span>, <u>underlined</u> text, and <strong>bold</strong> words. Also a <a href="https://react.dev/" target="_blank">link to React docs</a>.</p><p>Here is another paragraph with some <span style="color: rgb(230, 0, 0);">red text</span> and <span style="background-color: rgb(0, 138, 0);">green highlight</span>.</p>', imageUrl: '/assets/placeholder-image.jpg', tags: ['react', 'frontend'], published: true, createdAt: '2025-05-20T10:00:00Z' },
                        { id: '2', title: 'Understanding React Hooks', author: 'John Smith', description: 'A deep dive into useState and useEffect.', content: '<p>Hooks changed the way we write React components.</p>', imageUrl: '/assets/placeholder-image.jpg', tags: ['react', 'hooks'], published: true, createdAt: '2025-05-19T11:30:00Z' },
                        { id: '3', title: 'Vite for Faster Development', author: 'Alice Brown', description: 'Boost your development workflow with Vite.', content: '<p>Vite is a next-generation frontend tooling.</p>', imageUrl: '/assets/placeholder-image.jpg', tags: ['vite', 'tooling'], published: true, createdAt: '2025-05-18T14:45:00Z' },
                        { id: '4', title: 'CSS Modules Explained', author: 'Bob White', description: 'How to manage CSS in React applications.', content: '<p>CSS Modules provide local scope for your styles.</p>', imageUrl: '/assets/placeholder-image.jpg', tags: ['css', 'styling'], published: true, createdAt: '2025-05-17T09:15:00Z' },
                        { id: '5', title: 'State Management with Context API', author: 'Jane Doe', description: 'Simple global state with React Context.', content: '<p>Context API is great for simpler state management.</p>', imageUrl: '/assets/placeholder-image.jpg', tags: ['react', 'state'], published: true, createdAt: '2025-05-16T16:00:00Z' },
                        { id: '6', title: 'Building Reusable Components', author: 'John Smith', description: 'Best practices for component design.', content: '<p>Designing reusable components is key to scalable apps.</p>', imageUrl: '/assets/placeholder-image.jpg', tags: ['react', 'components'], published: true, createdAt: '2025-05-15T13:20:00Z' },
                        { id: '7', title: 'My Draft Post', author: 'Jane Doe', description: 'This post is not yet published.', content: '<p>This content is still a <b>draft</b>.</p>', imageUrl: '/assets/placeholder-image.jpg', tags: ['draft', 'testing'], published: false, createdAt: '2025-05-22T08:00:00Z' },
                        { id: '8', title: 'Another Published Post', author: 'Alice Brown', description: 'More content for our readers.', content: '<p>Enjoy this new post!</p>', imageUrl: '/assets/placeholder-image.jpg', tags: ['general'], published: true, createdAt: '2025-05-14T10:00:00Z' },
                        { id: '9', title: 'Advanced React Patterns', author: 'Jane Doe', description: 'Exploring Render Props and HOCs.', content: '<p>Learn about advanced React patterns.</p>', imageUrl: '/assets/placeholder-image.jpg', tags: ['react', 'patterns'], published: true, createdAt: '2025-05-13T12:00:00Z' },
                        { id: '10', title: 'Optimizing React Performance', author: 'John Smith', description: 'Tips and tricks for faster React apps.', content: '<p>Performance is crucial for user experience.</p>', imageUrl: '/assets/placeholder-image.jpg', tags: ['react', 'performance'], published: true, createdAt: '2025-05-12T15:00:00Z' },
                    ];
                    return resolve(allPosts.find(p => p.id === id));
                }, 300));
                if (fetchedPost && fetchedPost.published) {
                    setPost(fetchedPost);
                } else {
                    setError('Blog post not found or not published.');
                }
            } catch (err) {
                setError('Failed to fetch blog post.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        if (id) { // Ensure id exists before fetching
            getPost();
        } else {
            setLoading(false);
            setError('No blog post ID provided.');
        }
    }, [id]);

    if (loading) {
        return <div className="text-center py-10 text-xl text-gray-600">Loading blog post...</div>;
    }

    if (error) {
        return <div className="text-center py-10 text-xl text-red-600">{error}</div>;
    }

    if (!post) {
        return <div className="text-center py-10 text-xl text-gray-600">Blog post not found.</div>;
    }

    return (
        <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{post.title}</h1>
                <p className="text-sm text-gray-600">
                    By <span className="font-semibold text-blue-700">{post.author}</span> on <span className="italic">{format(new Date(post.createdAt), 'MMMM dd,yyyy')}</span>
                </p>
                {post.tags && post.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                        {post.tags.map(tag => (
                            <span key={tag} className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
            {post.imageUrl && (
                <div className="mb-8">
                    <img
                        src={post.imageUrl || defaultImage}
                        alt={post.title}
                        className="w-full h-auto rounded-lg shadow-md"
                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src = defaultImage; }}
                    />
                </div>
            )}
            <p className="text-lg text-gray-700 leading-relaxed mb-8 italic border-l-4 border-blue-500 pl-4">
                {post.description}
            </p>
            <div
                className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content as string }} // Type assertion for __html
            />
        </div>
    );
};

export default BlogPostDetail;