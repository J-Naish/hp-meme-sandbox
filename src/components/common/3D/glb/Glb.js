'use client';

import { Suspense } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


function Glb({ glbUrl, groupRef ,position, scale, rotation, onClick }) {

  // load the glb file
  const glb = useLoader(GLTFLoader, glbUrl);

  // clone the scene
  const scene = glb.scene.clone(true);

  return(
    <Suspense fallback={null}>
      <group
        ref={groupRef}
        position={position}
        scale={scale}
        rotation={rotation}
        onClick={onClick}
      >
        <primitive
          object={scene}
        />
      </group>
    </Suspense>
  );
}


export default Glb;