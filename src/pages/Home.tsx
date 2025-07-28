import { Link } from "react-router-dom";
import Header from "../component/Header";
import Hero from "../component/Hero";
import { Roadmap } from "../component/Roadmap";
import Footer from "../component/footer";
import teamImg from "../assets/teamp.png";
import { FAQItem } from "../component/f&q";
import freq from "../assets/super-about.jpg";
import lex from '../assets/lex (2).jpg';
import npmImg from '../assets/npm.jpg';
import levi from '../assets/levi.jpg';
import fola from '../assets/fola.jpg';
import pro from '../assets/mr. professional.jpg';
import marv from '../assets/bigmarv.jpg';

const teamMembers = [
  {
    name: 'LEX',
    role: 'Founder',
    image: lex,
    twitter: 'ALPHADAO101',
  },
  {
    name: 'Npm',
    role: 'CTO',
    image: npmImg,
    twitter: '2xQuant',
  },
  {
    name: 'L3VI 🧧𝕏 l3viticus',
    role: 'Community Manager',
    image: levi,
    twitter: 'toney_levi',
  },
  {
    name: 'Feraragotta',
    role: 'Project Manager',
    image: fola,
    twitter: 'GotaHarmony',
  },
  {
    name: 'Mr. Professional',
    role: 'CMO',
    image: pro,
    twitter: 'sales_unwana',
  },
  {
    name: 'Big Marv',
    role: 'CFO',
    image: marv,
    twitter: 'JustcallMarv',
  },
];


