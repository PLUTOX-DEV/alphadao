// src/pages/Aboutft.tsx
import Footer from '../component/footer';
import { Link } from 'react-router-dom';
import logo from '../../public/bg-about-us.jpg';
import React from 'react';
import Header from '../component/Header';

type TeamMember = {
  name: string;
  role: string;
  image: string;
  twitter?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: 'LEX ',
    role: 'Founder',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    twitter: 'Alexander0_0_7_',
  },
  {
    name: 'Npm',
    role: 'CTO',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    twitter: 'bobsmith',
  },
  {
    name: 'L3VI 🧧𝕏 l3viticus',
    role: 'Community Manager',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    twitter: 'toney_levi',
  },
  {
    name: 'Justin',
    role: 'Project Manager',
    image: 'https://x.com/mrjustinn/photo',
    twitter: 'mrjustinn',
  },
];

const About = () => (
  <div
    className="min-h-screen bg-gray-900 bg-opacity-90"
    style={{
      backgroundImage: `linear-gradient(rgba(30, 27, 75, 0.7), rgba(30, 27, 75, 0.7)), url(${logo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }}
  >
    <div className='position:fixed border-b-1 border-gray-500 bg-gray-950'><Header /></div>
    <main className="container mx-auto px-4 py-16">
      {/* About Section */}
      <section className="text-center mb-20">
        
        <p className="text-lg text-purple-100 mx-auto mb-8 bg-gray-900 bg-opacity-60 rounded-xl p-6 font-medium shadow-lg">
          Alpha DAO is a decentralized autonomous organization (DAO) designed to bring people together in a community-owned ecosystem. By building on The Open Network (TON), Alpha DAO leverages exceptional scalability, low fees, and deep Telegram integration, creating an accessible, engaging, and innovative experience for our community.
        </p>
        <Link
          to="/contactus"
          className="inline-block px-8 py-3 bg-purple-950 text-white font-bold rounded-lg shadow-lg hover:from-purple-700 hover:to-indigo-700 transition"
        >
          Get in Touch
        </Link>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-400 font-serif text-center mb-12 border-b-4 border-purple-900 drop-shadow">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center bg-gray-900 bg-opacity-90 shadow-xl rounded-2xl p-8 hover:scale-105 transition-transform"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 rounded-full mb-4 object-cover border-4 border-white shadow"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-purple-700 font-medium mb-2">{member.role}</p>
              {member.twitter && (
                <a
                  href={`https://twitter.com/${member.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 flex items-center gap-1"
                  aria-label={`Follow ${member.name} on Twitter`}
                >
                  <svg width="20" height="20" fill="currentColor" className="inline-block" viewBox="0 0 24 24">
                    <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3.1a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616 2c-2.73 0-4.942 2.21-4.942 4.932 0 .386.045.763.127 1.124C7.728 7.89 4.1 6.13 1.671 3.149a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.237-.616v.062c0 2.385 1.693 4.374 3.946 4.827a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/>
                  </svg>
                  <span>@{member.twitter}</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default About;