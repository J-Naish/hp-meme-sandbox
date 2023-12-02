'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import Glb from "../glb/Glb.js";
import Meme from '../logo/Meme.js';


function ProjectedLogo({ position, scale }) {
  return (
    <>
      <group position={position} scale={scale}>
        <rectAreaLight position={[0, 2.2, 0]} rotation={[-Math.PI / 2, 0, 0]} intensity={1} width={1} height={1} />
        <rectAreaLight position={[0, 0.6, 0]} rotation={[Math.PI / 2, 0, 0]} intensity={1} width={1} height={1} />
        <Projector />
        <MemeLogo position={[0, 1.45, 0]} scale={[0.018, 0.018, 0.018]} />
      </group>
    </>
  );
}


function Projector() {

  const glbUrl = '/assets/model/projector.glb';

  return(
    <Glb
      glbUrl={glbUrl}
      scale={[0.2, 0.2, 0.2]}
      position={[0, 0, 0]}
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