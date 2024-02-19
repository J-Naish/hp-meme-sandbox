"use client";


import { useState, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, Plane, MeshReflectorMaterial } from '@react-three/drei';
import { useGetWindowWidth } from '@/components/common/utils/useGetWindowWidth';
import styles from "./Hero.module.css";


export default function Hero({ children, lookAtY }) {
  return (
    <div className={styles.container}>
      <Canvas className={styles.canvas} gl={{ alpha: false }} camera={{ position: [0, 20, 50], fov: 15 }}>
        <CustomEnvironment />
        <MouseCameraShake lookAtY={lookAtY} />
        <Ground />
        {children}
      </Canvas>
    </div>
  );
}


function CustomEnvironment() {
  const { fogProp } = useResponsiveProps();
  return (
    <>
      <color attach="background" args={['black']} />
      <fog attach="fog" args={['black', ...fogProp]} />
      <ambientLight intensity={0.6} />
      <spotLight position={[0, 10, 0]} intensity={0.3} />
      <directionalLight position={[-50, 0, -40]} intensity={0.7} />
    </>
  );
}


function Ground() {
  const [normal, roughness] = useTexture(['/assets/textures/ground/normal.jpg', '/assets/textures/ground/roughness.jpg']);
  return (
    <Plane rotation={[-Math.PI / 2, 0, Math.PI / 2]} args={[25, 10]}>
      <MeshReflectorMaterial
        resolution={512}
        mirror={0.5}
        blur={[400, 100]}
        mixBlur={10}
        mixStrength={1.5}
        color="#a0a0a0"
        metalness={0.4}
        roughnessMap={roughness}
        normalMap={normal}
        normalScale={[4, 4]}
      />
    </Plane>
  );
}


function MouseCameraShake({ lookAtY = 0.5 }) {
  const { cameraPosZ, minCameraPosY } = useResponsiveProps();
  const [vec] = useState(() => new THREE.Vector3())
  useFrame((state) => {
    state.camera.position.lerp(vec.set(state.pointer.x * 5, Math.max(1 + state.pointer.y, minCameraPosY), cameraPosZ), 0.05);
    state.camera.lookAt(0, lookAtY, 0);
  })
  return null;
}



const useResponsiveProps = () => {

  const [fogProp, setFogProp] = useState([10, 11.5]);
  const [cameraPosZ, setCameraPosY] = useState(8);
  const [minCameraPosY, setMinCameraPosY] = useState(0.4);

  const windowWidth = useGetWindowWidth();

  useEffect(() => {
    if(windowWidth > 1024) {
      setFogProp([10, 11.5]);
      setCameraPosY(8);
      setMinCameraPosY(0.4);
    } else if(windowWidth <= 1024 && windowWidth > 480) {
      setFogProp([14, 15.5]);
      setCameraPosY(12);
      setMinCameraPosY(0.6);
    } else if(windowWidth <= 480) {
      setFogProp([19, 20.5]);
      setCameraPosY(17);
      setMinCameraPosY(0.8);
    }
  }, [windowWidth]);

  return { fogProp, cameraPosZ, minCameraPosY };

}