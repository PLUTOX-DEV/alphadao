import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

const SpinningImage = ({ texturePath, position }) => {
  const meshRef = useRef();
  const texture = useTexture(texturePath);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRef.current.rotation.y += 0.005; // Slow Y rotation
    meshRef.current.position.y = position[1] + Math.sin(t * 2) * 0.2; // Floating
  });

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[2, 2]} />
      <meshBasicMaterial map={texture} transparent={true} side={THREE.DoubleSide} />
    </mesh>
  );
};

const ThreeLogoScene = () => {
  return (
    <div className="h-screen bg-black">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={1.2} />
        <OrbitControls enableZoom={false} />
        <SpinningImage texturePath="src/assets/backgr/ton_logo_pack/ton_symbol.png" position={[-2.5, 0, 0]} />
        <SpinningImage texturePath="src/assets/Daologo.png" position={[2.5, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default ThreeLogoScene;