export default function Home() {
  return (
    <div className="relative z-10 w-full flex flex-col min-h-screen bg-gray-950 text-gray-300 font-[Georgia]">
      <Header />
      <Hero />
      <section className="py-12 px-2 md:px-8 bg-gray-950 font-[Georgia] text-gray-300">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-purple-300">Our Key Features</h2>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-center">
          {[{
            icon: '📚', title: 'Learn', desc: 'Access educational resources and community discussions to deepen your understanding of decentralized finance and blockchain technology.'
          }, {
            icon: '🏛️', title: 'Decide', desc: 'Engage in governance by voting on proposals, influencing the direction and development of the Alpha DAO ecosystem.'
          }, {
            icon: '💰', title: 'Earn', desc: 'Participate in staking, trading, and investing opportunities to earn rewards and contribute to the growth of the DAO.'
          }].map((item, idx) => (
            <div key={idx} className="bg-gradient-to-br from-purple-800/90 to-purple-950/80 p-4 md:p-8 rounded-2xl w-full max-w-xs md:w-72 flex flex-col items-center shadow-lg border border-purple-900/40 transition-transform hover:scale-105 duration-200">
              <span className="text-4xl mb-3">{item.icon}</span>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-base text-center">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="mt-8 bg-gradient-to-r from-purple-700 to-purple-950 hover:from-purple-800 hover:to-purple-900 text-gray-100 px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-200">
            <a href="/ALPHA DAO Whitepaper.pdf" target="_blank" rel="noopener noreferrer">Read Our White Paper</a>
          </button>
        </div>
      </section>
      <section className="py-12 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 bg-gray-950 font-[Georgia] text-gray-300 rounded-2xl mx-2 md:mx-8 shadow-lg border border-gray-800 transition-all">
        <div className="flex-1 mb-8 md:mb-0 md:mr-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-300">About ALPHA DAO</h2>
          <p className="mb-6 text-base md:text-lg leading-relaxed text-gray-300">
            Empowering the People, Driving Innovation <br />
            <span className="text-gray-400">
              ALPHA DAO is a decentralized autonomous organization (DAO) on The Open Network (TON), designed to give power back to the people. Our mission is to create a transparent, educational, and financially rewarding platform where everyone—from beginner to pro—can learn, invest, and grow together.
            </span>
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-700 to-purple-950 hover:from-purple-800 hover:to-purple-900 text-white px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-200">
            Learn More About Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-56 h-56 md:w-64 md:h-64 bg-gradient-to-br from-purple-900/60 to-gray-800/80 rounded-xl shadow-lg flex items-center justify-center overflow-hidden border border-gray-700">
            <img src={teamImg} alt="ALPHA DAO Team" className="object-cover w-full h-full rounded-xl transition-transform duration-300 hover:scale-105" loading="lazy" />
          </div>
        </div>
      </section>
      <Roadmap />
      <section className="py-12 px-4 md:px-12">
        <h2 className="text-3xl font-bold text-white font-serif text-center mb-12 border-b-4 border-purple-900 drop-shadow">Meet Our Team Leads</h2>
        <div className="relative" style={{ WebkitOverflowScrolling: "touch" }}>
          <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-purple-800 scrollbar-track-gray-800 snap-x snap-mandatory">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex-shrink-0 w-72 bg-gradient-to-br from-gray-900/90 to-purple-950/80 shadow-2xl rounded-2xl p-8 mx-2 hover:scale-105 hover:shadow-purple-800/40 transition-transform duration-300 snap-center group">
                <div className="relative mb-4">
                  <img src={member.image} alt={member.name} className="w-28 h-28 rounded-full object-cover border-4 border-purple-700 shadow-lg mx-auto group-hover:ring-4 group-hover:ring-purple-500 transition-all duration-300" />
                  <div className="absolute bottom-0 right-0 bg-purple-700 rounded-full p-1 shadow-lg animate-pulse"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1 text-center">{member.name}</h3>
                <p className="text-purple-400 font-medium mb-2 text-center">{member.role}</p>
                {member.twitter && (
                  <a href={`https://twitter.com/${member.twitter}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 flex items-center gap-1 justify-center transition-colors duration-200" aria-label={`Follow ${member.name} on Twitter`}>
                    <svg width="20" height="20" fill="currentColor" className="inline-block" viewBox="0 0 24 24">
                      <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3.1a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616 2c-2.73 0-4.942 2.21-4.942 4.932 0 .386.045.763.127 1.124C7.728 7.89 4.1 6.13 1.671 3.149a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.237-.616v.062c0 2.385 1.693 4.374 3.946 4.827a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z" />
                    </svg>
                    <span>connect</span>
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-gray-950 via-gray-950/80 to-transparent" />
        </div>
        <p className="text-center text-gray-500 mt-4 text-sm">Scroll sideways to see all team members</p>
      </section>
      <section className="py-12 px-4 md:px-12 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 rounded-2xl mx-2 md:mx-8 shadow-lg border border-gray-800 mt-8 flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1 max-w-2xl space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left text-purple-300">Frequently Asked Questions</h2>
          <p className="mb-8 text-left text-gray-400">Find answers to common questions about Alpha DAO</p>
          {[{
            q: "What is Alpha DAO?",
            a: "Alpha DAO is a decentralized autonomous organization on The Open Network (TON), empowering users to learn, invest, and participate in governance."
          }, {
            q: "How can I participate in governance?",
            a: "You can participate by voting on proposals and engaging in community discussions. Connect your wallet and join our platform to get started."
          }, {
            q: "Is there a way to earn rewards?",
            a: "Yes! You can earn rewards through staking, trading, and contributing to the DAO ecosystem."
          }, {
            q: "Where can I find more resources?",
            a: "Check our documentation, join our community, or read our whitepaper for more information."
          }].map((item, idx) => (
            <FAQItem key={idx} question={item.q} answer={item.a} />
          ))}
          <div className="flex flex-col md:flex-row items-center justify-start gap-4 mt-10">
            <a href="https://t.co/OQ2Jlv2MHl" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-700 to-purple-950 hover:from-purple-800 hover:to-purple-900 text-white px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-200">Join Our Community</a>
            <a href="/ALPHA DAO Whitepaper.pdf" className="bg-gray-800 hover:bg-purple-800 text-purple-300 px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-200">Read Whitepaper</a>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center w-full md:w-auto">
          <img src={freq} alt="Alpha DAO Illustration" className="w-full max-w-xs md:max-w-sm rounded-xl shadow-lg object-cover" loading="lazy" />
        </div>
      </section>
      <Footer />
    </div>
  );
}
 