'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import styles from './ImmersiveCard.module.css';
import Lighting from '@/components/common/3D/lighting/Lighting.js';
import EnvironmentMap from '@/components/common/3D/environment/EnvironmentMap.js'
import LinkButton from '@/components/common/UI/button/button.js';


export default function ImmersiveCard({ imgUrl, title, description, color, link, children }) {

  // state for card is hovered or clicked
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    setIsActive(true);
    setIs3dActive(true); // ensure 3d model is active
  }
  const handleMouseLeave = () => {
    setIsActive(false);
  }
  const handleCardClick = () => {
    setIsActive(!isActive);
  }

  // state for whether 3d model should be rendered
  const[is3dActive, setIs3dActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      setIs3dActive(true);
    } else {
      setTimeout(() => {
        setIs3dActive(false);
      }, 500);
    }
  }, [isActive]);

  return (
    <div
      className={`${styles.container} ${isActive ? styles.active : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
    >
      <div className={styles.wrapper}>
        <div className={styles.mask} style={{boxShadow: `0 0 10px ${color}`}}>
          <div className={styles.symbol}>
            <Image
              src={imgUrl}
              alt={`Picture of ${title}`}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className={styles.title}>
            <h4>{title}</h4>
          </div>
          <div className={styles.description}>
            <p>{description}</p>
          </div>
        </div>
      </div>


      <div className={styles.canvasContainer}>
        <div className={styles.canvasWrapper}>
        {is3dActive && (
        <>
          <Canvas className={styles.canvas}>
            <Lighting intensity={4} />
            <EnvironmentMap isBright={true} />
            {children}
          </Canvas>
          <div className={styles.buttonWrapper}>
            <LinkButton label="Learn More" link={link} />
          </div>
        </>
        )}
        </div>
      </div>

    </div>
  );
}