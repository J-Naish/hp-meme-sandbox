"use client";


import * as THREE from 'three'
import { useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, Plane, MeshReflectorMaterial } from '@react-three/drei';
import styles from "./Hero.module.css";


export default function Hero({ children }) {
  return (
    <div className={styles.container}>
      <Canvas className={styles.canvas} gl={{ alpha: false }} camera={{ position: [0, 20, 50], fov: 15 }}>
        <CustomEnvironment />
        <MouseCameraShake />
        <Ground />
        {children}
      </Canvas>
    </div>
  );
}


function CustomEnvironment() {
  return (
    <>
      <color attach="background" args={['black']} />
      <fog attach="fog" args={['black', 10, 11.5]} />
      <ambientLight intensity={0.6} />
      <spotLight position={[0, 10, 0]} intensity={0.3} />
      <directionalLight position={[-50, 0, -40]} intensity={0.7} />
    </>
  );
}


function Ground() {
  const [normal, roughness] = useTexture(['/assets/textures/ground/normal.jpg', '/assets/textures/ground/roughness.jpg']);
  return (
    <Plane rotation={[-Math.PI / 2, 0, Math.PI / 2]} args={[10, 10]}>
      <MeshReflectorMaterial
        resolution={512}
        mirror={0.5}
        blur={[400, 100]}
        mixBlur={6}
        mixStrength={1.5}
        color="#a0a0a0"
        metalness={0.4}
        roughnessMap={roughness}
        normalMap={normal}
        normalScale={[2, 2]}
      />
    </Plane>
  );
}


function MouseCameraShake() {
  const [vec] = useState(() => new THREE.Vector3())
  useFrame((state) => {
    state.camera.position.lerp(vec.set(state.pointer.x * 5, 1 + state.pointer.y, 8), 0.05);
    state.camera.lookAt(0, 1, 0);
  })
  return null;
}