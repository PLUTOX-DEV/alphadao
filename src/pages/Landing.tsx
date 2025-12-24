import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const [bootProgress, setBootProgress] = useState(0);
  const [showLanding, setShowLanding] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Boot sequence
    const bootLines = [
      "Initializing Alpha DAO Core...",
      "Loading secure modules...",
      "Decrypting protocols...",
      "Syncing nodes with network...",
      "Starting autonomous assistant...",
      "Preparing user interface...",
      "Finalizing boot sequence..."
    ];

    let lineIndex = 0;
    const bootContainer = document.getElementById('boot-lines');

    const typeLine = () => {
      if (lineIndex >= bootLines.length) return;
      const text = bootLines[lineIndex];
      const lineEl = document.createElement('div');
      lineEl.className = 'boot-line';
      lineEl.textContent = text;
      bootContainer?.appendChild(lineEl);
      lineIndex++;
      setTimeout(typeLine, 600);
    };

    // Start progress and typing
    const progressInterval = setInterval(() => {
      setBootProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setShowLanding(true), 800);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    setTimeout(typeLine, 500);

    return () => clearInterval(progressInterval);
  }, []);

  const handleEnter = () => {
    navigate('/home');
  };

  return (
    <div className="relative min-h-screen bg-gray-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="yin-bg">
          <div className="yin-glow"></div>
          <div className="yin-glow yin-glow-alt"></div>
        </div>
        <div className="landing-bg">
          <div className="ring ring1"></div>
          <div className="ring ring2"></div>
          <div className="light-streak streak1"></div>
          <div className="light-streak streak2"></div>
        </div>
      </div>

      {/* Boot Screen */}
      {!showLanding && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-950">
          <div className="boot-box">
            <div className="yin-wrapper">
              <div className="yin-ring rotating"></div>
              <img className="yin-yang" src="/Daologo.png" alt="Alpha DAO Logo" />
            </div>
            
            <h3 className="text-purple-300 text-center mb-4 tracking-wider">
              ALPHA DAO • SYSTEM BOOT
            </h3>
            
            <div id="boot-lines" className="min-h-[100px] text-left text-sm text-purple-200 mb-4"></div>
            
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${bootProgress}%` }}
              ></div>
            </div>
            
            <div className="text-white font-bold mt-2">{bootProgress}%</div>
            <div className="text-purple-200 text-sm">
              {bootProgress < 30 ? 'Initializing...' : 
               bootProgress < 60 ? 'Connecting...' : 
               bootProgress < 90 ? 'Optimizing...' : 'Finalizing...'}
            </div>
          </div>
        </div>
      )}

      {/* Landing Card */}
      {showLanding && (
        <div className="flex items-center justify-center min-h-screen z-10 relative">
          <div className="landing-card max-w-md w-full mx-4">
            <div className="text-center mb-6">
              <img src="/Daologo.png" alt="Alpha DAO" className="w-20 h-20 mx-auto mb-4 rounded-full" />
              <h1 className="text-3xl font-bold text-purple-300 mb-2">
                Welcome to AlphaDAO Labs
              </h1>
              <p className="text-purple-200 opacity-85">
                A decentralized intelligence network. Enter to continue.
              </p>
            </div>
            
            <button 
              onClick={handleEnter}
              className="w-full py-3 px-6 bg-gradient-to-r from-purple-700 to-purple-950 hover:from-purple-800 hover:to-purple-900 text-white font-bold rounded-lg transition-all duration-200 shadow-lg"
            >
              Enter Alpha DAO
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .boot-box {
          width: 380px;
          max-width: calc(100% - 48px);
          padding: 26px;
          border-radius: 14px;
          background: rgba(10,0,20,0.55);
          border: 1px solid rgba(170,100,255,0.12);
          box-shadow: 0 10px 40px rgba(120,30,200,0.12);
          text-align: center;
        }

        .yin-wrapper {
          width: 150px;
          height: 150px;
          margin: 0 auto 12px auto;
          position: relative;
        }

        .yin-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 4px solid rgba(168,85,247,0.9);
          box-shadow: 0 0 18px rgba(168,85,247,0.25);
        }

        .rotating {
          animation: spin 8s linear infinite;
        }

        .yin-yang {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          width: 110px;
          height: 110px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 0 18px rgba(168,85,247,0.25);
        }

        .progress-bar {
          height: 10px;
          width: 100%;
          background: rgba(255,255,255,0.03);
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid rgba(170,100,255,0.06);
          margin: 14px 0;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #a855f7, #c46bff);
          box-shadow: 0 0 12px rgba(168,85,247,0.6);
          transition: width 0.1s linear;
        }

        .boot-line {
          margin-bottom: 3px;
          opacity: 0.8;
        }

        .landing-card {
          padding: 28px;
          border-radius: 14px;
          background: linear-gradient(180deg, rgba(16,4,40,0.6), rgba(8,2,25,0.55));
          border: 1px solid rgba(170,100,255,0.06);
          box-shadow: 0 10px 40px rgba(120,30,200,0.08);
        }

        .yin-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .yin-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 400px;
          height: 400px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: conic-gradient(rgba(168,85,247,0.5), rgba(196,107,255,0.5), rgba(168,85,247,0.5));
          filter: blur(60px);
          animation: yin-rotate 20s linear infinite, yin-pulse 3s ease-in-out infinite alternate;
        }

        .yin-glow-alt {
          width: 300px;
          height: 300px;
          background: conic-gradient(rgba(255,255,255,0.15), rgba(168,85,247,0.3), rgba(255,255,255,0.15));
          filter: blur(40px);
          animation: yin-rotate-rev 25s linear infinite, yin-pulse 2.8s ease-in-out infinite alternate;
        }

        .landing-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .ring {
          position: absolute;
          border: 2px solid rgba(168,85,247,0.4);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0);
          animation: pulseRing 6s infinite ease-in-out;
        }

        .ring1 {
          width: 300px;
          height: 300px;
          animation-delay: 0s;
        }

        .ring2 {
          width: 500px;
          height: 500px;
          animation-delay: 1.5s;
        }

        .light-streak {
          position: absolute;
          width: 2px;
          height: 120%;
          background: linear-gradient(to bottom, rgba(196,107,255,0), rgba(196,107,255,0.6), rgba(196,107,255,0));
          top: -10%;
          transform: rotate(15deg);
          animation: streakMove 4s infinite linear;
          filter: blur(3px);
        }

        .streak1 {
          left: 30%;
          animation-delay: 0s;
        }

        .streak2 {
          left: 70%;
          animation-delay: 2s;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes yin-rotate {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes yin-rotate-rev {
          0% { transform: translate(-50%, -50%) rotate(360deg); }
          100% { transform: translate(-50%, -50%) rotate(0deg); }
        }

        @keyframes yin-pulse {
          0% { transform: translate(-50%, -50%) scale(0.95); opacity: 0.85; }
          100% { transform: translate(-50%, -50%) scale(1.05); opacity: 1; }
        }

        @keyframes pulseRing {
          0%, 100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.2; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.5; }
        }

        @keyframes streakMove {
          0% { transform: translateY(-100%) rotate(15deg); opacity: 0; }
          50% { transform: translateY(100%) rotate(15deg); opacity: 0.7; }
          100% { transform: translateY(200%) rotate(15deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}