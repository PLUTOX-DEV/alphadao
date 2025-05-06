import { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedLogos = () => {
  const tonRef = useRef(null);
  const daoRef = useRef(null);

  useEffect(() => {
    // TON Symbol animations
    gsap.fromTo(
      tonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
    );

    gsap.to(tonRef.current, {
      rotation: 360,
      repeat: -1,
      ease: "linear",
      duration: 20,
      transformOrigin: "50% 50%",
    });

    // DAO Logo animations
    gsap.fromTo(
      daoRef.current,
      { y: -10 },
      {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      }
    );

    gsap.to(daoRef.current, {
      scale: 1.05,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="flex justify-center items-center gap-10 h-screen bg-gray-950">
      <img
        ref={tonRef}
        src="src\assets\backgr\ton_logo_pack\ton_symbol.png"
        alt="TON Symbol"
        className="w-28 h-28 hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <img
        ref={daoRef}
        src="src\assets\Daologo.png"
        alt="DAO Logo"
        className="w-28 h-28 hover:scale-110 transition-transform duration-300 ease-in-out"
      />
    </div>
  );
};

export default AnimatedLogos;
