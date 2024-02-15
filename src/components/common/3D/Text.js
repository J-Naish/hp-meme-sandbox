'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';


export default function Text({ title, position, color, scale }) {

  const ref = useRef();

  useFrame((_, delta) => {
    ref.current.rotation.y += delta / 2;
  });

  return (
    <group position={position} scale={scale} ref={ref}>
      <Center>
        <Text3D
          bevelEnabled
          bevelSize={0.01}
          bevelSegments={10}
          bevelThickness={0.01}
          curveSegments={128}
          letterSpacing={-0.03}
          height={0.25}
          font="/assets/font/Inter_Medium_Regular.json"
        >
          {title}
          <meshStandardMaterial
            color={color}
            metalness={0}
            roughness={0.1}
            transparent
          />
        </Text3D>
      </Center>
    </group>
  );
}