"use client";

import {
  Canvas,
  extend,
  ThreeElement,
  useFrame,
  useThree,
} from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import colors from "nice-color-palettes";
import { useRef } from "react";
import * as THREE from "three";
import fragmentShader from "../shaders/fragment.glsl";
import vertexShader from "../shaders/vertex.glsl";

// Grab a random palette
let r = Math.floor(Math.random() * colors.length);
r = 86;

console.log(r);

const GradientMaterial = shaderMaterial(
  {
    uTime: 0,
    uColors: colors[r]?.map((c) => new THREE.Color(c)),
  },
  vertexShader,
  fragmentShader,
);

declare module "@react-three/fiber" {
  interface ThreeElements {
    gradientMaterial: ThreeElement<typeof GradientMaterial>;
  }
}

extend({ GradientMaterial });

function Plane() {
  const matRef = useRef<any>(null);

  useFrame(({ clock }) => {
    if (matRef.current) {
      // Slower time multiplier for a more relaxed, premium feel
      matRef.current.uTime = clock.elapsedTime * 0.15;
    }
  });

  return (
    <mesh position={[0, 0, 0]}>
      {/* Drastically reduced vertex count for performance */}
      <planeGeometry args={[8, 8, 128, 128]} />
      <gradientMaterial ref={matRef} wireframe={false} />
    </mesh>
  );
}

function CameraController() {
  const { camera } = useThree();

  useFrame(() => {
    camera.position.set(0, 0, 2);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function Background() {
  return (
    <div id="background" className="h-full w-full fixed inset-0 -z-10 bg-black">
      <Canvas camera={{ position: [0, 0, 2], fov: 45 }}>
        <CameraController />
        <Plane />
      </Canvas>
    </div>
  );
}
