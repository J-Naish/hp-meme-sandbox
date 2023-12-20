"use client";

import styles from "./ScrollableCanvas.module.css";
import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from 'three';
import Lighting from "@/components/common/3D/lighting/Lighting.js";
import EnvironmentMap from "@/components/common/3D/environment/EnvironmentMap.js";
import Glb from "@/components/common/3D/glb/Glb.js";



// canvas for the service detail page background
function ScrollableCanvas({ glbUrl, scale }) {

  // hide scrollbar
  useEffect(() => {
    // add a class to body when this component mounts
    document.body.classList.add(styles.hideScrollbar);
    // remove the class when this component unmounts
    return () => {
      document.body.classList.remove(styles.hideScrollbar);
    };
  }, []);


  return (
    <>
    <div className={styles.container}>
      <ServiceDetailCanvas glbUrl={glbUrl} scale={scale} />
    </div>
    </>
  )
}



function ServiceDetailCanvas({ glbUrl, scale }) {

  const [scrollY, setScrollY] = useState(0);
  // const [cameraPosY, setCameraPosY] = useState(2);
  const [clientHeight, setClientHeight] = useState(0);


  useEffect(() => {


    // get the scrollY value
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollY(scrollY);

    }

    window.addEventListener("scroll", handleScroll);

    setClientHeight(window.innerHeight);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }

  }, []);


  return (
    <div className={styles.canvas}>
      <Canvas camera={{ fov: 65, position: [0, 2, -3]}} className={styles.canvasContent}>
        <CustomGlb glbUrl={glbUrl} scale={scale} scrollY={scrollY} />
        <Lighting intensity={5} />
        <CameraController scrollY={scrollY} clientHeight={clientHeight} />
        <EnvironmentMap isBright={true} />
      </Canvas>
    </div>
  );
}



function CameraController({ scrollY, clientHeight }) {
  const { camera } = useThree();

  useEffect(() => {
    // update the camera position based on the scrollY value
    const cameraPosY = 2 - 4 * (scrollY / (document.documentElement.scrollHeight - clientHeight));
    camera.position.y = cameraPosY;

    // make camera always look at the origin
    camera.lookAt(new THREE.Vector3(0, 0, 0));

  }, [scrollY, clientHeight, camera]);

  return null;
}



function CustomGlb({ glbUrl, scale, scrollY }) {

  // initialize ref for the group
  const groupRef = useRef();


  useFrame(() => {

    // define the position X of the group
    let posX = 0;

    // posX must not be less than 0
    if (window.innerWidth > 1025) {
      // calculate the posX using the original equation when the condition is met
      posX = (window.innerWidth - 576) / 1124;
    }

    // define the scale equation
    let scaleFactor = 0.6 + ((window.innerWidth - 576) / 1124) * 0.3;

    if(groupRef.current) {

      groupRef.current.rotation.y += 0.002;

      // update the position X according to the client width
      groupRef.current.position.x = posX;

      // update the scale according to the client width
      groupRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
    }
  })

  return(
    <Glb
      glbUrl={glbUrl}
      groupRef={groupRef}
      scale={scale}
      position={[1, 0, 0]}
    />
  );
}



export default ScrollableCanvas;