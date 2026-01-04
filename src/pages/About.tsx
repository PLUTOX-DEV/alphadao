// src/pages/Aboutft.tsx
import Footer from '../component/footer';
import { Link } from 'react-router-dom';
import Header from '../component/Header';
import AnimatedBackground from '../components/AnimatedBackground';
import { motion } from 'framer-motion';
import lex from "../assets/lex (2).jpg";
import npmImg from "../assets/npm.jpg";
import levi from "../assets/levi.jpg";
import fola from "../assets/fola.jpg";
import pro from "../assets/mr. professional.jpg";
import marv from "../assets/bigmarv.jpg";

const teamMembers = [
  {
    name: "LEX",
    role: "Founder",
    image: lex,
    twitter: "ALPHADAO101",
  },
  {
    name: "Npm",
    role: "CTO",
    image: npmImg,
    twitter: "2xQuant",
  },
  {
    name: "L3VI 🧧𝕏 l3viticus",
    role: "Community Manager",
    image: levi,
    twitter: "toney_levi",
  },
  {
    name: "Feraragotta",
    role: "Project Manager",
    image: fola,
    twitter: "GotaHarmony",
  },
  {
    name: "Mr. Professional",
    role: "CMO",
    image: pro,
    twitter: "sales_unwana",
  },
  {
    name: "Big Marv",
    role: "CFO",
    image: marv,
    twitter: "JustcallMarv",
  },
];

