"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Icosahedron, Edges } from "@react-three/drei";
import * as THREE from "three";

function Mesh() {
  const groupRef = useRef<THREE.Group>(null!);
  const targetRotation = useRef({ x: 0, y: 0 });
  const currentRotation = useRef({ x: 0, y: 0 });
  const { size } = useThree();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to [-0.5, 0.5]
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      targetRotation.current.x = ny * 0.6;
      targetRotation.current.y = nx * 0.6;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((_, delta) => {
    // Smooth lerp toward mouse position
    const lerpFactor = 1 - Math.pow(0.02, delta);
    currentRotation.current.x +=
      (targetRotation.current.x - currentRotation.current.x) * lerpFactor;
    currentRotation.current.y +=
      (targetRotation.current.y - currentRotation.current.y) * lerpFactor;

    // Auto rotation
    groupRef.current.rotation.x = currentRotation.current.x;
    groupRef.current.rotation.y += delta * 0.15 + currentRotation.current.y * 0.01;
  });

  const scale = size.width < 768 ? 1.0 : 1.4;

  return (
    <group ref={groupRef} scale={scale}>
      {/* Outer icosahedron — edges only */}
      <Icosahedron args={[1, 1]}>
        <meshBasicMaterial visible={false} />
        <Edges
          scale={1}
          threshold={1}
          color={new THREE.Color("#94a3b8")}
          lineWidth={1}
        />
      </Icosahedron>

      {/* Inner smaller icosahedron, slightly rotated */}
      <Icosahedron args={[0.55, 1]} rotation={[0.5, 0.8, 0.2]}>
        <meshBasicMaterial visible={false} />
        <Edges
          scale={1}
          threshold={1}
          color={new THREE.Color("#3b82f6")}
          lineWidth={0.8}
        />
      </Icosahedron>

      {/* Center sphere dot */}
      <mesh>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshBasicMaterial color="#3b82f6" />
      </mesh>
    </group>
  );
}

export default function WireframeMesh() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 40 }}
      style={{ background: "transparent" }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 2]}
    >
      <Mesh />
    </Canvas>
  );
}
