import axios from 'axios';
import { useState, useEffect } from 'react';

interface UserProfile {
    name?: string;
    email?: string;
    role?: string;
    avatar?: string;
    username?: string;
    about?: string;
    phone?: string;
    location?: string;
    lastActive?: string;
    brand?: string;
}

const mockProfile: UserProfile = {
    name: 'Jane Doe',
    email: 'jane@example.com',
    role: 'Developer',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    username: 'janedoe',
    about: 'Passionate developer with a love for TypeScript and React.',
    phone: '+1234567890',
    location: 'New York, USA',
    lastActive: '2024-06-10T14:30:00Z',
    brand: 'Jane Dev Studio',
};

function formatLastActive(dateStr?: string) {
    if (!dateStr) return 'Unknown';
    const date = new Date(dateStr);
    return `Last active: ${date.toLocaleString()}`;
}

// Dummy components for demonstration
const ProfileSettings = () => (
    <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Profile Settings</h2>
        <p className="text-gray-700">Settings form goes here.</p>
    </div>
);

const MyBlogPosts = () => (
    <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">My Blog Posts</h2>
        <p className="text-gray-700">Blog posts list goes here.</p>
    </div>
);

const ProfileDashboard = ({
    userData,
    mockProfile,
}: {
    userData: UserProfile | undefined;
    mockProfile: UserProfile;
}) => (
    <>
        <div className="w-full max-w-3xl bg-white/90 rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row gap-8 border border-purple-100">
            <div className="flex flex-col items-center md:w-1/3">
                <div className="relative">
                    <img
                        src={userData?.avatar || mockProfile.avatar}
                        alt="User avatar"
                        className="rounded-full h-36 w-36 border-4 border-purple-300 shadow-lg object-cover"
                    />
                    <span className="absolute bottom-2 right-2 bg-green-400 border-2 border-white rounded-full h-5 w-5 block"></span>
                </div>
                <span className="text-xl font-bold text-purple-900 mt-3" aria-label="Username">
                    @{userData?.username || mockProfile.username}
                </span>
                <span className="text-sm text-purple-600 font-medium">{userData?.role || mockProfile.role}</span>
                <span className="text-xs text-green-700 mt-1" aria-live="polite">
                    {userData?.lastActive
                        ? formatLastActive(userData.lastActive)
                        : formatLastActive(mockProfile.lastActive)}
                </span>
            </div>
            <div className="flex-1 flex flex-col gap-3 justify-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">{userData?.name || mockProfile.name}</h2>
                <p className="text-gray-700 mb-2 italic">{userData?.about || mockProfile.about}</p>
                <div className="flex flex-col gap-2 text-sm">
                    <span>
                        <strong className="text-purple-700">Email:</strong>{' '}
                        <a
                            href={`mailto:${userData?.email || mockProfile.email}`}
                            className="text-purple-700 underline hover:text-purple-900"
                        >
                            {userData?.email || mockProfile.email}
                        </a>
                    </span>
                    <span>
                        <strong className="text-purple-700">Phone:</strong> {userData?.phone || mockProfile.phone}
                    </span>
                    <span>
                        <strong className="text-purple-700">Location:</strong> {userData?.location || mockProfile.location}
                    </span>
                    <span>
                        <strong className="text-purple-700">Brand:</strong> {userData?.brand || mockProfile.brand}
                    </span>
                </div>
            </div>
        </div>
        <div className="w-full max-w-3xl mt-8">
            <input
                type="search"
                placeholder="Search profile or content..."
                className="w-full p-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white shadow"
                aria-label="Search profile"
            />
        </div>
    </>
);

const Profile = () => {
    const [userData, setUserData] = useState<UserProfile | undefined>(undefined);
    const [activeTab, setActiveTab] = useState<'dashboard' | 'settings' | 'blog'>('dashboard');

    useEffect(() => {
        // Optionally, fetch profile on mount
        // getProfileData();
    }, []);

    const getProfileData = () => {
        const tokenString = localStorage.getItem('token');
        if (!tokenString) {
            alert('You are not logged in');
            return;
        }
        const token = JSON.parse(tokenString);

        axios
            .get('https://api.escuelajs.co/api/v1/auth/profile', {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
                setUserData({ ...mockProfile, ...res.data }); // Merge mock for missing fields
            })
            .catch(() => {
                alert('You are not logged in');
            });
    };

    const handleLogout = () => {
        setUserData(undefined);
        localStorage.removeItem('token');
        alert('Log out success');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-200 flex flex-col items-center p-4">
            <nav className="w-full max-w-3xl flex justify-between items-center mb-8">
                <h1 className="text-3xl font-extrabold text-purple-900 tracking-tight drop-shadow-lg" aria-label="Profile Dashboard">
                    <span className="inline-block align-middle mr-2">
                        <svg className="w-8 h-8 text-purple-700 inline" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
                    Profile Dashboard
                </h1>
                <div>
                    <button
                        className="bg-purple-700 hover:bg-purple-800 rounded-full px-4 py-2 shadow-md transition-all text-white font-semibold mr-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        onClick={getProfileData}
                    >
                        Get Profile Data
                    </button>
                    <button
                        className="bg-white hover:bg-purple-50 border border-purple-700 rounded-full px-4 py-2 shadow-md transition-all text-purple-700 font-semibold focus:outline-none focus:ring-2 focus:ring-purple-400"
                        onClick={handleLogout}
                    >
                        Log Out
                    </button>
                </div>
            </nav>

            {/* Tabs */}
            <div className="w-full max-w-3xl mb-6">
                <div className="flex border-b border-purple-200">
                    <button
                        className={`flex-1 py-3 text-lg font-semibold transition-colors ${
                            activeTab === 'dashboard'
                                ? 'border-b-4 border-purple-700 text-purple-900 bg-purple-100'
                                : 'text-purple-600 hover:bg-purple-50'
                        }`}
                        onClick={() => setActiveTab('dashboard')}
                    >
                        Dashboard
                    </button>
                    <button
                        className={`flex-1 py-3 text-lg font-semibold transition-colors ${
                            activeTab === 'settings'
                                ? 'border-b-4 border-purple-700 text-purple-900 bg-purple-100'
                                : 'text-purple-600 hover:bg-purple-50'
                        }`}
                        onClick={() => setActiveTab('settings')}
                    >
                        Profile Settings
                    </button>
                    <button
                        className={`flex-1 py-3 text-lg font-semibold transition-colors ${
                            activeTab === 'blog'
                                ? 'border-b-4 border-purple-700 text-purple-900 bg-purple-100'
                                : 'text-purple-600 hover:bg-purple-50'
                        }`}
                        onClick={() => setActiveTab('blog')}
                    >
                        My Blog Posts
                    </button>
                </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'dashboard' && (
                <ProfileDashboard userData={userData} mockProfile={mockProfile} />
            )}
            {activeTab === 'settings' && <ProfileSettings />}
            {activeTab === 'blog' && <MyBlogPosts />}

           
        </div>
    );
};

export default Profile;