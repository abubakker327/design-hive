"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloatingShape({ position, color, args }: { position: [number, number, number]; color: string, args: any }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={args} /> 
        <meshPhysicalMaterial 
            color={color} 
            roughness={0} 
            metalness={0.5} 
            transmission={0.5}
            thickness={2}
            opacity={1} 
            transparent 
        />
      </mesh>
    </Float>
  );
}

export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#4f46e5" />
        <pointLight position={[-10, -5, -10]} intensity={2} color="#ec4899" />
        <spotLight position={[0, 10, 0]} intensity={1} angle={0.5} penumbra={1} />
        
        <FloatingShape position={[3, 1, -2]} color="#6366f1" args={[1.5, 0]} />
        <FloatingShape position={[-3, -2, -1]} color="#ec4899" args={[1.2, 0]} />
        <FloatingShape position={[0, 3, -3]} color="#8b5cf6" args={[1, 0]} />
        <FloatingShape position={[-4, 2, -5]} color="#06b6d4" args={[0.8, 0]} />
        
        <Environment preset="city" />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </div>
  );
}
