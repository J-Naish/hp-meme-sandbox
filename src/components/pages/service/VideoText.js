"use client";

import { Suspense } from 'react';
import { Text, useVideoTexture } from '@react-three/drei';


export default function VideoText({ position, title, src }) {
  const texture = useVideoTexture(src);
  return (
    <Suspense fallback={null}>
      <Text fontSize={1} letterSpacing={-0.06} position={position}>
        {title}
        <meshBasicMaterial map={texture} toneMapped={false} />
      </Text>
    </Suspense>
  );
}