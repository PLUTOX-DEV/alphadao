// src/contexts/BlogContext.tsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import { BlogPost, BlogContextType } from '../../types'; // Import types

export const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [searchTag, setSearchTag] = useState<string>('');
    const [isAuthenticated] = useState<boolean>(true); // Placeholder for auth

    const postsPerPage = 6;

    const getBlogPosts = async (page: number = 1, tag: string = ''): Promise<void> => {
        setLoading(true);
        setError(null);
        try {
            // Placeholder: Replace with actual API call
            const response: { data: BlogPost[], total: number, page: number, limit: number } = await new Promise(resolve => setTimeout(() => {
     const allPosts: BlogPost[] = [
                   
  {
    id: '1',
    title: 'Solana vs Ethereum: Speed, Fees, and Dev UX',
    author: 'CryptoDevJane',
    description: 'Comparing Solana and Ethereum for developers and degens.',
    content: '<p>This is the <b>content</b> of the first blog post, diving into Solana vs Ethereum.</p>',
    imageUrl: './blogpic.jpeg',
    tags: ['solana', 'ethereum'],
    published: true,
    createdAt: '2025-05-20T10:00:00Z',
  },
  {
    id: '2',
    title: 'Mastering React with wagmi and ethers.js',
    author: '0xJohnSmith',
    description: 'Hooks meet blockchain: Building dApps with React.',
    content: '<p>Hooks changed the way we build web3 UIs using wagmi.</p>',
    imageUrl: './blogpic.jpeg',
    tags: ['react', 'wagmi'],
    published: true,
    createdAt: '2025-05-19T11:30:00Z',
  },
  {
    id: '3',
    title: 'Vite + Solana: Supercharge Your Web3 Frontend',
    author: 'AliceWeb3',
    description: 'Why Vite is perfect for Solana frontends.',
    content: '<p>Vite is a next-generation frontend tooling for fast blockchain apps.</p>',
    imageUrl: './blogpic.jpeg',
    tags: ['vite', 'solana'],
    published: true,
    createdAt: '2025-05-18T14:45:00Z',
  },
  {
    id: '4',
    title: 'Modular CSS for Web3 Projects',
    author: 'BobNFT',
    description: 'Clean and scoped styles for your dApp UI.',
    content: '<p>CSS Modules provide local scope for your styles in crypto dashboards.</p>',
    imageUrl: './blogpic.jpeg',
    tags: ['css', 'web3'],
    published: true,
    createdAt: '2025-05-17T09:15:00Z',
  },
  {
    id: '5',
    title: 'Using Zustand and Context for Web3 State',
    author: 'JaneChain',
    description: 'Manage dApp state with simplicity and power.',
    content: '<p>Context API and Zustand simplify state management in decentralized apps.</p>',
    imageUrl: './blogpic.jpeg',
    tags: ['web3', 'state'],
    published: true,
    createdAt: '2025-05-16T16:00:00Z',
  },
  {
    id: '6',
    title: 'Reusable Components for DeFi Interfaces',
    author: 'DeFiJohn',
    description: 'Crafting scalable and composable components for DeFi.',
    content: '<p>Designing reusable components is key to scalable DeFi UIs.</p>',
    imageUrl: './blogpic.jpeg',
    tags: ['defi', 'components'],
    published: true,
    createdAt: '2025-05-15T13:20:00Z',
  },
  {
    id: '7',
    title: 'Private Alpha: zk Protocol Launch Draft',
    author: 'JaneChain',
    description: 'This post is not yet published.',
    content: '<p>This content is still a <b>draft</b> about an upcoming zk protocol launch.</p>',
    imageUrl: './blogpic.jpeg',
    tags: ['zk', 'draft'],
    published: false,
    createdAt: '2025-05-22T08:00:00Z',
  },
  {
    id: '8',
    title: 'How I Survived the Crypto Bear Market',
    author: 'AliceWeb3',
    description: 'Reflections from a builder during down bad szn.',
    content: '<p>Enjoy this new post about lessons learned in the bear market!</p>',
    imageUrl: './blogpic.jpeg',
    tags: ['bearmarket'],
    published: true,
    createdAt: '2025-05-14T10:00:00Z',
  },
  {
    id: '9',
    title: 'Patterns in Smart Contract Frontends',
    author: 'JaneChain',
    description: 'Render Props, HOCs, and composability in dApp UIs.',
    content: '<p>Learn about advanced React patterns applied to smart contract interfaces.</p>',
    imageUrl: './blogpic.jpeg',
    tags: ['web3', 'patterns'],
    published: true,
    createdAt: '2025-05-13T12:00:00Z',
  },
  {
    id: '10',
    title: 'Turbocharging dApps with Memoization',
    author: '0xJohnSmith',
    description: 'Tips for making fast, gas-efficient frontends.',
    content: '<p>Performance is crucial for user experience and on-chain cost efficiency.</p>',
    imageUrl: './blogpic.jpeg',
    tags: ['performance', 'dapp'],
    published: true,
    createdAt: '2025-05-12T15:00:00Z',
  }


                ];

                const searchTerm = tag.toLowerCase();
                const filteredPosts = searchTerm
                    ? allPosts.filter(post =>
                        post.published && (
                            post.title.toLowerCase().includes(searchTerm) ||
                            post.description.toLowerCase().includes(searchTerm) ||
                            post.tags.some(t => t.toLowerCase().includes(searchTerm))
                        )
                      )
                    : allPosts.filter(post => post.published);

                const startIndex = (page - 1) * postsPerPage;
                const endIndex = startIndex + postsPerPage;
                const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

                resolve({
                    data: paginatedPosts,
                    total: filteredPosts.length,
                    page,
                    limit: postsPerPage
                });
            }, 300));

            setBlogPosts(response.data);
            setTotalPages(Math.ceil(response.total / postsPerPage));
            setCurrentPage(response.page);
        } catch (err) { // Type 'any' for error, or more specific like 'Error'
            setError('Failed to fetch blog posts.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const createNewBlogPost = async (postData: Omit<BlogPost, 'id'>): Promise<boolean> => {
        setLoading(true);
        setError(null);
        try {
            await new Promise(resolve => setTimeout(() => {
                console.log('Creating new blog post:', postData);
                // Simulate adding to local state or re-fetching from a real API
                resolve(null); // Resolve with null as no value is returned
            }, 500));
            await getBlogPosts(currentPage, searchTag); // Refresh posts after creation
            return true;
        } catch (err) {
            setError('Failed to create blog post.');
            console.error(err);
            return false;
        } finally {
            setLoading(false);
        }
    };

    const saveAsDraft = async (draftData: Omit<BlogPost, 'id'>): Promise<boolean> => {
        setLoading(true);
        setError(null);
        try {
            await new Promise(resolve => setTimeout(() => {
                console.log('Saving blog post as draft:', draftData);
                resolve(null);
            }, 500));
            return true;
        } catch (err) {
            setError('Failed to save draft.');
            console.error(err);
            return false;
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getBlogPosts(currentPage, searchTag);
    }, [currentPage, searchTag]); // Depend on currentPage and searchTag

    const handlePageChange = (page: number): void => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handleSearch = (term: string): void => {
        setSearchTag(term);
        setCurrentPage(1); // Reset to first page on new search
    };

    // Cast the context value to BlogContextType
    const contextValue: BlogContextType = {
        blogPosts,
        loading,
        error,
        currentPage,
        totalPages,
        postsPerPage,
        searchTag,
        isAuthenticated,
        handlePageChange,
        handleSearch,
        createNewBlogPost,
        saveAsDraft,
        getBlogPosts
    };

    return (
        <BlogContext.Provider value={contextValue}>
            {children}
        </BlogContext.Provider>
    );
};

export const useBlog = () => {
    const context = useContext(BlogContext);
    if (context === undefined) {
        throw new Error('useBlog must be used within a BlogProvider');
    }
    return context;
};