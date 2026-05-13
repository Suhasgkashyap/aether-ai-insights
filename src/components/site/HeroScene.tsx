import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, TorusKnot, Icosahedron } from "@react-three/drei";
import { useRef, Suspense } from "react";
import type { Mesh } from "three";

function Core() {
  const ref = useRef<Mesh>(null!);
  useFrame((_, dt) => {
    ref.current.rotation.y += dt * 0.25;
    ref.current.rotation.x += dt * 0.08;
  });
  return (
    <Sphere ref={ref} args={[1.4, 96, 96]}>
      <MeshDistortMaterial
        color="#8B5CF6"
        emissive="#00D9FF"
        emissiveIntensity={0.6}
        distort={0.45}
        speed={2}
        roughness={0.15}
        metalness={0.9}
      />
    </Sphere>
  );
}

function Ring() {
  const ref = useRef<Mesh>(null!);
  useFrame((_, dt) => { ref.current.rotation.x += dt * 0.4; ref.current.rotation.z += dt * 0.2; });
  return (
    <TorusKnot ref={ref} args={[2.2, 0.04, 200, 16]}>
      <meshStandardMaterial color="#22D3EE" emissive="#22D3EE" emissiveIntensity={1.2} />
    </TorusKnot>
  );
}

export function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#00D9FF" />
        <pointLight position={[-5, -3, 3]} intensity={2} color="#FF4D9D" />
        <pointLight position={[0, 5, -5]} intensity={1.5} color="#8B5CF6" />
        <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
          <Core />
        </Float>
        <Ring />
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Icosahedron args={[0.25, 0]} position={[2.5, 1.2, 0]}>
            <meshStandardMaterial color="#FF4D9D" emissive="#FF4D9D" emissiveIntensity={1} wireframe />
          </Icosahedron>
        </Float>
        <Float speed={1.6} rotationIntensity={1} floatIntensity={2}>
          <Icosahedron args={[0.18, 0]} position={[-2.6, -1, 0.5]}>
            <meshStandardMaterial color="#00D9FF" emissive="#00D9FF" emissiveIntensity={1} wireframe />
          </Icosahedron>
        </Float>
      </Suspense>
    </Canvas>
  );
}
