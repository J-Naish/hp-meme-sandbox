'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import Glb from "../glb/Glb.js";


function ProjectedLogo({ position, scale }) {
  return (
    <>
      <group position={position} scale={scale}>
        <rectAreaLight position={[0, 2.2, 0]} rotation={[-Math.PI / 2, 0, 0]} intensity={3} width={1.5} height={1.5} />
        <rectAreaLight position={[0, 0.6, 0]} rotation={[Math.PI / 2, 0, 0]} intensity={3} width={1.5} height={1.5} />
        <Projector />
        <MemeLogo position={[0, 1.45, 0]} scale={[0.08, 0.08, 0.08]} />
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

  // import the glb file
  const glbUrl = '/assets/model/meme.glb';

  const groupRef = useRef();

  // rotate the object
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.003;
      groupRef.current.rotation.y += 0.003;
    }
  });

  return (
    <Glb
      glbUrl={glbUrl}
      groupRef={groupRef}
      position={position}
      scale={scale}
    />
  );
}


export default ProjectedLogo;