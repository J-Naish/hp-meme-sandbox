'use client';

import EnvironmentMap from '../../../common/three-d/environment/EnvironmentMap.js';
import Lighting from '../../../common/three-d/lighting/Lighting.js';


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