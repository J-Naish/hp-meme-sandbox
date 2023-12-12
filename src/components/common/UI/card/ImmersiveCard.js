'use client';

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import styles from './ImmersiveCard.module.css'
import LinkButton from '@/components/common/UI/button/button'


export default function ImmersiveCard({ imgUrl, title, description, link, color }) {
  return (
    <div className={styles.container} style={{background: `linear-gradient(71deg, #050206, ${color}, #050206)`}}>
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
        <div className={styles.button}>
          <LinkButton
            label="Learn More"
            link={link}
          />
        </div>
      </div>
    </div>
  );
}