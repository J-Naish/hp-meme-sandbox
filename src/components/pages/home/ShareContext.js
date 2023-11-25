'use client';

import React, { useContext, createContext, useState, useRef } from 'react';


const ShareContext = createContext();

const useShareContext = () => useContext(ShareContext);


function ShareContextProvider({ children }) {

  const [sliderValue, setSliderValue] = useState(0);

  const [isBottomReached, setIsBottomReached] = useState(false);

  const logoScale = useRef([1, 1, 1]);

  const defaultCameraPosY = useRef(1.5);

  const [isDisplayClicked, setIsDisplayClicked] = useState(false);

  const targetCameraPos = useRef([0, 0, 0]);
  const targetCameraRot = useRef([0, 0, 0]);


  const variables = {
    sliderValue,
    setSliderValue,
    isBottomReached,
    setIsBottomReached,
    logoScale,
    defaultCameraPosY,
    isDisplayClicked,
    setIsDisplayClicked,
    targetCameraPos,
    targetCameraRot,
  }

  return (
    <ShareContext.Provider value={variables}>
      {children}
    </ShareContext.Provider>
  );
}


export { useShareContext, ShareContextProvider};