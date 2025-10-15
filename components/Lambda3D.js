"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text3D, Center } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function Lambda3D() {
  return (
    <div style={{ width: "550px", height: "550px" }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} color="#ffffffff" />
        <directionalLight
            position={[-3, 2, 5]}
            intensity={2}
            color="#ffffff"
        />
        <pointLight
            position={[5, 0, 3]}
            intensity={0.8}
            color="#9fc5ff"
        />
        <spotLight
            position={[-4, 4, 3]}
            angle={0.6}
            penumbra={0.4}
            intensity={1.5}
            color="#d8e6ff"
        />
        {/* 3D Lambda */}
        <Center>
          <RotatingLambda />
        </Center>

        {/* dreamy effect */}
        <EffectComposer>
          <Bloom intensity={0.05} luminanceThreshold={0} />
        </EffectComposer>

        {/* Allow mouse interaction */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

function RotatingLambda() {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.005; // slow rotation
  });

  return (
    <Text3D
      ref={ref}
      font="/fonts/helvetiker_regular.typeface.json" // You’ll need this font in public/fonts
      size={2}
      height={0.4}
      curveSegments={12}
      bevelEnabled
      bevelThickness={0.05}
      bevelSize={0.03}
      bevelSegments={5}
    >
      λ
      <meshStandardMaterial color="white" roughness={0.3} metalness={0.1} />
    </Text3D>
  );
}
