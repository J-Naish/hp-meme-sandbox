'use client';

import { useEffect, useState } from 'react';
import { Environment } from '@react-three/drei';


export default function EnvironmentMap({ isDark=false, isBright=false }) {

  // default is dark
  const [envMap, setEnvMap] = useState('/assets/hdri/dark.hdr');

  // switch environment map
  useEffect(() => {
    if(isDark && !isBright) {
      setEnvMap('/assets/hdri/dark.hdr');
    } else if(isBright && !isDark) {
      setEnvMap('/assets/hdri/bright.hdr');
    } else {
      setEnvMap('/assets/hdri/dark.hdr'); // default
    }
  },[isDark, isBright])
  return (
    <Environment files={envMap} />
  );
}