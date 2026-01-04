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
    id: 'alphadao-academy',
    title: 'AlphaDAO Academy: Structure & Operating Model',
    author: 'AlphaDAO Education Team',
    description: 'Discover how AlphaDAO Academy develops skilled contributors and creates a continuous pipeline of talent for the Web3 ecosystem.',
    content: `<div class="prose max-w-none">
      <h2>AlphaDAO Academy: Structure & Operating Model</h2>
      
      <p>AlphaDAO Academy is the education and talent-development arm of the AlphaDAO ecosystem. It exists to develop skilled contributors, certify real competencies, and create a continuous pipeline of talent for AlphaDAO Labs, partners, and the broader Web3 ecosystem.</p>
      
      <h3>1. Mandate & Purpose</h3>
      <p>The Academy focuses on structured learning, verifiable skill acquisition, and contributor readiness. <strong>Education is treated as infrastructure</strong> — not content creation alone.</p>
      
      <h3>2. Core Responsibilities</h3>
      <ul>
        <li>Curriculum design across Web3, blockchain, product, and research disciplines</li>
        <li>Delivery of bootcamps, cohorts, workshops, and guided programs</li>
        <li>Learn-to-earn and quest-based education models</li>
        <li>Skill assessment and certification via Recertify</li>
        <li>Talent discovery and onboarding into AlphaDAO Labs and partner projects</li>
      </ul>
      
      <h3>3. Internal Structure</h3>
      <table class="w-full border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 p-2 text-left">Unit</th>
            <th class="border border-gray-300 p-2 text-left">Function</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 p-2"><strong>Head of Academy</strong></td>
            <td class="border border-gray-300 p-2">Strategic leadership, curriculum direction, DAO reporting</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><strong>Curriculum & Content Team</strong></td>
            <td class="border border-gray-300 p-2">Program design, learning materials, syllabus updates</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><strong>Instructors & Mentors</strong></td>
            <td class="border border-gray-300 p-2">Teaching, guidance, technical instruction</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><strong>Assessment & Certification Team</strong></td>
            <td class="border border-gray-300 p-2">Skill evaluation, certification issuance (Recertify)</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><strong>Learning Facilitators</strong></td>
            <td class="border border-gray-300 p-2">Cohort coordination, learner support, engagement</td>
          </tr>
        </tbody>
      </table>
      
      <h3>4. Relationship to Other AlphaDAO Arms</h3>
      <p>AlphaDAO Academy operates independently but in coordination with other ecosystem arms. Labs receive talent from the Academy, while the Foundation supports programs through funding and grants. Governance remains DAO-driven.</p>
      
      <h3>5. Incentives & Sustainability</h3>
      <p>Academy contributors are compensated through DAO-approved revenue allocations, grants, and incentive programs. Participation and achievement may be rewarded with credentials, reputation, and future opportunities.</p>
      
      <h3>6. Governance Alignment</h3>
      <p>The Academy operates under DAO governance. Program launches, budgets, and major changes are subject to DAO-approved frameworks. <strong>The Academy executes; the DAO governs.</strong></p>
    </div>`,
    imageUrl: './blogpic.jpeg',
    tags: ['academy', 'education', 'alphadao', 'web3'],
    published: true,
    createdAt: '2025-01-16T12:00:00Z',
  },
  {
    id: 'alphadao-1',
    title: 'AlphaDAO: A Digital Nation for Builders, Creators, and Innovators',
    author: 'AlphaDAO Team',
    description: 'AlphaDAO is a decentralized ecosystem designed to coordinate learning, contribution, innovation, and ownership at a global scale.',
    content: `<div class="prose max-w-none">
      <h2>AlphaDAO</h2>
      <h3>A Digital Nation for Builders, Creators, and Innovators</h3>
      <p>AlphaDAO is a decentralized ecosystem designed to coordinate learning, contribution, innovation, and ownership at a global scale.</p>
      
      <p><strong>We are building the infrastructure where:</strong></p>
      <ul>
        <li>skills are verifiable</li>
        <li>participation is rewarded</li>
        <li>communities organize into productive economic systems</li>
      </ul>
      
      <p><strong>Not hype. Not speculation. A real system for real builders.</strong></p>
      
      <h3>What Is AlphaDAO?</h3>
      <p>AlphaDAO is a digital nation composed of three interconnected pillars:</p>
      <ol>
        <li><strong>AlphaDAO Society</strong> — the community layer</li>
        <li><strong>AlphaDAO Labs</strong> — the innovation and infrastructure arm</li>
        <li><strong>Recertify</strong> — the verification and digital records engine</li>
      </ol>
      
      <p>Together, they form an ecosystem where people don't just participate — they build, earn, and grow.</p>
      
      <h3>AlphaDAO Society — The Community Layer</h3>
      <p>The Society is the heart of AlphaDAO. It is a global network of individuals who learn together, contribute together, and build together.</p>
      
      <p><strong>The Society enables:</strong></p>
      <ul>
        <li>Community proposals and voting</li>
        <li>Partnership approvals</li>
        <li>Learn-to-Earn and Quest-to-Earn participation</li>
        <li>Reputation, badges, and on-chain identity</li>
        <li>Collective missions and ecosystem initiatives</li>
      </ul>
      
      <p>This is where culture, identity, and participation live.</p>
      
      <h3>AlphaDAO Labs — Innovation & Infrastructure</h3>
      <p>AlphaDAO Labs is the research, development, and execution arm of the ecosystem.</p>
      
      <p><strong>Labs is responsible for:</strong></p>
      <ul>
        <li>Product development</li>
        <li>Research and experimentation</li>
        <li>Infrastructure building</li>
        <li>Incubating startups and tools born from the community</li>
      </ul>
      
      <p>Every major AlphaDAO product begins in the Labs. Labs receives a fixed 10% ecosystem allocation, ensuring long-term sustainability, accountability, and professional execution.</p>
      
      <h3>Recertify — Verifiable Digital Records</h3>
      <p>Recertify is AlphaDAO's first flagship product. It is a blockchain-powered engine for:</p>
      <ul>
        <li>Skill certification</li>
        <li>Achievement verification</li>
        <li>Participation records</li>
        <li>Digital identity and reputation</li>
      </ul>
      
      <p><strong>Recertify also enables:</strong></p>
      <ul>
        <li>Online competitions</li>
        <li>Digital titles and badges</li>
        <li>Trusted records for individuals and organizations</li>
      </ul>
      
      <p>Think of it as a digital record authority for the internet era.</p>
      
      <h3>The AlphaDAO Academy</h3>
      <p>The Academy delivers structured learning through:</p>
      <ul>
        <li>Live virtual sessions</li>
        <li>Workshops and bootcamps</li>
        <li>Community-driven education</li>
      </ul>
      
      <p>Learning is tracked, verified, and recorded through Recertify. The Academy connects education directly to proof, reputation, and opportunity.</p>
      
      <h3>Learn-to-Earn & Quest-to-Earn</h3>
      <p>AlphaDAO rewards value creation through two core systems:</p>
      
      <p><strong>Learn-to-Earn</strong></p>
      <ul>
        <li>Completing courses</li>
        <li>Attending sessions</li>
        <li>Demonstrating competence</li>
      </ul>
      
      <p><strong>Quest-to-Earn</strong></p>
      <ul>
        <li>Completing ecosystem tasks</li>
        <li>Contributing to products</li>
        <li>Participating in missions and challenges</li>
      </ul>
      
      <p><strong>Reputation comes first. Rewards follow real contribution.</strong></p>
      
      <h3>Governance</h3>
      <p>AlphaDAO governance is proposal-based and vote-driven. The community votes on:</p>
      <ul>
        <li>Ecosystem direction</li>
        <li>Product initiatives</li>
        <li>Strategic partnerships</li>
      </ul>
      
      <p>There are no council elections and no political layers. Governance is simple, transparent, and focused on progress.</p>
      
      <h3>Revenue & Sustainability</h3>
      <p>AlphaDAO generates revenue through:</p>
      <ul>
        <li>Training programs and academies</li>
        <li>Certifications and digital records</li>
        <li>Competitions and challenges</li>
        <li>Partnerships and infrastructure services</li>
      </ul>
      
      <p>Revenue flows into structured pools that:</p>
      <ul>
        <li>Sustain the ecosystem</li>
        <li>Fund development</li>
        <li>Reward contributors</li>
        <li>Support long-term growth</li>
      </ul>
      
      <h3>Vision</h3>
      <p><strong>A world where:</strong></p>
      <ul>
        <li>skills are verifiable</li>
        <li>learning has real economic value</li>
        <li>contribution is rewarded</li>
        <li>communities govern and build together</li>
      </ul>
      
      <p><strong>AlphaDAO is building the infrastructure for that world.</strong></p>
    </div>`,
    imageUrl: './blogpic.jpeg',
    tags: ['alphadao', 'dao', 'blockchain', 'community'],
    published: true,
    createdAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 'alphadao-2',
    title: 'Adding AI to Recertify: Strategic Rationale & System Design',
    author: 'AlphaDAO Labs',
    description: 'This document explains why integrating artificial intelligence into Recertify is a strategic upgrade for AlphaDAO.',
    content: `<div class="prose max-w-none">
      <h2>Adding AI to Recertify: Strategic Rationale & System Design</h2>
      
      <p>This document explains why integrating artificial intelligence into Recertify is a strategic upgrade for AlphaDAO. The goal is to improve scale, accuracy, and trust while maintaining human governance and transparency.</p>
      
      <h3>1. Why AI Strengthens Recertify</h3>
      <p>Recertify verifies skills, participation, performance, and outcomes. As the ecosystem grows, AI enables Recertify to analyze large volumes of data consistently and objectively, removing manual bottlenecks while preserving credibility.</p>
      
      <h3>2. Role of AI in the System</h3>
      <p>AI acts as an analytical layer. It does not make governance decisions or override rules. Instead, it processes activity data, identifies patterns, flags anomalies, and produces structured evidence used for certifications and records.</p>
      
      <h3>3. Core Improvements Enabled by AI</h3>
      <p><strong>Performance Analysis:</strong> AI evaluates learning progress, task quality, prediction accuracy, and agent execution over time, enabling dynamic scoring rather than static certificates.</p>
      
      <p><strong>Integrity Protection:</strong> AI detects manipulation, false participation, and coordinated abuse, protecting the credibility of Recertify-issued records.</p>
      
      <p><strong>Agent Certification:</strong> AI assesses autonomous agent behavior, risk exposure, and consistency, producing verifiable performance histories for machine actors.</p>
      
      <h3>4. Synergy With Prediction Markets</h3>
      <p>In AlphaDAO prediction markets focused on weather, agriculture, and news, AI measures forecast accuracy and reliability across events. This allows Recertify to issue credibility scores tied to real-world outcomes.</p>
      
      <h3>5. Strategic Benefits to AlphaDAO</h3>
      <p>AI integration allows AlphaDAO to scale trust, support autonomous economies, enable institutional participation, and strengthen Recertify as defensible infrastructure.</p>
      
      <h3>Conclusion</h3>
      <p>By integrating AI as a verification and analysis layer, Recertify evolves into a trust engine for both human and machine-driven systems, supporting AlphaDAO's long-term vision.</p>
    </div>`,
    imageUrl: './blogpic.jpeg',
    tags: ['ai', 'recertify', 'alphadao', 'verification'],
    published: true,
    createdAt: '2025-01-14T14:30:00Z',
  },
  {
    id: 'alphadao-3',
    title: 'ATD DAO Roadmap (2025 – 2026)',
    author: 'ATD DAO Team',
    description: 'Comprehensive roadmap for ATD DAO development phases from Q2 2025 to Q1 2026, including token launch and ecosystem expansion.',
    content: `<div class="prose max-w-none">
      <h2>ATD DAO Roadmap (2025 – 2026)</h2>
      
      <h3>Phase 1 - Q2 2025: Product Launches</h3>
      
      <h4>1. Community hub and blog</h4>
      <ul>
        <li>Launch the official DAO blog for project updates, trade insights, and community news.</li>
        <li>Educate new users about DAO features, token utility, and governance participation.</li>
        <li>Educate users on how to trade, TA (technical analysis) and FA (fundamental analysis) in the crypto industry</li>
      </ul>
      
      <h4>2. NFT Integration for early access</h4>
      <ul>
        <li>Mint exclusive NFTs that grant holders early access to DAO products and governance privileges.</li>
        <li>Early supporters receive limited-edition NFTs tied to loyalty and contribution.</li>
        <li>NFTs may also unlock premium content, whitelist spots, or future staking multipliers</li>
      </ul>
      
      <h4>3. Prediction Markets (Add-On)</h4>
      <ul>
        <li>Community forecasts around crypto, events, or metrics.</li>
        <li>Winners earn USDT or Token used to stake</li>
      </ul>
      
      <h3>Phase 2 - Q3 2025: Foundation Community Formation</h3>
      
      <p><strong>Token launch:</strong> the ATD DAO official token ($ATD) would be launched</p>
      
      <p><strong>Initial Token Value:</strong> $0.10 per ATD via initial token sale or distribution.</p>
      
      <h4>Smart Contract Deployment:</h4>
      <ul>
        <li>ATD trading smart contract trading pool will be integrated, a secure contract for Trading Pool capital collection.</li>
        <li>Launch staking contracts using Polygon-based yield protocols.</li>
      </ul>
      
      <h4>ATD DAO Trader Recruitment:</h4>
      <ul>
        <li>Onboard verified traders to execute DAO-funded trades.</li>
        <li>Profit-sharing model based on contribution size.</li>
      </ul>
      
      <h3>Phase 3 - Q4 2025: Ecosystem Expansion</h3>
      
      <h4>Governance</h4>
      <ul>
        <li>DAO voting via Snapshot or on-chain governance.</li>
        <li>Token holders can propose/vote on changes (e.g., trader onboarding, treasury allocation).</li>
      </ul>
      
      <h4>Signal Monetization Platform</h4>
      <ul>
        <li>Verified traders offer paid trading signals.</li>
        <li>Users subscribe using ATD or USDT.</li>
        <li>DAO takes commission from trader earnings.</li>
      </ul>
      
      <h4>DePIN Integration (Q1 2026)</h4>
      <ul>
        <li>Launch middleware to connect real-world devices to blockchain.</li>
        <li>Reward contributors with ATD + NFTs based on uptime & data accuracy.</li>
        <li>Spin up dedicated DePIN SubDAO to manage infrastructure and incentives.</li>
      </ul>
      
      <h3>Tokenomics & Value Growth Strategy</h3>
      
      <h4>Utility-Driven Demand</h4>
      <ul>
        <li>Governance rights.</li>
        <li>Signal access.</li>
        <li>Staking rewards.</li>
        <li>DePIN contribution rewards.</li>
      </ul>
      
      <h4>Scarcity Mechanisms</h4>
      <ul>
        <li>Token burns from trading profits.</li>
        <li>Locked staking/governance participation.</li>
      </ul>
      
      <h4>Revenue Use</h4>
      <ul>
        <li>Token buybacks using DAO-generated income.</li>
        <li>Reinvest in liquidity, rewards, and marketing.</li>
      </ul>
      
      <h3>Projected Value Targets</h3>
      <ul>
        <li><strong>Short-Term (1–2 years):</strong> Target $1 per ATD.</li>
        <li><strong>Long-Term (3–5 years):</strong> $5–$10+ as the DAO scales in the Polygon ecosystem.</li>
      </ul>
    </div>`,
    imageUrl: './blogpic.jpeg',
    tags: ['atd', 'dao', 'roadmap', 'tokenomics'],
    published: true,
    createdAt: '2025-01-13T09:00:00Z',
  },                   
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