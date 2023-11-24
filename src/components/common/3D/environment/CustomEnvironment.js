'use client';

import React from 'react';
import EnvironmentMap from './EnvironmentMap.js';
import Lighting from '../lighting/Lighting.js';


function CustomEnvironment() {
  return(
    <>
      <EnvironmentMap isDark={true} />
      <color attach="background" args={['#191920']} />
      <Lighting />
      <fog attach="fog" args={['#191920', 0, 15]} />
    </>
  );
}


export default CustomEnvironment;