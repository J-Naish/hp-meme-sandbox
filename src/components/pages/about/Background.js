'use client';

import styles from './Background.module.css';
import { useEffect } from 'react';
import { Canvas, useThree, extend, useFrame } from '@react-three/fiber';
import { Fog } from 'three';
import Glb from '@/components/common/3D/glb/Glb.js';
import ProjectedLogo from '@/components/common/3D/projected-logo/ProjectedLogo.js';
import Lighting from '@/components/common/3D/lighting/Lighting.js';
import EnvironmentMap from '@/components/common/3D/environment/EnvironmentMap.js'


function Background() {
  return (
    <div className={styles.container}>
      <div className={styles.canvas}>
        <Canvas camera={{ fov: 60, near: 0.1, far: 300, position: [0, -0.1, 4.5], rotation: [0, 0, 0] }}>
          <Ground  position={[0, -1.45, -0.8]}/>
          <ProjectedLogo position={[0, -1.5, 0]} scale={[1, 1, 1]} />
          <CustomEnvironment />
          <CameraController />
        </Canvas>
      </div>
    </div>
  );
}


function Ground() {

  const glbUrl = '/assets/model/ground.glb';

  return(
    <Glb
      glbUrl={glbUrl}
      scale={[0.1, 0.1, 0.1]}
      position={[0, -1.45, -0.8]}
    />
  );
}



function CustomEnvironment() {
  return (
    <>
      <Lighting intensity={0.01} />
      <SceneFog color={0x000000} />
      <EnvironmentMap isDark={true} />
    </>
  );
}



extend({ Fog });
function SceneFog({ color }) {
  const { scene } = useThree();
  
  useEffect(() => {
    scene.fog = new Fog(color, 5, 7.5);
  }, [scene, color]);

  return null;
};



// component to control the camera
function CameraController() {

  // access the camera object
  const { camera } = useThree();

  // function to calculate the camera's z position based on window width
  const calculateZPosition = (width) => {
    let posZ = 5.5 - ((width - 576) / (1124 - 576)) * (5.5 - 4.5);
    return Math.min(5.5, Math.max(4.5, posZ));
  };

  // update the camera's z position on every frame
  useFrame(() => {
    camera.position.z = calculateZPosition(window.innerWidth);
  });

  // adjust the camera's position on window resize
  useEffect(() => {
    const handleResize = () => {
      camera.position.z = calculateZPosition(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [camera]);

  return null;
}



export default Background;