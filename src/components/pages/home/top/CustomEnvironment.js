'use client';

import EnvironmentMap from '../../../common/three-d/environment/EnvironmentMap.js';


function CustomEnvironment() {
  return(
    <>
      <EnvironmentMap isDark={true} />
      <color attach="background" args={['#191920']} />
      <fog attach="fog" args={['#191920', 0, 15]} />
    </>
  );
}


export default CustomEnvironment;