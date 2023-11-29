'use client';

import EnvironmentMap from '@/components/common/3D/environment/EnvironmentMap.js';


export default function CustomEnvironment() {
  return(
    <>
      <EnvironmentMap isDark={true} />
      <color attach="background" args={['#151515']} />
      <fog attach="fog" args={['#151515', 0, 12]} />
    </>
  );
}
