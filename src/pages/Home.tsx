import { Link } from "react-router-dom";
import Header from "../component/Header";
import Hero from "../component/Hero";
import { Roadmap } from "../component/Roadmap";
import Footer from "../component/footer";
import AnimatedBackground from "../components/AnimatedBackground";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import teamImg from "../assets/teamp.png";
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
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);
  const sectionRef4 = useRef(null);
  
  const isInView1 = useInView(sectionRef1, { once: true, margin: "-100px" });
  const isInView2 = useInView(sectionRef2, { once: true, margin: "-100px" });
  const isInView3 = useInView(sectionRef3, { once: true, margin: "-100px" });
  const isInView4 = useInView(sectionRef4, { once: true, margin: "-100px" });

  return (
    <div className="relative w-full flex flex-col min-h-screen text-gray-300" style={{ scrollBehavior: 'smooth' }}>
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Header />
        <Hero />
        
        {/* What Is AlphaDAO Section */}
        <motion.section 
          ref={sectionRef1}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="py-20 px-4 md:px-8 relative bg-gray-900/50 backdrop-blur-sm"
        >
          <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                What Is AlphaDAO?
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              <span className="text-purple-400 font-semibold">The Three Pillars of AlphaDAO</span>
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView1 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {[
              {
                icon: "👥",
                title: "AlphaDAO Society",
                subtitle: "The Community",
                desc: "The living heartbeat of the ecosystem. A collective of learners, voters, builders, creators, and contributors.",
                gradient: "from-purple-600 to-purple-800"
              },
              {
                icon: "🎓",
                title: "AlphaDAO Bootcamp",
                subtitle: "Education",
                desc: "Our educational engine providing free Web3, trading, and governance education, awarding soulbound NFT certifications and Learn2Earn rewards.",
                gradient: "from-blue-600 to-purple-600"
              },
              {
                icon: "🔬",
                title: "AlphaDAO Labs",
                subtitle: "Development",
                desc: "Our innovation hub where ideas become real products such as mini-apps, tools, experiments, and future prediction markets.",
                gradient: "from-purple-600 to-purple-800"
              }
            ].map((pillar, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView1 ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.6 + (idx * 0.2), ease: "easeOut" }}
                className="group relative cursor-pointer" 
                onClick={() => window.open('/AlphaDAO_Whitepaper.pdf', '_blank')}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" style={{background: `linear-gradient(135deg, ${pillar.gradient.split(' ')[1]}, ${pillar.gradient.split(' ')[3]})`}}></div>
                <div className={`relative bg-gradient-to-br ${pillar.gradient} p-8 rounded-3xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25`}>
                  <div className="text-5xl mb-4 filter drop-shadow-lg">{pillar.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-purple-200 font-medium mb-3">{pillar.subtitle}</p>
                  <p className="text-gray-200 leading-relaxed">{pillar.desc}</p>
                  <div className="mt-4 text-center">
                    <span className="text-sm text-purple-200 opacity-75">Click to learn more →</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl px-8 py-4">
              <span className="text-2xl">⚡</span>
              <p className="text-xl text-gray-200">
                Together, they form an ecosystem where people <span className="text-purple-400 font-semibold">build, earn, and grow</span>
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Learn-to-Earn Section */}
      <motion.section 
        ref={sectionRef2}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-20 px-4 md:px-12 relative bg-gray-900/50 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/40 backdrop-blur-sm rounded-3xl border border-purple-500/30 p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    Earn While You Learn
                  </h2>
                </div>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  AlphaDAO rewards <span className="text-purple-400 font-semibold">real value creation</span> through two core systems
                </p>
                
                <div className="grid gap-6 mb-8">
                  <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-2xl p-6 border border-green-500/30">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">📚</span>
                      <h3 className="text-2xl font-bold text-green-400">Learn-to-Earn</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-2 text-gray-300">
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span>Complete courses & workshops</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span>Attend live sessions</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span>Demonstrate skills</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 rounded-2xl p-6 border border-blue-500/30">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">🎯</span>
                      <h3 className="text-2xl font-bold text-blue-400">Quest-to-Earn</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-2 text-gray-300">
                      <div className="flex items-center gap-2">
                        <span className="text-blue-400">✓</span>
                        <span>Complete ecosystem tasks</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-blue-400">✓</span>
                        <span>Contribute to products</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-blue-400">✓</span>
                        <span>Join missions & challenges</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-900/60 to-pink-900/60 rounded-2xl p-6 border border-purple-500/40 mb-8">
                  <div className="text-center">
                    <p className="text-lg text-purple-200 mb-2">🏆 <strong>Reputation First</strong></p>
                    <p className="text-purple-300">Rewards follow real contribution</p>
                  </div>
                </div>
                
                <Link to="/about" className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                  <span>Explore More</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-gray-800/60 to-purple-800/40 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30">
                  <img src={teamImg} alt="AlphaDAO Ecosystem" className="w-full h-64 object-cover rounded-2xl shadow-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-lg">Join the Future of Work</p>
                    <p className="text-purple-200">Where skills meet opportunity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      
      <Roadmap />
      
      {/* AlphaDAO Academy Section */}
      <motion.section 
        className="py-20 px-4 md:px-12 relative bg-gray-900/50 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/80 to-emerald-900/40 backdrop-blur-sm rounded-3xl border border-emerald-500/30 p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🎓</span>
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  AlphaDAO Academy
                </h2>
              </div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                The education and talent-development arm of the AlphaDAO ecosystem. <span className="text-emerald-400 font-semibold">Education is treated as infrastructure</span> — not content creation alone.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-emerald-300 mb-6 flex items-center gap-2">
                  <span>🎯</span> Core Responsibilities
                </h3>
                <div className="space-y-4">
                  {[
                    "Curriculum design across Web3, blockchain, product, and research disciplines",
                    "Delivery of bootcamps, cohorts, workshops, and guided programs",
                    "Learn-to-earn and quest-based education models",
                    "Skill assessment and certification via Recertify",
                    "Talent discovery and onboarding into AlphaDAO Labs and partner projects"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span className="text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-emerald-300 mb-6 flex items-center gap-2">
                  <span>🏢</span> Internal Structure
                </h3>
                <div className="space-y-4">
                  {[
                    { unit: "Head of Academy", function: "Strategic leadership, curriculum direction, DAO reporting" },
                    { unit: "Curriculum & Content Team", function: "Program design, learning materials, syllabus updates" },
                    { unit: "Instructors & Mentors", function: "Teaching, guidance, technical instruction" },
                    { unit: "Assessment & Certification Team", function: "Skill evaluation, certification issuance (Recertify)" },
                    { unit: "Learning Facilitators", function: "Cohort coordination, learner support, engagement" }
                  ].map((item, i) => (
                    <div key={i} className="bg-emerald-900/30 rounded-xl p-4 border border-emerald-500/20">
                      <h4 className="text-emerald-200 font-semibold mb-1">{item.unit}</h4>
                      <p className="text-gray-300 text-sm">{item.function}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 rounded-2xl p-6 border border-blue-500/30 text-center">
                <div className="text-3xl mb-3">🌐</div>
                <h4 className="text-blue-200 font-semibold mb-2">Ecosystem Integration</h4>
                <p className="text-gray-300 text-sm">Labs receive talent from the Academy, while the Foundation supports programs through funding and grants.</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-2xl p-6 border border-purple-500/30 text-center">
                <div className="text-3xl mb-3">💰</div>
                <h4 className="text-purple-200 font-semibold mb-2">Incentives & Sustainability</h4>
                <p className="text-gray-300 text-sm">Contributors are compensated through DAO-approved revenue allocations, grants, and incentive programs.</p>
              </div>
              
              <div className="bg-gradient-to-r from-orange-900/40 to-red-900/40 rounded-2xl p-6 border border-orange-500/30 text-center">
                <div className="text-3xl mb-3">🗳️</div>
                <h4 className="text-orange-200 font-semibold mb-2">Governance Alignment</h4>
                <p className="text-gray-300 text-sm">The Academy operates under DAO governance. The Academy executes; the DAO governs.</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-emerald-900/60 to-teal-900/60 rounded-2xl p-8 border border-emerald-500/40">
                <p className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">
                  Developing skilled contributors, certifying real competencies
                </p>
                <p className="text-gray-300 text-lg">Creating a continuous pipeline of talent for AlphaDAO Labs, partners, and the broader Web3 ecosystem</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Innovation Showcase Section */}
      <motion.section 
        ref={sectionRef3}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-20 px-4 md:px-12 relative bg-gray-900/50 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">💡</span>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Innovation at Scale
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover how AlphaDAO is <span className="text-cyan-400 font-semibold">revolutionizing</span> the future of work and collaboration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🌐",
                title: "Global Network",
                desc: "Connect with builders worldwide in our decentralized ecosystem",
                gradient: "from-blue-600 to-cyan-600",
                stats: "50+ Countries"
              },
              {
                icon: "🔬",
                title: "Cutting-Edge Research",
                desc: "Leading innovation in AI, blockchain, and decentralized systems",
                gradient: "from-purple-600 to-pink-600",
                stats: "15+ Projects"
              },
              {
                icon: "🏆",
                title: "Proven Results",
                desc: "Track record of successful launches and community growth",
                gradient: "from-orange-600 to-red-600",
                stats: "100K+ Users"
              }
            ].map((feature, idx) => (
              <div key={idx} className="group cursor-pointer" onClick={() => window.open('/AlphaDAO-Complete-Whitepaper.pdf', '_blank')}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" style={{background: `linear-gradient(135deg, ${feature.gradient.split(' ')[1]}, ${feature.gradient.split(' ')[3]})`}}></div>
                  <div className={`relative bg-gradient-to-br ${feature.gradient} p-8 rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 shadow-2xl`}>
                    <div className="text-5xl mb-6 filter drop-shadow-lg text-center">{feature.icon}</div>
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-white mb-2">{feature.stats}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    </div>
                    <p className="text-gray-200 leading-relaxed text-center mb-4">{feature.desc}</p>
                    <div className="text-center">
                      <span className="text-sm text-white/70">Learn more →</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/40 backdrop-blur-sm rounded-3xl border border-purple-500/30 p-12 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                    Ready to Shape the Future?
                  </h3>
                  <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                    Join a community where <span className="text-purple-400 font-semibold">innovation meets opportunity</span> and every contribution matters.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="https://t.co/OQ2Jlv2MHl" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 cursor-pointer">
                      <span>🚀</span>
                      <span>Get Started</span>
                    </a>
                    <a href="/AlphaDAO-Complete-Whitepaper.pdf" className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 cursor-pointer">
                      <span>📄</span>
                      <span>Learn More</span>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-2xl"></div>
                  <div className="relative bg-gradient-to-br from-purple-800/40 to-blue-800/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-purple-900/40 rounded-xl p-4">
                        <div className="text-2xl font-bold text-purple-300">24/7</div>
                        <div className="text-sm text-gray-300">Community Support</div>
                      </div>
                      <div className="bg-blue-900/40 rounded-xl p-4">
                        <div className="text-2xl font-bold text-blue-300">∞</div>
                        <div className="text-sm text-gray-300">Learning Opportunities</div>
                      </div>
                      <div className="bg-cyan-900/40 rounded-xl p-4">
                        <div className="text-2xl font-bold text-cyan-300">100%</div>
                        <div className="text-sm text-gray-300">Decentralized</div>
                      </div>
                      <div className="bg-green-900/40 rounded-xl p-4">
                        <div className="text-2xl font-bold text-green-300">🌟</div>
                        <div className="text-sm text-gray-300">Innovation First</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Vision Section */}
      <motion.section 
        ref={sectionRef4}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-20 px-4 md:px-12 relative bg-gray-900/50 backdrop-blur-sm"
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/40 backdrop-blur-sm rounded-3xl border border-purple-500/30 p-12 shadow-2xl text-center">
            <div className="mb-12">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🚀</span>
                </div>
                <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Our Vision
                </h2>
              </div>
              <p className="text-2xl text-gray-300 mb-12">Building a world where:</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                { icon: "✅", text: "Skills are verifiable", color: "from-green-500 to-emerald-500" },
                { icon: "💎", text: "Learning has real economic value", color: "from-blue-500 to-cyan-500" },
                { icon: "🏆", text: "Contribution is rewarded", color: "from-purple-500 to-pink-500" },
                { icon: "🤝", text: "Communities govern and build together", color: "from-orange-500 to-red-500" }
              ].map((item, idx) => (
                <div key={idx} className="group">
                  <div className={`bg-gradient-to-r ${item.color} p-6 rounded-2xl border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl`}>
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{item.icon}</span>
                      <p className="text-xl font-semibold text-white">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-purple-900/60 to-blue-900/60 rounded-2xl p-8 border border-purple-500/40 mb-12">
              <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                AlphaDAO is building the infrastructure for that world.
              </p>
              <p className="text-gray-300 text-lg">Join us in creating the future of decentralized collaboration</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a href="https://t.co/OQ2Jlv2MHl" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                <span className="text-2xl">🚀</span>
                <span>Join Our Community</span>
              </a>
              <a href="/AlphaDAO_Whitepaper.pdf" className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <span className="text-2xl">📄</span>
                <span>Read Whitepaper</span>
              </a>
            </div>
          </div>
        </div>
      </motion.section>
      </div>
      <Footer />
    </div>
  );
}
 