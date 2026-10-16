"use client";

import React, { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Rotating geometric sphere with wireframe & digital nodes
function DigitalSphere({ isReducedMotion = false }) {
  const outerSphereRef = useRef();
  const innerIcosaRef = useRef();
  const ringRef = useRef();

  useFrame((state, delta) => {
    if (isReducedMotion) return;
    if (outerSphereRef.current) {
      outerSphereRef.current.rotation.y += delta * 0.25;
      outerSphereRef.current.rotation.x += delta * 0.08;
    }
    if (innerIcosaRef.current) {
      innerIcosaRef.current.rotation.y -= delta * 0.35;
      innerIcosaRef.current.rotation.z += delta * 0.15;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.18;
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2 + 0.8;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central geometric core */}
      <mesh ref={innerIcosaRef}>
        <icosahedronGeometry args={[1.3, 1]} />
        <meshBasicMaterial
          color="#2563EB"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Outer nodes wireframe sphere */}
      <mesh ref={outerSphereRef}>
        <sphereGeometry args={[1.9, 16, 16]} />
        <meshBasicMaterial
          color="#3B82F6"
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>

      {/* Orbital tech ring */}
      <mesh ref={ringRef} rotation={[1, 0.4, 0]}>
        <torusGeometry args={[2.3, 0.02, 16, 64]} />
        <meshBasicMaterial color="#60A5FA" transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

// Tech node points distributed in 3D space
function ConnectedNodes({ count = 35 }) {
  const pointsRef = useRef();

  const [positions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 1.4 + Math.random() * 1.3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return [pos];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#2563EB"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

export default function TechHeroCanvas() {
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    setMounted(true);

    // Check for prefers-reduced-motion
    if (typeof window !== "undefined" && window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReducedMotion(mediaQuery.matches);
      const listener = (e) => setReducedMotion(e.matches);
      mediaQuery.addEventListener("change", listener);
      return () => mediaQuery.removeEventListener("change", listener);
    }
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full min-h-[340px] sm:min-h-[420px] flex items-center justify-center">
        <div className="w-48 h-48 rounded-full border border-blue-200/50 bg-blue-50/30 animate-pulse flex items-center justify-center">
          <div className="w-24 h-24 rounded-full border border-blue-300/60" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[480px] flex items-center justify-center select-none pointer-events-none sm:pointer-events-auto">
      {/* Subtle background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-72 h-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="w-48 h-48 rounded-full bg-blue-200/25 blur-2xl -translate-y-6" />
      </div>

      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#60A5FA" />
        <DigitalSphere isReducedMotion={reducedMotion} />
        <ConnectedNodes count={32} />
      </Canvas>

      {/* Decorative tech badge overlay */}
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/90 shadow-sm text-xs font-medium text-slate-700 flex items-center gap-2 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
        <span>Génie Informatique & Systèmes</span>
      </div>
    </div>
  );
}

