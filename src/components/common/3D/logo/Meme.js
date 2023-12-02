'use client';

import { useGLTF } from "@react-three/drei";

export default function Meme({ position, scale, letterColor, baseColor, ref}) {
  return(
    <group position={position} scale={scale} ref={ref}>
      <Letters color={letterColor} />
      <Base color={baseColor} />
    </group>
  )
}


const metalness = 0.5;
const roughness = 0.45;

function Letters ({ color='#ffffff' }) {
  const { nodes } = useGLTF('/assets/model/meme-letters.glb', true);
  return(
    <group position={[0,0,0]} scale={[1,1,1]}>
      <mesh geometry={nodes.model.geometry}>
        <meshStandardMaterial
          color={color}
          metalness={metalness}
          roughness={roughness}
        />
      </mesh>
    </group>
  )
}

function Base ({ color='#252525' }) {
  const { nodes } = useGLTF('/assets/model/meme-base.glb', true);
  return(
    <group position={[0,0,0]} scale={[1,1,1]}>
      <mesh geometry={nodes.model.geometry}>
        <meshStandardMaterial
          color={color}
          metalness={metalness}
          roughness={roughness}
        />
      </mesh>
    </group>
  )
}