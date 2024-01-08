'use client';



function Plane({position}) {
  return (
    <mesh 
      rotation={[-Math.PI / 2, 0, 0]}
      position={position}
    >
      <planeGeometry args={[45, 18]} />
      <meshStandardMaterial
        color="#000000"
        metalness={0.5}
        roughness={1}
      />
    </mesh>
  )
}


export default Plane;