import { useState } from "react";

const Blogs = ({ posts }) => {
  const postsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the current page's posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <section id="blog" className="p-8 text-white bg-black/90">
      <h2 className="text-4xl font-bold text-purple-300 mb-8">DAO Blog</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {currentPosts.map((post, index) => (
          <a
            key={index}
            href={post.slug}
            className="bg-white/5 rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-purple-200">{post.title}</h3>
            </div>
          </a>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="bg-purple-600 text-white px-4 py-2 rounded disabled:opacity-40"
          >
            ← Previous
          </button>
          <span className="text-purple-300">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="bg-purple-600 text-white px-4 py-2 rounded disabled:opacity-40"
          >
            Next →
          </button>
        </div>
      )}
    </section>
  );
};

export default Blogs;