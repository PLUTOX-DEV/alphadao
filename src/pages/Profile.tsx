import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
<<<<<<< Updated upstream
import Header from '../components/Header';
import Footer from '../components/Footer';
=======
import Header from '../component/Header';
import Footer from '../component/footer';
>>>>>>> Stashed changes

interface Post {
  id: number;
  title: string;
  status: 'Published' | 'Draft' | 'Pending';
  date: string;
  content: string;
}

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [name, setName] = useState('Username');
  const [username, setUsername] = useState('user123');
  const [avatar, setAvatar] = useState<string | null>(null);
  const [password, setPassword] = useState('');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  // Sample posts data
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, title: 'The Future of Decentralized Finance', status: 'Published', date: 'June 15, 2025', content: 'Explore how Alpha DAO is revolutionizing finance...' },
    { id: 2, title: 'Getting Started with Alpha DAO', status: 'Draft', date: 'June 10, 2025', content: 'A beginner\'s guide to joining the Alpha DAO community...' },
    { id: 3, title: 'Alpha DAO Updates', status: 'Pending', date: 'June 20, 2025', content: 'Latest updates and community-driven initiatives...' },
  ]);

  // Handle avatar upload
  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setAvatar(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission (simulated)
  const handleSaveSettings = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Saved:', { name, username, password, avatar });
    // Add API call here to save changes
  };

  // Handle post deletion
  const handleDeletePost = (id: number) => {
    setPosts(posts.filter(post => post.id !== id));
    if (selectedPost?.id === id) setSelectedPost(null);
  };

  // Handle post edit (navigate to edit page)
  const handleEditPost = (id: number) => {
    navigate(`/edit-post/${id}`);
  };

  return (
<<<<<<< Updated upstream
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header/>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
=======
    <div className="bg-gray-900 text-white min-h-screen font-[Georgia]">
      <Header />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 mt-12">
>>>>>>> Stashed changes
        <h1 className="text-4xl font-bold text-purple-400 mb-8">Profile</h1>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6 border-b border-gray-700">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`pb-2 px-4 ${activeTab === 'dashboard' ? 'border-b-2 border-purple-400 text-purple-400' : 'text-gray-400 hover:text-white'}`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`pb-2 px-4 ${activeTab === 'settings' ? 'border-b-2 border-purple-400 text-purple-400' : 'text-gray-400 hover:text-white'}`}
          >
            Profile Settings
          </button>
          <button
            onClick={() => setActiveTab('posts')}
            className={`pb-2 px-4 ${activeTab === 'posts' ? 'border-b-2 border-purple-400 text-purple-400' : 'text-gray-400 hover:text-white'}`}
          >
            My Posts
          </button>
        </div>

        {/* Tab Content with Smooth Transition */}
        <div className="transition-opacity duration-300">
          {activeTab === 'dashboard' && (
            <div className="bg-gray-800 p-6 rounded-lg flex flex-col lg:flex-row items-center lg:items-start">
              {/* Profile Info */}
              <div className="w-full lg:w-1/3 mb-6 lg:mb-0 text-center lg:text-left">
                <div className="w-32 h-32 mx-auto lg:mx-0 rounded-full overflow-hidden bg-gray-700">
                  {avatar ? (
                    <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">No Avatar</div>
                  )}
                </div>
                <h2 className="text-2xl font-bold mt-4">{name}</h2>
                <p className="text-gray-400">@{username} | Joined: July 01, 2025</p>
                <button
                  onClick={() => setActiveTab('settings')}
<<<<<<< Updated upstream
                  className="mt-4 w-full lg:w-auto bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition duration-300"
=======
                  className="mt-4 w-full lg:w-auto bg-gradient-to-r from-purple-700 to-purple-950 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition duration-300"
>>>>>>> Stashed changes
                >
                  Edit Profile
                </button>
              </div>

              {/* Dashboard */}
              <div className="w-full lg:w-2/3 lg:pl-8">
                <h3 className="text-xl font-bold mb-4">Dashboard</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <p className="font-bold">Tokens</p>
                    <p>150 ALPHA</p>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <p className="font-bold">Staked</p>
                    <p>100 ALPHA</p>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <p className="font-bold">Votes</p>
                    <p>5</p>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <p className="font-bold">Rewards</p>
                    <p>25 ALPHA</p>
                  </div>
                </div>
                <button
                  onClick={() => navigate('/transactions')}
<<<<<<< Updated upstream
                  className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition duration-300"
=======
                  className="mt-6 bg-gradient-to-r from-purple-700 to-purple-950 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition duration-300"
>>>>>>> Stashed changes
                >
                  View Transaction History
                </button>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Profile Settings</h2>
              <form onSubmit={handleSaveSettings} className="space-y-4">
                {/* Avatar Upload */}
                <div>
                  <label className="block text-gray-400 mb-2">Profile Avatar</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarUpload}
                    className="block w-full text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700"
                  />
                </div>

                {/* Name */}
                <div>
                  <label className="block text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 bg-gray-700 rounded-lg text-white"
                  />
                </div>

                {/* Username */}
                <div>
                  <label className="block text-gray-400 mb-2">Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 bg-gray-700 rounded-lg text-white"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-gray-400 mb-2">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 bg-gray-700 rounded-lg text-white"
                  />
                </div>

                <button
                  type="submit"
<<<<<<< Updated upstream
                  className="w-full bg-purple-950 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition duration-300"
=======
                  className="w-full bg-gradient-to-r from-purple-700 to-purple-950 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition duration-300"
>>>>>>> Stashed changes
                >
                  Save Changes
                </button>
              </form>
            </div>
          )}

          {activeTab === 'posts' && (
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">My Posts</h2>
              <div className="space-y-4">
                {['Published', 'Draft', 'Pending'].map((status) => (
                  <div key={status} className="bg-gray-700 p-4 rounded-lg">
                    <h3 className="font-bold">{status} Posts</h3>
                    {posts
                      .filter(post => post.status === status)
                      .map(post => (
                        <div key={post.id} className="mt-2 p-2 bg-gray-800 rounded-lg flex justify-between items-center">
                          <div>
                            <p className="font-semibold">{post.title}</p>
                            <p className="text-gray-400 text-sm">{post.date}</p>
                          </div>
                          <div className="space-x-2">
                            <button
                              onClick={() => handleEditPost(post.id)}
                              className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-full text-sm transition duration-300"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeletePost(post.id)}
                              className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded-full text-sm transition duration-300"
                            >
                              Delete
                            </button>
                            <button
                              onClick={() => setSelectedPost(post)}
                              className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded-full text-sm transition duration-300"
                            >
                              Preview
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate('/create-post')}
<<<<<<< Updated upstream
                className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition duration-300"
=======
                className="mt-6 bg-gradient-to-r from-purple-700 to-purple-950 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition duration-300"
>>>>>>> Stashed changes
              >
                Create New Post
              </button>

              {/* Preview Modal */}
              {selectedPost && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-gray-800 p-6 rounded-lg max-w-md w-full">
                    <h3 className="text-xl font-bold mb-2">{selectedPost.title}</h3>
                    <p className="text-gray-400 mb-2">{selectedPost.date} | {selectedPost.status}</p>
                    <p className="mb-4">{selectedPost.content}</p>
                    <button
                      onClick={() => setSelectedPost(null)}
<<<<<<< Updated upstream
                      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition duration-300"
=======
                      className="bg-gradient-to-r from-purple-700 to-purple-950 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition duration-300"
>>>>>>> Stashed changes
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Community Call-to-Action */}
        <div className="mt-12 text-center">
          <p className="text-lg mb-4">Have more questions?</p>
          <button
            onClick={() => navigate('/community')}
<<<<<<< Updated upstream
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition duration-300"
=======
            className="bg-gradient-to-r from-purple-700 to-purple-950 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition duration-300"
>>>>>>> Stashed changes
          >
            Join Our Community
          </button>
        </div>
      </div>
<<<<<<< Updated upstream
      <footer/>
    </div>
=======
      <Footer />
    </div>
    
>>>>>>> Stashed changes
  );
};

export default Profile;