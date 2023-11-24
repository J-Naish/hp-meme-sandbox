'use client';

import { MeshReflectorMaterial } from '@react-three/drei'


function Plane({position, isDesktop=false}) {
  return (
    <mesh 
      rotation={[-Math.PI / 2, 0, 0]}
      position={position}
    >
      <planeGeometry args={[50, 50]} />
      {isDesktop ? (
      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={2048}
        mixBlur={0.8}
        mixStrength={80}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#050505"
        metalness={0.5}
      />
      ) : (
      <meshStandardMaterial
        color="#000000"
        metalness={0.5}
        roughness={1}
      />
      )}
    </mesh>
  )
}


export default Plane;