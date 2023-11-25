'use client';

import { useRouter } from 'next/navigation';
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Image } from '@react-three/drei'
import { easing } from 'maath';
import { isDesktop } from 'react-device-detect';
import ProjectedLogo from '@/components/common/3D/projected-logo/ProjectedLogo.js';
import { linkMap } from '@/map/linkMap.js';
import { useShareContext } from "../ShareContext.js";
import Plane from '@/components/common/3D/plane/Plane.js';


// function for getting coordinates of each display
const getCoordinate = (theta, radius) => {
  const coordinate = [];
  const x = radius * Math.sin(theta);
  const y = 2.2;
  const z = radius * Math.cos(theta);
  coordinate.push(x, y, z);
  return coordinate;
}

const radius = 5;
const targetPosRadius = 2;

// array of objects for each display
const images = [
  { position: getCoordinate(0, radius), rotation: [0, -Math.PI, 0], imgUrl: "/images/about-display.jpg", linkUrl: linkMap.about.ja, targetPos: getCoordinate(0, targetPosRadius) },
  { position: getCoordinate(Math.PI / 7 * 2, radius), rotation: [0, -Math.PI / 7 * 5, 0], imgUrl: "/images/info-display.jpg", linkUrl: linkMap.info.ja, targetPos: getCoordinate(Math.PI / 7 * 2, targetPosRadius) },
  { position: getCoordinate(Math.PI / 7 * 4, radius), rotation: [0, -Math.PI / 7 * 3, 0], imgUrl: "/images/meta-influencer-display.jpg", linkUrl: linkMap.service.metaInfluencer.ja, targetPos: getCoordinate(Math.PI / 7 * 4, targetPosRadius) },
  { position: getCoordinate(Math.PI / 7 * 6, radius), rotation: [0, -Math.PI / 7, 0], imgUrl: "/images/parallel-display.jpg", linkUrl: linkMap.service.parallel.ja, targetPos: getCoordinate(Math.PI / 7 * 6, targetPosRadius) },
  { position: getCoordinate(-Math.PI / 7 * 2, radius), rotation: [0, Math.PI / 7 * 5, 0], imgUrl: "/images/shefla-display.jpg", linkUrl: linkMap.service.shefla.ja, targetPos: getCoordinate(-Math.PI / 7 * 2, targetPosRadius) },
  { position: getCoordinate(-Math.PI / 7 * 4, radius), rotation: [0, Math.PI / 7 * 3, 0], imgUrl: "/images/recruit-display.jpg", linkUrl: linkMap.recruit.ja, targetPos: getCoordinate(-Math.PI / 7 * 4, targetPosRadius) },
  { position: getCoordinate(-Math.PI / 7 * 6, radius), rotation: [0, Math.PI / 7, 0], imgUrl: "/images/contact-display.jpg", linkUrl: linkMap.contact.ja, targetPos: getCoordinate(-Math.PI / 7 * 6, targetPosRadius) },
];


function Objects() {

  const { logoScale } = useShareContext();

  return (
    <>
      <Plane position={[0, 0, 0]} isDesktop={isDesktop} />
      <ProjectedLogo scale={logoScale.current} position={[0, 0, 0]}/>
      {images.map((img, index) => (
        <Display
          key={index}
          imgUrl={img.imgUrl}
          position={img.position}
          targetPos={img.targetPos}
          rotation={img.rotation}
          linkUrl={img.linkUrl}
          isLanguageDisplay={img.isLanguageDisplay}
        />
      ))}
    </>
  )
}



function Display({ imgUrl, linkUrl, position, targetPos, rotation, ...props }) {

  const image = useRef()
  const frame = useRef()
  const [rnd] = useState(() => Math.random())


  const { setIsDisplayClicked, targetCameraPos, targetCameraRot } = useShareContext();

  const router = useRouter();

  const onClickDisplay = () => {
    targetCameraPos.current = targetPos;
    targetCameraRot.current = [rotation[0], rotation[1], rotation[2]];
    setIsDisplayClicked(true);
    setTimeout(() => {
      router.push(linkUrl);
    }, 6000);
  }

  useFrame((state, dt) => {
    image.current.material.zoom = 1 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 3;
    easing.damp3(image.current.scale, [0.85 * 1, 0.9 * 1, 1], 0.1, dt);
  })
  return (
    <group {...props} onClick={onClickDisplay} position={position} rotation={rotation} >
      <mesh scale={[3, 4.5, 0.15]} position={[0, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="#151515" metalness={0.5} roughness={0.5} envMapIntensity={2} />
        <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0.2]}>
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image raycast={() => null} ref={image} position={[0, 0, 0.7]} url={imgUrl} />
      </mesh>
    </group>
  )
}







export default Objects;