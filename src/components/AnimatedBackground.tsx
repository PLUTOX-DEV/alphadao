import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbLayerRef = useRef<HTMLDivElement>(null);
  const haloLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create glassy boxes
    const container = containerRef.current;
    if (container) {
      const boxCount = 20;
      for (let i = 0; i < boxCount; i++) {
        const box = document.createElement('div');
        box.className = 'glassy-box';
        box.style.left = Math.random() * (window.innerWidth - 150) + 'px';
        box.style.top = Math.random() * (window.innerHeight - 150) + 'px';
        box.style.animationDuration = (6 + Math.random() * 6) + 's';
        box.style.animationDelay = (Math.random() * 2) + 's';
        
        // Add shimmer to each box
        const shimmer = document.createElement('div');
        shimmer.className = 'shimmer-box';
        box.appendChild(shimmer);
        
        container.appendChild(box);
      }
    }

    // Create light orbs
    const orbLayer = orbLayerRef.current;
    if (orbLayer) {
      for (let i = 0; i < 6; i++) {
        const orb = document.createElement('div');
        orb.className = 'light-orb';
        orb.style.left = Math.random() * window.innerWidth + 'px';
        orb.style.top = Math.random() * window.innerHeight + 'px';
        orb.style.animationDuration = (10 + Math.random() * 10) + 's';
        orbLayer.appendChild(orb);
      }
    }

    // Create halo rings
    const haloLayer = haloLayerRef.current;
    if (haloLayer) {
      for (let i = 0; i < 3; i++) {
        const ring = document.createElement('div');
        ring.className = 'halo-ring';
        ring.style.left = (window.innerWidth / 2 - 210) + 'px';
        ring.style.top = (window.innerHeight / 2 - 210) + 'px';
        ring.style.animationDuration = (20 + i * 10) + 's';
        haloLayer.appendChild(ring);
      }
    }

    // Matrix rain effect
    const letters = "卐ψλΩ¥₿ΦΔΞ".split("");
    const drops = Array(Math.floor(canvas.width / 14)).fill(1);

    const drawMatrix = () => {
      ctx.fillStyle = "rgba(5,0,15,0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(200,130,255,0.55)";
      ctx.font = "14px monospace";

      drops.forEach((y, i) => {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * 14, y * 14);

        if (y * 14 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    };

    const matrixInterval = setInterval(drawMatrix, 45);

    // Mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      if (container) {
        container.style.transform = `translate(${x}px, ${y}px)`;
      }
      if (orbLayer) {
        orbLayer.style.transform = `translate(${x / 2}px, ${y / 2}px)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(matrixInterval);
    };
  }, []);

  return (
    <>
      {/* Aurora background */}
      <div className="aurora" />
      
      {/* Shimmer effect */}
      <div className="shimmer-global" />
      
      {/* Grain texture */}
      <div className="grain" />
      
      {/* Floating icons */}
      <div className="floating-icons">
        <div className="fi" />
        <div className="fi" />
        <div className="fi" />
        <div className="fi" />
      </div>

      {/* Glassy container */}
      <div ref={containerRef} className="glassy-container" />
      
      {/* Light orb layer */}
      <div ref={orbLayerRef} className="light-orb-layer" />
      
      {/* Halo ring layer */}
      <div ref={haloLayerRef} className="halo-ring-layer" />
      
      {/* Matrix canvas */}
      <canvas ref={canvasRef} className="matrix-canvas" />

      <style>{`
        .aurora {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: -1;
          background: radial-gradient(800px circle at 20% 30%, rgba(255,0,255,0.25), transparent), 
                      radial-gradient(900px circle at 80% 60%, rgba(0,255,255,0.22), transparent), 
                      radial-gradient(700px circle at 60% 20%, rgba(255,255,0,0.18), transparent);
          filter: blur(120px);
          animation: auroraMove 18s infinite alternate ease-in-out;
        }

        @keyframes auroraMove {
          0% { transform: translateX(-5%) translateY(-3%); }
          100% { transform: translateX(5%) translateY(3%); }
        }

        .shimmer-global {
          position: fixed;
          inset: 0;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.12), transparent);
          mix-blend-mode: overlay;
          opacity: 0.2;
          pointer-events: none;
          animation: shimmerMove 15s infinite;
        }

        @keyframes shimmerMove {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .grain {
          position: fixed;
          inset: 0;
          background-image: url("https://grainy-gradients.vercel.app/noise.svg");
          mix-blend-mode: soft-light;
          opacity: 0.25;
          pointer-events: none;
        }

        .floating-icons {
          position: fixed;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 1;
        }

        .fi {
          position: absolute;
          width: 80px;
          height: 80px;
          background: rgba(255,255,255,0.09);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          box-shadow: 0 0 25px rgba(255, 255, 255, 0.1);
          animation: floatIcon 12s infinite linear;
        }

        .fi:nth-child(1) {
          left: 10%;
          top: 20%;
          animation-delay: 0s;
        }

        .fi:nth-child(2) {
          left: 70%;
          top: 40%;
          animation-delay: 3s;
        }

        .fi:nth-child(3) {
          left: 40%;
          top: 70%;
          animation-delay: 6s;
        }

        .fi:nth-child(4) {
          left: 80%;
          top: 10%;
          animation-delay: 9s;
        }

        @keyframes floatIcon {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-40px) rotate(10deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }

        .glassy-container {
          position: fixed;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }

        :global(.glassy-box) {
          position: absolute;
          width: 120px;
          height: 120px;
          border-radius: 18px;
          background: rgba(255,255,255,0.18);
          border: 2px solid rgba(255,255,255,0.35);
          box-shadow: 0 10px 30px rgba(0,0,0,0.35), 0 0 20px rgba(255,255,255,0.25) inset;
          animation: floatMove 8s ease-in-out infinite, neonPulse 4s ease-in-out infinite;
        }

        @keyframes floatMove {
          0% { transform: translate(0,0) rotate(0deg); }
          25% { transform: translate(-20px,30px) rotate(10deg); }
          50% { transform: translate(30px,-10px) rotate(-8deg); }
          75% { transform: translate(-10px,-25px) rotate(5deg); }
          100% { transform: translate(0,0) rotate(0deg); }
        }

        @keyframes neonPulse {
          0% { box-shadow: 0 10px 30px rgba(0,0,0,0.35), 0 0 20px rgba(255,255,255,0.25) inset, 0 0 0px #d59bff; }
          50% { box-shadow: 0 10px 30px rgba(0,0,0,0.35), 0 0 20px rgba(255,255,255,0.25) inset, 0 0 22px #d59bff; }
          100% { box-shadow: 0 10px 30px rgba(0,0,0,0.35), 0 0 20px rgba(255,255,255,0.25) inset, 0 0 0px #d59bff; }
        }

        :global(.shimmer-box) {
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.25), transparent);
          mix-blend-mode: overlay;
          animation: shimmerSlide 8s infinite linear;
          pointer-events: none;
        }

        @keyframes shimmerSlide {
          0% { transform: translateX(-120%) rotate(15deg); }
          100% { transform: translateX(120%) rotate(15deg); }
        }

        .light-orb-layer {
          position: fixed;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 1;
        }

        :global(.light-orb) {
          position: absolute;
          width: 240px;
          height: 240px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.45), rgba(255,255,255,0));
          filter: blur(40px);
          opacity: 0.55;
          animation: orbFloat 12s infinite linear;
        }

        @keyframes orbFloat {
          0% { transform: translate(0,0) scale(1); }
          50% { transform: translate(50px,-50px) scale(1.2); }
          100% { transform: translate(0,0) scale(1); }
        }

        .halo-ring-layer {
          position: fixed;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 1;
        }

        :global(.halo-ring) {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          border: 2px solid rgba(191, 132, 255, 0.35);
          box-shadow: 0 0 65px rgba(191,132,255,0.4), inset 0 0 60px rgba(191,132,255,0.2);
          filter: blur(0.3px);
          animation: haloSpin linear infinite;
          opacity: 0.45;
        }

        @keyframes haloSpin {
          from { transform: rotate(0deg) scale(1); }
          to { transform: rotate(360deg) scale(1); }
        }

        .matrix-canvas {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0.15;
          pointer-events: none;
          z-index: 1;
        }
      `}</style>
    </>
  );
}