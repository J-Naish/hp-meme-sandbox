'use client';

import styles from "./Top.module.css";
import { Canvas } from '@react-three/fiber';
import CustomEnvironment from '@/components/common/3D/environment/CustomEnvironment.js';
import Objects from "./Objects.js";
import CameraController from "./CameraController.js";
import CameraControlUI from "./CameraControlUI.js";
import Responsive3D from "./Responsive3D.js";
import { useShareContext } from "../ShareContext.js";


function Top() {

  const { defaultCameraPos } = useShareContext();

  const defaultCameraRot = [0, 0, 0]

  return(
    <div className={styles.container}>
      <Canvas camera={{ fov: 85 ,position: defaultCameraPos, rotation: defaultCameraRot}}>
        <CustomEnvironment />
        <Objects />
        <CameraController />
        <Responsive3D />
      </Canvas>
      <CameraControlUI />
    </div>
  );
}




export default Top;