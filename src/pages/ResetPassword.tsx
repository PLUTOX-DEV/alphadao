// src/components/SignUp.tsx
import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/bg-sign-in-basic.jpeg';
import { FcGoogle } from 'react-icons/fc';
import { FaWallet } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  password: string;
}

interface SignUpProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ isAuthenticated, onLogout }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmailSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (error) {
      alert('Sign-up failed');
    }
  };

  const handleGoogleSignUp = () => {
    alert('Google Sign-Up not implemented');
  };

  const handleWalletSignUp = () => {
    alert('Wallet Sign-Up not implemented');
  };

  if (isAuthenticated) {
    return navigate('/dashboard');
  }

  return (
    <div
      className="min-h-screen bg-gray-100"
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: 'max',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundColor: 'rgba(243, 244, 246, 0.9)', // purple-950 with slight transparency
      }}
    >
      {/* Header with Logo and Brand Name */}
      <header className="bg-gray-950 py-4 shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <img src={logo} alt="DOA Labs Logo" className="h-10 mr-2" />
          <h1 className="text-2xl font-bold text-white">DOA Labs</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 flex-grow flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-950 text-center mb-6">
            Sign Up for DOA Labs
          </h2>
          <button
            onClick={handleGoogleSignUp}
            className="w-full flex items-center justify-center px-4 py-3 mb-4 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <FcGoogle className="text-2xl mr-2" />
            <span className="text-gray-700 font-semibold">Sign up with Google</span>
          </button>
          <button
            onClick={handleWalletSignUp}
            className="w-full flex items-center justify-center px-4 py-3 mb-6 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <FaWallet className="text-2xl mr-2 text-purple-950" />
            <span className="text-white font-semibold">Sign up with Wallet</span>
          </button>
          <div className="relative my-6">
            <hr className="border-gray-300" />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-gray-500">
              OR
            </span>
          </div>
          <form onSubmit={handleEmailSignUp}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-950 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-950"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-950 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-950"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-white font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-950"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-purple-950 text-white font-semibold rounded-md hover:bg-purple-900"
            >
              Sign Up with Email
            </button>
          </form>
          <div className="mt-4 text-center text-sm text-gray-600">
            <p>
              Already have an account?{' '}
              <Link to="/signin" className="text-purple-950 hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;