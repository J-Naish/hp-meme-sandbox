'use client';

import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from 'three';
import { easing } from 'maath';
import { useShareContext } from "../ShareContext.js";


function CameraController() {


  // convert degree to radian
  const getRad = useCallback((deg) => deg * Math.PI / 180, []);

  const {
    sliderValue,
    defaultCameraPosY,
    isBottomReached,
    isDisplayClicked,
    targetCameraPos,
    targetCameraRot,
  } = useShareContext();


  // get camera position Y
  const cameraPosY = defaultCameraPosY.current;

  // get the max radius
  const maxRadius = 4;

  const radius = useRef(maxRadius);



  const [scrollY, setScrollY] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  // get the scrollY value
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    // get client height
    setClientHeight(window.innerHeight);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);




  const { camera } = useThree();
  const prevScrollY = useRef(scrollY);

  const minRadius = 1;
  const zoomFactor = 8;

  const cameraLerpFactor = 0.1;


  // get the desired camera transform only when the slider value is changed
  const { desiredZ, desiredX, desiredRotationY } = useMemo(() => ({
    desiredZ: radius.current * Math.cos(getRad(sliderValue)),
    desiredX: radius.current * Math.sin(getRad(sliderValue)),
    desiredRotationY: getRad(sliderValue),
  }), [sliderValue, radius.current, getRad]);


  // update the radius
  useEffect(() => {
    if (!isBottomReached) radius.current = (maxRadius);
  }, [isBottomReached]);


  useFrame((state, dt) => {

    if(isDisplayClicked) {
      easing.damp3(state.camera.position, new THREE.Vector3(...targetCameraPos.current), 1.5, dt);
      camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, targetCameraRot.current[1], 0.01);
      return;
    }


    // update the camera position
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, desiredZ, cameraLerpFactor);
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, desiredX, cameraLerpFactor);
    camera.position.y = cameraPosY;
    // update the camera rotation
    camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, desiredRotationY, cameraLerpFactor);

    // get scroll value
    const deltaY = scrollY - prevScrollY.current;
    const scrollProgress = deltaY / (document.documentElement.scrollHeight - clientHeight);
    prevScrollY.current = scrollY;

    // update the radius to zoom in
    if(isBottomReached) {
      const newRadius = radius.current + ((minRadius - radius.current) * (scrollProgress * zoomFactor));
      radius.current = THREE.MathUtils.clamp(newRadius, minRadius, maxRadius);
    }
  });


  return (
    null
  );
}


export default CameraController;