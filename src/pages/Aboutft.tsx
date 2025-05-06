// src/components/About.js
import React from 'react';
import Footer from '../component/Footer';
import { Link } from 'react-router-dom';
import logo from '../Daologo.png'; 

const About = () => {
  const teamMembers = [
    { name: '#', role: 'Founder & CEO', image: 'https://via.placeholder.com/150' },
    { name: '#', role: 'CTO', image: 'https://via.placeholder.com/150' },
    { name: '#', role: 'Lead Developer', image: 'https://via.placeholder.com/150' },
    { name: '#', role: 'Marketing Director', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div
      className="min-h-screen bg-gray-100"
      style={{
        backgroundImage: `url(${logo})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '100px 100px', // Adjust size for aesthetics
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundColor: 'rgba(243, 244, 246, 0.9)', // Light overlay to ensure readability
      }}
    >
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* About Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Alpha Trader's DAO</h1>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            At Alpha Trader's DAO, we are passionate about driving innovation through cutting-edge technology. Our mission is to empower businesses and individuals with solutions that transform the future. Founded in 2020, our team combines expertise in AI, blockchain, and software development to deliver unparalleled results.
          </p>
          <Link
            to="/contactus"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white shadow-md rounded-lg p-6"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;