"use client";

import * as THREE from 'three'
import { useEffect, useState } from 'react';
import { Text } from '@react-three/drei';


export default function VideoText({ position, title, src }) {
  const [video] = useState(() => Object.assign(document.createElement('video'), { src: src, crossOrigin: 'Anonymous', loop: true, muted: true }));
  useEffect(() => void video.play(), [video]);
  return (
    <Text fontSize={1} letterSpacing={-0.06} position={position}>
      {title}
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
      </meshBasicMaterial>
    </Text>
  );
}