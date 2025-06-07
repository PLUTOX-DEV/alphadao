// src/components/Dashboard.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from "../component/Header";
import Footer from "../component/footer"; 
import logo from '../../public/bg-sign-in-basic.jpeg';

interface Service {
  title: string;
  description: string;
  icon: string;
  link: string;
}

interface DashboardProps {
  user: { name: string; email: string };
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const services: Service[] = [
    {
      title: 'Demo Trading',
      description: 'Practice trading with our demo account.',
      icon: 'https://via.placeholder.com/50',
      link: '#',
    },
    {
      title: 'MiniApp',
      description: 'Access our mini applications for various tasks.(coming soon)',
      icon: 'https://via.placeholder.com/50',
      link: '#',
    },
    {
      title: 'AI Tools',
      description: 'Utilize AI tools for enhanced productivity.',
      icon: 'https://via.placeholder.com/50',
      link: '#',
    },
    {
      title: 'Community Forum',
      description: 'Join discussions and connect with other users.',
      icon: 'https://via.placeholder.com/50',
      link: '#',
    },
    {
      title: 'Analytics Dashboard',
      description: 'View your trading analytics and performance.',
      icon: 'https://via.placeholder.com/50',
      link: '#',
    },
    {
      title: 'Support Center',
      description: 'Get help and support for any issues.',
      icon: 'https://via.placeholder.com/50',
      link: '#',
    },
  ];

  const handleLogout = () => {
    onLogout();
    navigate('/signin');
  };

  return (
    <div
      className="min-h-screen bg-gray-950 bg-opacity-90"
    style={{
      backgroundImage: `url(${logo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      }}
    >
      <Header isAuthenticated={true} onLogout={handleLogout} />
      <main className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Welcome, {user.name}!
        </h1>
        <p className="text-gray-600 mb-8">
          Explore your dashboard to access our services and manage your account.
        </p>
       {/* Services Access */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Access Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 text-center"
              >
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="w-12 h-12 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact-us"
              className="px-6 py-3 bg-gray-200 text-gray-900 font-semibold rounded-md hover:bg-gray-300 transition-colors duration-200"
            >
              Contact Support
            </Link>
            <Link
              to="/contactus"
              className="px-6 py-3 bg-gray-200 text-gray-900 font-semibold rounded-md hover:bg-gray-300 transition-colors duration-200"
            >
              Update Profile
            </Link>
            <button
              onClick={handleLogout}
              className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors duration-200"
            >
              Logout
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;