const About = () => (
  <div className="min-h-screen overflow-hidden relative">
    <AnimatedBackground />

    <div className="sticky top-0 z-50 border-b border-purple-500/20 bg-gray-950/80 backdrop-blur-sm">
      <Header />
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-10"
    >
      <main className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">🏛️</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About AlphaDAO
            </h1>
          </div>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover the <span className="text-purple-400 font-semibold">complete ecosystem</span> powering the future of decentralized collaboration
          </p>
        </div>

        {/* Three Pillars Overview */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/40 backdrop-blur-sm rounded-3xl border border-purple-500/30 p-12 shadow-2xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="text-4xl">🌐</span>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  The Three Pillars
                </h2>
              </div>
              <p className="text-xl text-gray-300">The Three Pillars of AlphaDAO</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "👥",
                  number: "01",
                  title: "AlphaDAO Society",
                  subtitle: "The Community",
                  desc: "The living heartbeat of the ecosystem. A collective of learners, voters, builders, creators, and contributors.",
                  gradient: "from-purple-600 to-purple-800",
                  features: ["Community voting", "Learn-to-Earn", "On-chain identity"]
                },
                {
                  icon: "🎓",
                  number: "02",
                  title: "AlphaDAO Bootcamp",
                  subtitle: "Education",
                  desc: "Our educational engine providing free Web3, trading, and governance education, awarding soulbound NFT certifications and Learn2Earn rewards.",
                  gradient: "from-blue-600 to-purple-600",
                  features: ["Web3 education", "Trading courses", "NFT certifications"]
                },
                {
                  icon: "🔬",
                  number: "03",
                  title: "AlphaDAO Labs",
                  subtitle: "Development",
                  desc: "Our innovation hub where ideas become real products such as mini-apps, tools, experiments, and future prediction markets.",
                  gradient: "from-cyan-600 to-blue-600",
                  features: ["Mini-apps", "Tools & experiments", "Prediction markets"]
                }
              ].map((pillar, idx) => (
                <div key={idx} className="group relative cursor-pointer" onClick={() => window.open('/AlphaDAO-Complete-Whitepaper.pdf', '_blank')}>
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" style={{background: `linear-gradient(135deg, ${pillar.gradient.split(' ')[1]}, ${pillar.gradient.split(' ')[3]})`}}></div>
                  <div className={`relative bg-gradient-to-br ${pillar.gradient} p-8 rounded-3xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-5xl filter drop-shadow-lg">{pillar.icon}</span>
                      <div className="text-6xl font-bold text-white/20">{pillar.number}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{pillar.title}</h3>
                    <p className="text-purple-200 font-medium mb-4">{pillar.subtitle}</p>
                    <p className="text-gray-200 leading-relaxed mb-6">{pillar.desc}</p>
                    <div className="space-y-2">
                      {pillar.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-green-400">✓</span>
                          <span className="text-gray-200 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Sections */}
        <div className="space-y-16">
          {/* AlphaDAO Society */}
          <section className="group">
            <div className="bg-gradient-to-br from-purple-900/60 to-pink-900/40 backdrop-blur-sm rounded-3xl border border-purple-500/30 p-10 hover:border-purple-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">👥</span>
                </div>
                <div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    AlphaDAO Society
                  </h2>
                  <p className="text-purple-200 text-xl">The Community Layer</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                The Society is the <span className="text-purple-400 font-semibold">heart of AlphaDAO</span>. A global network of individuals who learn together, contribute together, and build together.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-purple-300 mb-4 flex items-center gap-2">
                    <span>🌟</span> Society Enables
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Community proposals and voting",
                      "Partnership approvals", 
                      "Learn-to-Earn participation",
                      "Reputation & badges",
                      "Collective missions"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-purple-400">✓</span>
                        <span className="text-gray-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-800/40 to-pink-800/40 rounded-2xl p-6 border border-purple-500/30">
                  <p className="text-purple-200 italic text-lg text-center">
                    "This is where culture, identity, and participation live."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* AlphaDAO Labs */}
          <section className="group">
            <div className="bg-gradient-to-br from-blue-900/60 to-cyan-900/40 backdrop-blur-sm rounded-3xl border border-blue-500/30 p-10 hover:border-blue-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🔬</span>
                </div>
                <div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    AlphaDAO Labs
                  </h2>
                  <p className="text-blue-200 text-xl">Innovation & Infrastructure</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Labs is the <span className="text-blue-400 font-semibold">research, development, and execution arm</span> of the ecosystem.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-blue-300 mb-4 flex items-center gap-2">
                    <span>⚡</span> Labs Responsibilities
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Product development",
                      "Research & experimentation",
                      "Infrastructure building", 
                      "Startup incubation"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-blue-400">✓</span>
                        <span className="text-gray-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-800/40 to-cyan-800/40 rounded-2xl p-6 border border-blue-500/30">
                    <p className="text-blue-200 font-semibold mb-2">💡 Innovation Hub</p>
                    <p className="text-gray-200">Every major AlphaDAO product begins in the Labs</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-800/40 to-emerald-800/40 rounded-2xl p-6 border border-green-500/30">
                    <p className="text-green-200 font-semibold mb-2">📊 Sustainability</p>
                    <p className="text-gray-200">Fixed 10% ecosystem allocation ensures long-term growth</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Recertify */}
          <section className="group">
            <div className="bg-gradient-to-br from-cyan-900/60 to-teal-900/40 backdrop-blur-sm rounded-3xl border border-cyan-500/30 p-10 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🛡️</span>
                </div>
                <div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                    Recertify
                  </h2>
                  <p className="text-cyan-200 text-xl">Verifiable Digital Records</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Recertify is AlphaDAO's <span className="text-cyan-400 font-semibold">flagship blockchain-powered engine</span> for digital verification.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
                    <span>🎯</span> Core Features
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Skill certification",
                      "Achievement verification",
                      "Participation records",
                      "Digital identity & reputation"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-cyan-400">✓</span>
                        <span className="text-gray-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
                    <span>🏆</span> Additional Capabilities
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Online competitions",
                      "Digital titles & badges",
                      "Trusted organizational records"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-cyan-400">✓</span>
                        <span className="text-gray-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-800/40 to-teal-800/40 rounded-2xl p-6 border border-cyan-500/30 text-center">
                <p className="text-cyan-200 italic text-lg">
                  "Think of it as a digital record authority for the internet era."
                </p>
              </div>
            </div>
          </section>

          {/* Academy & Learning */}
          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-900/60 to-red-900/40 backdrop-blur-sm rounded-3xl border border-orange-500/30 p-8 hover:border-orange-400/60 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🎓</span>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  AlphaDAO Academy
                </h2>
              </div>
              <p className="text-gray-200 mb-6">Structured learning through:</p>
              <div className="space-y-3 mb-6">
                {["Live virtual sessions", "Workshops & bootcamps", "Community education"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-orange-400">✓</span>
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-orange-200 italic">Learning tracked & verified through Recertify</p>
            </div>

            <div className="bg-gradient-to-br from-green-900/60 to-emerald-900/40 backdrop-blur-sm rounded-3xl border border-green-500/30 p-8 hover:border-green-400/60 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">💰</span>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Earn Systems
                </h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-green-300 mb-2">📚 Learn-to-Earn</h3>
                  <p className="text-gray-200 text-sm">Courses, sessions, skill demos</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-300 mb-2">🎯 Quest-to-Earn</h3>
                  <p className="text-gray-200 text-sm">Tasks, contributions, challenges</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-800/40 rounded-xl border border-green-500/30 text-center">
                <p className="text-green-200 font-semibold">Reputation First, Rewards Follow</p>
              </div>
            </div>
          </section>

          {/* AlphaDAO Academy Section */}
          <section className="group">
            <div className="bg-gradient-to-br from-emerald-900/60 to-teal-900/40 backdrop-blur-sm rounded-3xl border border-emerald-500/30 p-10 hover:border-emerald-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🎓</span>
                </div>
                <div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    AlphaDAO Academy
                  </h2>
                  <p className="text-emerald-200 text-xl">Structure & Operating Model</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                The education and talent-development arm of the AlphaDAO ecosystem. It exists to develop skilled contributors, certify real competencies, and create a <span className="text-emerald-400 font-semibold">continuous pipeline of talent</span> for AlphaDAO Labs, partners, and the broader Web3 ecosystem.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-emerald-300 mb-4 flex items-center gap-2">
                    <span>🎯</span> Core Responsibilities
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Curriculum design across Web3, blockchain, product, and research disciplines",
                      "Delivery of bootcamps, cohorts, workshops, and guided programs",
                      "Learn-to-earn and quest-based education models",
                      "Skill assessment and certification via Recertify",
                      "Talent discovery and onboarding into AlphaDAO Labs and partner projects"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="text-emerald-400">•</span>
                        <span className="text-gray-200 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-emerald-300 mb-4 flex items-center gap-2">
                    <span>🏢</span> Internal Structure
                  </h3>
                  <div className="space-y-3">
                    {[
                      { unit: "Head of Academy", function: "Strategic leadership, curriculum direction" },
                      { unit: "Curriculum & Content Team", function: "Program design, learning materials" },
                      { unit: "Instructors & Mentors", function: "Teaching, guidance, technical instruction" },
                      { unit: "Assessment Team", function: "Skill evaluation, certification issuance" }
                    ].map((item, i) => (
                      <div key={i} className="bg-emerald-900/30 rounded-xl p-3 border border-emerald-500/20">
                        <h4 className="text-emerald-200 font-semibold text-sm mb-1">{item.unit}</h4>
                        <p className="text-gray-300 text-xs">{item.function}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-emerald-800/40 to-teal-800/40 rounded-2xl p-6 border border-emerald-500/30 text-center">
                <p className="text-emerald-200 italic text-lg">
                  "Education is treated as infrastructure — not content creation alone."
                </p>
              </div>
            </div>
          </section>

          {/* AI Integration Section */}
          <section className="group cursor-pointer" onClick={() => window.open('/AlphaDAO_Whitepaper.pdf', '_blank')}>
            <div className="bg-gradient-to-br from-emerald-900/60 to-teal-900/40 backdrop-blur-sm rounded-3xl border border-emerald-500/30 p-10 hover:border-emerald-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🤖</span>
                </div>
                <div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    AI Integration in Recertify
                  </h2>
                  <p className="text-emerald-200 text-xl">Strategic Rationale & System Design</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Integrating artificial intelligence into Recertify is a <span className="text-emerald-400 font-semibold">strategic upgrade</span> to improve scale, accuracy, and trust while maintaining human governance and transparency.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-emerald-300 mb-4 flex items-center gap-2">
                    <span>💡</span> Why AI Strengthens Recertify
                  </h3>
                  <p className="text-gray-200 mb-4">
                    As the ecosystem grows, AI enables Recertify to analyze large volumes of data consistently and objectively, removing manual bottlenecks while preserving credibility.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-emerald-300 mb-4 flex items-center gap-2">
                    <span>⚙️</span> Role of AI
                  </h3>
                  <p className="text-gray-200">
                    AI acts as an analytical layer. It processes activity data, identifies patterns, flags anomalies, and produces structured evidence for certifications.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-emerald-300 mb-4 flex items-center gap-2">
                    <span>🎯</span> Core AI Improvements
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-emerald-800/40 to-teal-800/40 rounded-xl p-4 border border-emerald-500/30">
                      <h4 className="text-emerald-200 font-semibold mb-2">Performance Analysis</h4>
                      <p className="text-gray-200 text-sm">AI evaluates learning progress, task quality, and prediction accuracy over time</p>
                    </div>
                    <div className="bg-gradient-to-r from-emerald-800/40 to-teal-800/40 rounded-xl p-4 border border-emerald-500/30">
                      <h4 className="text-emerald-200 font-semibold mb-2">Integrity Protection</h4>
                      <p className="text-gray-200 text-sm">Detects manipulation, false participation, and coordinated abuse</p>
                    </div>
                    <div className="bg-gradient-to-r from-emerald-800/40 to-teal-800/40 rounded-xl p-4 border border-emerald-500/30">
                      <h4 className="text-emerald-200 font-semibold mb-2">Agent Certification</h4>
                      <p className="text-gray-200 text-sm">Assesses autonomous agent behavior and produces verifiable performance histories</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-blue-800/40 to-cyan-800/40 rounded-2xl p-6 border border-blue-500/30">
                  <h3 className="text-blue-200 font-semibold mb-2 flex items-center gap-2">
                    <span>📊</span> Prediction Markets Synergy
                  </h3>
                  <p className="text-gray-200 text-sm">
                    AI measures forecast accuracy in weather, agriculture, and news markets, enabling credibility scores tied to real-world outcomes.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-purple-800/40 to-pink-800/40 rounded-2xl p-6 border border-purple-500/30">
                  <h3 className="text-purple-200 font-semibold mb-2 flex items-center gap-2">
                    <span>🚀</span> Strategic Benefits
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Scale trust, support autonomous economies, enable institutional participation, and strengthen Recertify as defensible infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ATD DAO Roadmap Section */}
          <section className="group cursor-pointer" onClick={() => window.open('/AlphaDAO_Whitepaper.pdf', '_blank')}>
            <div className="bg-gradient-to-br from-violet-900/60 to-purple-900/40 backdrop-blur-sm rounded-3xl border border-violet-500/30 p-10 hover:border-violet-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🗺️</span>
                </div>
                <div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                    ATD DAO Roadmap (2025-2026)
                  </h2>
                  <p className="text-violet-200 text-xl">Strategic Development Phases</p>
                </div>
              </div>
              
              <div className="space-y-8">
                {/* Phase 1 */}
                <div className="bg-gradient-to-r from-violet-800/40 to-purple-800/40 rounded-2xl p-6 border border-violet-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">🚀</span>
                    <h3 className="text-2xl font-bold text-violet-300">Phase 1 - Q2 2025: Product Launches</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-violet-900/40 rounded-xl p-4 border border-violet-500/20">
                      <h4 className="text-violet-200 font-semibold mb-2 flex items-center gap-2">
                        <span>📝</span> Community Hub & Blog
                      </h4>
                      <ul className="text-gray-200 text-sm space-y-1">
                        <li>• Official DAO blog launch</li>
                        <li>• Trade insights & community news</li>
                        <li>• TA/FA education for crypto trading</li>
                      </ul>
                    </div>
                    
                    <div className="bg-violet-900/40 rounded-xl p-4 border border-violet-500/20">
                      <h4 className="text-violet-200 font-semibold mb-2 flex items-center gap-2">
                        <span>🎨</span> NFT Integration
                      </h4>
                      <ul className="text-gray-200 text-sm space-y-1">
                        <li>• Exclusive early access NFTs</li>
                        <li>• Governance privileges</li>
                        <li>• Premium content & staking multipliers</li>
                      </ul>
                    </div>
                    
                    <div className="bg-violet-900/40 rounded-xl p-4 border border-violet-500/20">
                      <h4 className="text-violet-200 font-semibold mb-2 flex items-center gap-2">
                        <span>🔮</span> Prediction Markets
                      </h4>
                      <ul className="text-gray-200 text-sm space-y-1">
                        <li>• Community forecasts</li>
                        <li>• Crypto & event predictions</li>
                        <li>• USDT/Token rewards for winners</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Phase 2 */}
                <div className="bg-gradient-to-r from-blue-800/40 to-indigo-800/40 rounded-2xl p-6 border border-blue-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">🏗️</span>
                    <h3 className="text-2xl font-bold text-blue-300">Phase 2 - Q3 2025: Foundation Formation</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="bg-blue-900/40 rounded-xl p-4 border border-blue-500/20 mb-4">
                        <h4 className="text-blue-200 font-semibold mb-2 flex items-center gap-2">
                          <span>🪙</span> Token Launch: $ATD
                        </h4>
                        <p className="text-gray-200 text-sm mb-2">Initial Value: $0.10 per ATD</p>
                        <ul className="text-gray-200 text-sm space-y-1">
                          <li>• Smart contract deployment</li>
                          <li>• Trading pool integration</li>
                          <li>• Polygon-based staking protocols</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <div className="bg-blue-900/40 rounded-xl p-4 border border-blue-500/20">
                        <h4 className="text-blue-200 font-semibold mb-2 flex items-center gap-2">
                          <span>👥</span> Trader Recruitment
                        </h4>
                        <ul className="text-gray-200 text-sm space-y-1">
                          <li>• Onboard verified traders</li>
                          <li>• Execute DAO-funded trades</li>
                          <li>• Profit-sharing model</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Phase 3 */}
                <div className="bg-gradient-to-r from-green-800/40 to-emerald-800/40 rounded-2xl p-6 border border-green-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">🌱</span>
                    <h3 className="text-2xl font-bold text-green-300">Phase 3 - Q4 2025: Ecosystem Expansion</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-green-900/40 rounded-xl p-4 border border-green-500/20">
                        <h4 className="text-green-200 font-semibold mb-2 flex items-center gap-2">
                          <span>🗳️</span> Governance
                        </h4>
                        <ul className="text-gray-200 text-sm space-y-1">
                          <li>• Snapshot/on-chain voting</li>
                          <li>• Token holder proposals</li>
                          <li>• Treasury allocation decisions</li>
                        </ul>
                      </div>
                      
                      <div className="bg-green-900/40 rounded-xl p-4 border border-green-500/20">
                        <h4 className="text-green-200 font-semibold mb-2 flex items-center gap-2">
                          <span>📡</span> Signal Platform
                        </h4>
                        <ul className="text-gray-200 text-sm space-y-1">
                          <li>• Verified trader signals</li>
                          <li>• ATD/USDT subscriptions</li>
                          <li>• DAO commission model</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <div className="bg-green-900/40 rounded-xl p-4 border border-green-500/20">
                        <h4 className="text-green-200 font-semibold mb-2 flex items-center gap-2">
                          <span>🔗</span> DePIN Integration (Q1 2026)
                        </h4>
                        <ul className="text-gray-200 text-sm space-y-1">
                          <li>• Real-world device middleware</li>
                          <li>• ATD + NFT rewards system</li>
                          <li>• Dedicated DePIN SubDAO</li>
                          <li>• Uptime & data accuracy incentives</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Tokenomics */}
                <div className="bg-gradient-to-r from-yellow-800/40 to-orange-800/40 rounded-2xl p-6 border border-yellow-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">💰</span>
                    <h3 className="text-2xl font-bold text-yellow-300">Tokenomics & Value Strategy</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-yellow-900/40 rounded-xl p-4 border border-yellow-500/20">
                      <h4 className="text-yellow-200 font-semibold mb-2">Utility-Driven Demand</h4>
                      <ul className="text-gray-200 text-sm space-y-1">
                        <li>• Governance rights</li>
                        <li>• Signal access</li>
                        <li>• Staking rewards</li>
                        <li>• DePIN contributions</li>
                      </ul>
                    </div>
                    
                    <div className="bg-yellow-900/40 rounded-xl p-4 border border-yellow-500/20">
                      <h4 className="text-yellow-200 font-semibold mb-2">Scarcity Mechanisms</h4>
                      <ul className="text-gray-200 text-sm space-y-1">
                        <li>• Token burns from profits</li>
                        <li>• Locked staking participation</li>
                        <li>• Governance requirements</li>
                      </ul>
                    </div>
                    
                    <div className="bg-yellow-900/40 rounded-xl p-4 border border-yellow-500/20">
                      <h4 className="text-yellow-200 font-semibold mb-2">Value Targets</h4>
                      <ul className="text-gray-200 text-sm space-y-1">
                        <li>• Short-term: $1 per ATD</li>
                        <li>• Long-term: $5-$10+</li>
                        <li>• Polygon ecosystem scaling</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Governance & Revenue */}
          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-indigo-900/60 to-purple-900/40 backdrop-blur-sm rounded-3xl border border-indigo-500/30 p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🗳️</span>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Governance
                </h2>
              </div>
              <p className="text-gray-200 mb-6">Proposal-based and vote-driven</p>
              <div className="space-y-3 mb-6">
                {["Ecosystem direction", "Product initiatives", "Strategic partnerships"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-indigo-400">✓</span>
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-indigo-200 italic">Simple, transparent, progress-focused</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/60 to-orange-900/40 backdrop-blur-sm rounded-3xl border border-yellow-500/30 p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">💎</span>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Revenue Model
                </h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-yellow-300 mb-2">Revenue Sources:</h3>
                  <div className="space-y-2 text-sm">
                    {["Training programs", "Certifications", "Competitions", "Partnerships"].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-yellow-400">•</span>
                        <span className="text-gray-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-yellow-300 mb-2">Revenue Flows:</h3>
                  <div className="space-y-2 text-sm">
                    {["Sustain ecosystem", "Fund development", "Reward contributors"].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-yellow-400">•</span>
                        <span className="text-gray-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Vision */}
          <section className="text-center">
            <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/40 backdrop-blur-sm rounded-3xl border border-purple-500/30 p-12 shadow-2xl">
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
              </div>
              
              <Link
                to="/contactus"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
              >
                <span className="text-2xl">📞</span>
                <span>Get in Touch</span>
              </Link>
            </div>
          </section>
        </div>

        {/* Community & Ecosystem Section */}
        <section className="mt-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">🌍</span>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Join Our Global Ecosystem
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Be part of a <span className="text-green-400 font-semibold">thriving community</span> of builders, creators, and innovators
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🚀",
                title: "Builders",
                count: "10K+",
                desc: "Active developers and creators",
                gradient: "from-blue-600 to-cyan-600"
              },
              {
                icon: "🎓",
                title: "Learners",
                count: "25K+",
                desc: "Students earning while learning",
                gradient: "from-purple-600 to-pink-600"
              },
              {
                icon: "🏆",
                title: "Contributors",
                count: "5K+",
                desc: "Active ecosystem participants",
                gradient: "from-orange-600 to-red-600"
              },
              {
                icon: "🌟",
                title: "Innovators",
                count: "2K+",
                desc: "Leading breakthrough projects",
                gradient: "from-green-600 to-emerald-600"
              }
            ].map((stat, idx) => (
              <div key={idx} className="group cursor-pointer" onClick={() => window.open('/AlphaDAO-Complete-Whitepaper.pdf', '_blank')}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" style={{background: `linear-gradient(135deg, ${stat.gradient.split(' ')[1]}, ${stat.gradient.split(' ')[3]})`}}></div>
                  <div className={`relative bg-gradient-to-br ${stat.gradient} p-8 rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-2xl text-center`}>
                    <div className="text-5xl mb-4 filter drop-shadow-lg">{stat.icon}</div>
                    <div className="text-4xl font-bold text-white mb-2">{stat.count}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{stat.title}</h3>
                    <p className="text-gray-200 text-sm">{stat.desc}</p>
                    <div className="mt-4">
                      <span className="text-xs text-white/70">Click to learn more →</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-gray-900/80 to-purple-900/40 backdrop-blur-sm rounded-3xl border border-purple-500/30 p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">Ready to Build the Future?</h3>
              <p className="text-gray-300 mb-6">Join thousands of innovators already shaping tomorrow's decentralized world</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://t.co/OQ2Jlv2MHl" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 cursor-pointer">
                  <span>🚀</span>
                  <span>Join Community</span>
                </a>
                <a href="/AlphaDAO-Complete-Whitepaper.pdf" className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 cursor-pointer">
                  <span>📄</span>
                  <span>Read Whitepaper</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
    <Footer />
  </div>
);

export default About;
