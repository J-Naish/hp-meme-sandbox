'use client';

import EnvironmentMap from '@/components/common/3D/environment/EnvironmentMap.js';


export default function CustomEnvironment() {
  return(
    <>
      <EnvironmentMap isDark={true} />
      <color attach="background" args={['#191920']} />
      <fog attach="fog" args={['#191920', 0, 15]} />
    </>
  );
}
