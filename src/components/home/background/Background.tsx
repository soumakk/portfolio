"use client";

import {
  Canvas,
  extend,
  ThreeElement,
  useFrame,
  useThree,
} from "@react-three/fiber";
import { OrbitControls, shaderMaterial } from "@react-three/drei";
import colors from "nice-color-palettes";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import fragmentShader from "../shaders/fragment.glsl";
import vertexShader from "../shaders/vertex.glsl";

// Grab a random palette
let r = Math.floor(Math.random() * colors.length);
r = 86;
// r = 40;
// r = 70;
// r = 96;

console.log(r);

const GradientMaterial = shaderMaterial(
  {
    uTime: 0,
    uColors: colors[r]?.map((c) => new THREE.Color(c)),
    uPointer: new THREE.Vector2(),
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
  const pointer = useRef(new THREE.Vector2());

  useEffect(() => {
    const handleMove = (e) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useFrame(({ clock }) => {
    if (matRef.current) {
      matRef.current.uPointer.lerp(pointer.current, 0.03);

      // Slower time multiplier for a more relaxed, premium feel
      matRef.current.uTime = clock.elapsedTime * 0.2;
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

export default function Background() {
  return (
    <div id="background" className="h-full w-full fixed inset-0 -z-10 bg-black">
      <Canvas camera={{ position: [0, 0, 2], fov: 45 }}>
        {/*<OrbitControls />*/}
        <Plane />
      </Canvas>
    </div>
  );
}
