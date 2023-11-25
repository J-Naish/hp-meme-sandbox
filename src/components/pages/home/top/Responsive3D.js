'use client';

import { useEffect } from "react";
import { useShareContext } from "../ShareContext.js";


// comp for adjust scale and camera pos based on window width
function Responsive3D() {

  const { logoScale, defaultCameraPosY } = useShareContext();


  useEffect(() => {
    // calculate scale based on window width
    const calculateScaleAndCameraPos = () => {
      const windowWidth = window.innerWidth;
      const maxWidth = 1728;
      const minWidth = 400;
      const maxScale = 1;
      const minScale = 0.8;

      // calculate scale
      const scaleWidthFactor = (windowWidth - minWidth) / (maxWidth - minWidth);
      const newScale = Math.max(minScale, minScale + scaleWidthFactor * (maxScale - minScale));

      // update scale
      logoScale.current = [newScale, newScale, newScale];


      // calculate camera Y position
      const maxPosY = 1.5;
      const minPosY = 1.1;
      // calculate camera position Y
      const cameraPosY = minPosY + (maxPosY - minPosY) * scaleWidthFactor;

      // update camera Y position while keeping X and Z constant
      defaultCameraPosY.current = cameraPosY;
    };

    calculateScaleAndCameraPos();

    window.addEventListener('resize', calculateScaleAndCameraPos);
    return () => window.removeEventListener('resize', calculateScaleAndCameraPos);
  }, [defaultCameraPosY, logoScale]);

  return null;
}


export default Responsive3D;