"use client";

import { useState, useEffect } from 'react';
import styles from './ScrollText.module.css';


export default function ScrollText({ text1, text2, text3 }) {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className={styles.container}>
      <div
        className={`${styles.text}`}
        style={{ transform: `translateX(calc(-100% + ${scrollY * 0.075}vw))`}}
      >
        {text1}
      </div>
      <div
        className={`${styles.text}`}
        style={{ transform: `translateX(calc(100vw + 100% - ${scrollY * 0.08}vw))`}}
      >
        {text2}
      </div>
      <div
        className={`${styles.text}`}
        style={{ transform: `translateX(calc(-100% + ${scrollY * 0.07}vw))`}}
      >
        {text3}
      </div>
    </div>
  );
}