import { Heart, Share2, Calendar, Tag, Folder, Eye } from "lucide-react"
import { BlogPost } from '../types';


interface BlogPostsProps {
    post: BlogPost;
}
   
 const BlogPosts: React.FC<BlogPostsProps>= ({post}) => {

 

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <article className="max-w-4xl mx-auto px-4 py-12 md:px-6 lg:px-8">
        {/* Header Section */}
        <header className="mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-purple-100">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent leading-tight mb-8">
              {post.title}
            </h1>

            {/* Metadata */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-4 w-4 text-purple-800" />
                  <span className="font-medium">Last updated: December 15, 2023</span>
                </div>

                <div className="flex items-center gap-2">
                  <Folder className="h-4 w-4 text-purple-800" />
                  <span className="bg-purple-800 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Web Development
                  </span>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <Eye className="h-4 w-4 text-purple-800" />
                  <span className="font-medium">1,247 views</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 bg-gradient-to-r from-purple-800 to-purple-700 hover:from-purple-900 hover:to-purple-800 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <Heart className="h-4 w-4" />
                  <span className="font-semibold">42</span>
                </button>

                <button className="flex items-center gap-2 border-2 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>

            <div className="h-1 bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400 rounded-full"></div>
          </div>
        </header>

        {/* Content Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-8 border border-purple-100">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed font-light border-l-4 border-purple-800 pl-6 bg-purple-50 py-4 rounded-r-lg">
              As we move into 2024, the web development landscape continues to evolve at a rapid pace. From new
              frameworks to emerging technologies, developers need to stay ahead of the curve to build modern,
              efficient, and user-friendly applications.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 relative">
              <span className="bg-gradient-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent">
                Key Trends Shaping Web Development
              </span>
              <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-purple-800 to-purple-600 rounded-full"></div>
            </h2>

            <p className="text-gray-700 mb-8 leading-relaxed">
              The web development ecosystem is constantly changing, driven by new technologies, user expectations, and
              business requirements. Here are some of the most significant trends that are shaping the future of web
              development.
            </p>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border-l-4 border-purple-800">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-purple-800">
                  1. Server-Side Rendering Renaissance
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Server-side rendering (SSR) has made a strong comeback with frameworks like Next.js, Nuxt.js, and
                  SvelteKit leading the charge. The benefits of SSR include improved SEO, faster initial page loads, and
                  better performance on slower devices.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border-l-4 border-purple-800">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-purple-800">
                  2. Edge Computing and CDN Evolution
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Edge computing is revolutionizing how we think about web application deployment. By moving computation
                  closer to users, we can achieve lower latency and better performance across global audiences.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border-l-4 border-purple-800">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-purple-800">
                  3. AI-Powered Development Tools
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Artificial intelligence is transforming the development process itself. From code completion to
                  automated testing, AI tools are helping developers write better code faster than ever before.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 relative">
              <span className="bg-gradient-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent">
                Looking Ahead
              </span>
              <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-purple-800 to-purple-600 rounded-full"></div>
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The future of web development is bright, with new technologies and methodologies emerging regularly.
              Staying informed and adaptable will be key to success in this ever-evolving field.
            </p>
          </div>
        </div>

        {/* Tags Section */}
        <footer className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Tag className="h-5 w-5 text-purple-800" />
              <span className="text-lg font-bold text-gray-900">Tags:</span>
            </div>

            <div className="flex gap-3 flex-wrap">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gradient-to-r from-purple-800 to-purple-700 hover:from-purple-900 hover:to-purple-800 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </footer>
      </article>
    </div>
  )
}

export default BlogPosts