'use client';

function Lighting({ intensity=1 }) {
  return(
    <>
      <ambientLight intensity={0.7*intensity} color={0xffffff} />
    </>
  );
}


export default Lighting;