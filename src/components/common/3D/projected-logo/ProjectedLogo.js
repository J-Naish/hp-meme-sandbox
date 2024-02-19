'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import Meme from '../logo/Meme.js';


function ProjectedLogo({ position, scale }) {
  return (
    <>
      <group position={position} scale={scale}>
        <Projector />
        <MemeLogo position={[0, 1.45, 0]} scale={[0.018, 0.018, 0.018]} />
      </group>
    </>
  );
}


function Projector() {
  const { nodes } = useGLTF("/assets/model/projector.glb", true);
  return(
    <group scale={[0.19, 0.19, 0.19]}>
      <mesh geometry={nodes.body1.geometry}>
        <BodyMaterial />
      </mesh>
      <mesh geometry={nodes.body2.geometry}>
        <BodyMaterial />
      </mesh>
      <mesh geometry={nodes.body3.geometry}>
        <BodyMaterial />
      </mesh>
      <mesh geometry={nodes.body4.geometry}>
        <BodyMaterial />
      </mesh>
      <mesh geometry={nodes.body5.geometry}>
        <BodyMaterial />
      </mesh>
      <mesh geometry={nodes.light1.geometry}>
        <LightMaterial emissiveIntensity={2} />
      </mesh>
      <mesh geometry={nodes.light2.geometry}>
        <LightMaterial emissiveIntensity={2} />
      </mesh>
      <mesh geometry={nodes.light3.geometry}>
        <LightMaterial />
      </mesh>
      <mesh geometry={nodes.light4.geometry}>
        <LightMaterial />
      </mesh>
      <mesh geometry={nodes.light5.geometry}>
        <LightMaterial />
      </mesh>
      <mesh geometry={nodes.light6.geometry}>
        <LightMaterial />
      </mesh>
    </group>
  );
}

function BodyMaterial() {
  return (
    <meshStandardMaterial
      color="#102540"
      metalness={0.9}
      roughness={0.4}
    />
  );
}
function LightMaterial({ emissiveIntensity=0.3 }) {
  return (
    <meshStandardMaterial
      color="#ffffff"
      metalness={0.8}
      roughness={0.4}
      emissive={'#ffffff'}
      emissiveIntensity={emissiveIntensity}
    />
  );
}



// mesh component of the Meme logo
function MemeLogo({ position, scale }) {

  const groupRef = useRef();
  // rotate the object
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.003;
      groupRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group position={position} scale={scale} ref={groupRef}>
      <Meme
        position={[0, 0, 0]}
        scale={[1, 1, 1]}
        letterColor={'#ffffff'}
        baseColor={'#252525'}
      />
    </group>
  );
}


export default ProjectedLogo;