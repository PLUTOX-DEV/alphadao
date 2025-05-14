// src/components/About.js
import Footer from '../component/footer';
import { Link } from 'react-router-dom';
import logo from '../assets/backgr/bg-about-us.jpg'; 

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
        
        backgroundSize: 'max', // Adjust size for aesthetics
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundColor: 'rgba(243, 244, 246, 0.9)', // Light overlay to ensure readability
      }}
    >
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* About Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-purple-300 mb-6 backdrop-blur-lg">ALPHA TRADERS DAO</h1>
          <p className="text-white  max-w-3xl mx-auto mb-8 backdrop-blur-xl bg-purple-900 rounded-2xl text-semibold backdrop-blur-2xl font-bold ">
            ALPHA DAO is a decentralized autonomous organization (DAO) designed to bring people together in a community-owned ecosystem where they collectively manage and grow a financial system powered by its members. By building on The Open Network (TON), ALPHA DAO taps into TON’s exceptional scalability, low fees, and deep integration with Telegram—a platform with over 900 million users. This enables us to create an accessible, engaging, and innovative experience for our community.
          </p>
          <Link
            to="/contactus"
            className="inline-block px-6 py-3 bg-purple-900 text-white font-semibold rounded-md hover:bg-purple-900 transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-purple-300 text-center mb-10 backdrop-blur-lg">Meet Our Team</h2>
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