'use client';

function Lighting({ intensity=1 }) {
  return(
    <>
      <directionalLight position={[2, -2, -3]} intensity={0.2*intensity} color={0xffffff} />
      <directionalLight position={[-2, -2, -3]} intensity={0.2*intensity} color={0xffffff} />
      <directionalLight position={[0, 2, 2]} intensity={0.4*intensity} color={0xffffff} />
      <ambientLight intensity={0.7*intensity} color={0xffffff} />
    </>
  );
}


export default Lighting;