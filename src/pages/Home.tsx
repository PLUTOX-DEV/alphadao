import { Link } from "react-router-dom";
import Header from "../component/Header";
import Hero from "../component/Hero";
import { Roadmap } from "../component/Roadmap";
// import { FloatingPaper } from "../ui/floatingpaper"
import Footer from "../component/footer"; 
import teamImg from "../assets/teamp.png";
import { FAQItem } from "../component/f&q";
import freq from "../assets/super-about.jpg";

// import { useEffect } from "react";


// import { SparklesCore } from "../ui/sparkles"



export default function Home() {
  return (
    

    // <div className=" min-h-[calc(100vh-76px)] items-center">
    // {/* Background elements */}
    // {/* <div className="absolute inset-0 z-0 max-w-screen"> */}
    //   {/* <SparklesCore
    //     id="tsparticlesfullpage"
    //     background="transparent"
    //     minSize={0.6}
    //     maxSize={1.4}
    //     particleDensity={100}
    //     className=""
    //     particleColor="#ce2dcb"
    //   /> */}
    //   <div className="absolute inset-0 overflow-hidden">
    //     <FloatingPaper count={12} />
    //   </div>
     
    // {/* </div> */}
  
    
    <div className="relative z-10 w-full flex flex-col min-h-screen bg-gray-950 text-gray-300 font-[Georgia]">

      <Header/>
      <Hero/>
      {/* Key Features Section */}
      <section
        className="py-12 px-2 md:px-8 bg-gray-950 font-[Georgia] text-gray-300"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-purple-300">Our Key Features</h2>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-center">
          <div className="bg-gradient-to-br from-purple-800/90 to-purple-950/80 p-4 md:p-8 rounded-2xl w-full max-w-xs md:w-72 flex flex-col items-center shadow-lg border border-purple-900/40 transition-transform hover:scale-105 duration-200">
        <span className="text-4xl mb-3">📚</span>
        <h3 className="text-xl font-bold mb-2">Learn</h3>
        <p className="text-gray-300 text-base text-center">
          Access educational resources and community discussions to deepen your understanding of decentralized finance and blockchain technology.
        </p>
          </div>
          <div className="bg-gradient-to-br from-purple-800/90 to-purple-950/80 p-4 md:p-8 rounded-2xl w-full max-w-xs md:w-72 flex flex-col items-center shadow-lg border border-purple-900/40 transition-transform hover:scale-105 duration-200">
        <span className="text-4xl mb-3">🏛️</span>
        <h3 className="text-xl font-bold mb-2">Decide</h3>
        <p className="text-gray-300 text-base text-center">
          Engage in governance by voting on proposals, influencing the direction and development of the Alpha DAO ecosystem.
        </p>
          </div>
          <div className="bg-gradient-to-br from-purple-800/90 to-purple-950/80 p-4 md:p-8 rounded-2xl w-full max-w-xs md:w-72 flex flex-col items-center shadow-lg border border-purple-900/40 transition-transform hover:scale-105 duration-200">
        <span className="text-4xl mb-3">💰</span>
        <h3 className="text-xl font-bold mb-2">Earn</h3>
        <p className="text-gray-300 text-base text-center">
          Participate in staking, trading, and investing opportunities to earn rewards and contribute to the growth of the DAO.
        </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="mt-8 bg-gradient-to-r from-purple-700 to-purple-950 hover:from-purple-800 hover:to-purple-900 text-gray-100 px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-200">
        <a href="public/ALPHA DAO Whitepaper.pdf">Read Our White Paper</a>
          </button>
        </div>
      </section>
   
    {/* About Section */}
    <section className="py-12 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 bg-gray-950 font-[Georgia] text-gray-300 rounded-2xl mx-2 md:mx-8 shadow-lg border border-gray-800 transition-all">
      <div className="flex-1 mb-8 md:mb-0 md:mr-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-300 ">About ALPHA DAO</h2>
        <p className="mb-6 text-base md:text-lg leading-relaxed text-gray-300">
          Empowering the People, Driving Innovation <br />
          <span className="text-gray-400">
            ALPHA DAO is a decentralized autonomous organization (DAO) on The Open Network (TON), designed to give power back to the people. Our mission is to create a transparent, educational, and financially rewarding platform where everyone—from beginner to pro—can learn, invest, and grow together.
          </span>
        </p>
        <Link
          to="/about"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-700 to-purple-950 hover:from-purple-800 hover:to-purple-900 text-white px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-200"
        >
          Learn More About Us
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="w-56 h-56 md:w-64 md:h-64 bg-gradient-to-br from-purple-900/60 to-gray-800/80 rounded-xl shadow-lg flex items-center justify-center overflow-hidden border border-gray-700">
          <img
            src={teamImg}
            alt="ALPHA DAO Team"
            className="object-cover w-full h-full rounded-xl transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
     
    </section>
    {/* Roadmap Section */}
    <Roadmap/>
    {/* Team Section */}
      <section className="py-12 px-4 md:px-12 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 rounded-2xl mx-2 md:mx-8 shadow-lg border border-gray-800 transition-all mt-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-purple-300">Meet the Alpha DAO Team</h2>
        <p className="mb-2 text-center text-gray-300">A global, remote team building the future of Alpha DAO — one block at a time.</p>
        <p className="mb-8 text-center text-gray-400 text-sm">Committed to building the ecosystem</p>
        <div className="relative">
          {/* Arrow left */}
          <button
            type="button"
            aria-label="Scroll left"
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-purple-800/80 text-purple-300 rounded-full p-2 shadow-lg transition-all"
            onClick={() => {
              const el = document.getElementById("team-scroll");
              if (el) el.scrollBy({ left: -el.offsetWidth / 1.1, behavior: "smooth" });
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {/* Arrow right */}
          <button
            type="button"
            aria-label="Scroll right"
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-purple-800/80 text-purple-300 rounded-full p-2 shadow-lg transition-all"
            onClick={() => {
              const el = document.getElementById("team-scroll");
              if (el) el.scrollBy({ left: el.offsetWidth / 1.1, behavior: "smooth" });
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div
            id="team-scroll"
            className="flex flex-row gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory sm:px-8 py-2"
            style={{ scrollbarWidth: "none" } as React.CSSProperties}
          >
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-purple-800/80 to-gray-900/80 border border-purple-900/40 rounded-xl shadow-lg min-w-[90vw] sm:min-w-[18rem] max-w-xs flex flex-col items-center p-6 transition-transform hover:scale-105 duration-200 snap-center"
              >
                <div className="w-70 h-40 rounded-xl bg-gray-700 mb-4 flex items-center justify-center overflow-hidden">
                  <span className="text-4xl text-purple-300">👤</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-100 mb-1">Name</h3>
                <p className="text-purple-300 text-sm mb-2">Position</p>
                <p className="text-gray-400 text-xs text-center">Short bio or expertise goes here.</p>
                <div className="mt-4">
                  <button className="bg-gradient-to-r from-purple-700 to-purple-950 text-white py-1 px-4 rounded-lg hover:bg-purple-700 transition duration-200">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-12 px-4 md:px-12 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 rounded-2xl mx-2 md:mx-8 shadow-lg border border-gray-800 mt-8 flex flex-col md:flex-row gap-10 items-center">
        {/* FAQ List */}
        <div className="flex-1 max-w-2xl space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left text-purple-300">Frequently Asked Questions</h2>
          <p className="mb-8 text-left text-gray-400">Find answers to common questions about Alpha DAO</p>
          {[
        {
          q: "What is Alpha DAO?",
          a: "Alpha DAO is a decentralized autonomous organization on The Open Network (TON), empowering users to learn, invest, and participate in governance."
        },
        {
          q: "How can I participate in governance?",
          a: "You can participate by voting on proposals and engaging in community discussions. Connect your wallet and join our platform to get started."
        },
        {
          q: "Is there a way to earn rewards?",
          a: "Yes! You can earn rewards through staking, trading, and contributing to the DAO ecosystem."
        },
        {
          q: "Where can I find more resources?",
          a: "Check our documentation, join our community, or read our whitepaper for more information."
        }
          ].map((item, idx) => (
        <FAQItem key={idx} question={item.q} answer={item.a} />
          ))}
          <div className="flex flex-col md:flex-row items-center justify-start gap-4 mt-10">
        <a
          href="https://t.me/yourcommunity"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-purple-700 to-purple-950 hover:from-purple-800 hover:to-purple-900 text-white px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-200"
        >
          Join Our Community
        </a>
        <a
          href="/public/ALPHA DAO Whitepaper.pdf"
          className="bg-gray-800 hover:bg-purple-800 text-purple-300 px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-200"
        >
          Read Whitepaper
        </a>
          </div>
        </div>
        {/* Responsive Image */}
        <div className="flex-1 flex justify-center items-center w-full md:w-auto">
          <img
        src={freq}
        alt="Alpha DAO Illustration"
        className="w-full max-w-xs md:max-w-sm rounded-xl shadow-lg object-cover"
        loading="lazy"
          />
        </div>
      </section>

    
    <Footer/>
  </div>

  )
}
