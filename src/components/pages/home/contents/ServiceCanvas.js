'use client';

import styles from "./ServiceCanvas.module.css";
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { lerp } from 'three/src/math/MathUtils';
import Lighting from "@/components/common/3D/lighting/Lighting.js";
import Glb from "@/components/common/3D/glb/Glb.js";
import EnvironmentMap from "@/components/common/3D/environment/EnvironmentMap.js"
import { useToggleScale } from '@/components/common/3D/useToggleScale';


function ServiceCanvas({ glbUrl, scale, isRotatingRight=false }) {

  return (
    <Canvas camera={{ fov: 30, position: [0, 0, -10]}} className={styles.canvas}>
      <CustomGlb glbUrl={glbUrl} scale={scale} isRotatingRight={isRotatingRight} />
      <Lighting intensity={4} />
      <EnvironmentMap isBright={true} />
    </Canvas>
  );
}



function CustomGlb({ glbUrl, scale, isRotatingRight }) {

  // initialize ref for the group
  const groupRef = useRef();

  // state for pitch rotation of the model
  const thetaRef = useRef(0);

  const [currentScale, targetScale, setCurrentScale, toggleScale] = useToggleScale(scale, 1.5);

  let rotFactor = isRotatingRight ? 1 : -1;

  useFrame(() => {
    if(!groupRef.current) return;

    // rotate the group containing the model
    groupRef.current.rotation.y += 0.005 * rotFactor;
    thetaRef.current += 0.005;
    groupRef.current.rotation.x = 0.5 * Math.sin(thetaRef.current);

    setCurrentScale(l => {
      return l.map((s, i) => lerp(s, targetScale[i], 0.1));
    });
  });

  return(
    <Glb
      glbUrl={glbUrl}
      groupRef={groupRef}
      position={[0, 0, 0]}
      scale={currentScale}
      onClick={toggleScale}
    />
  );
}



export default ServiceCanvas;