'use client';

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react'; 
import styles from './MainSection.module.css';
import downwardSymbol from '../../../../../public/images/downward.webp';


export default function MainSection() {
  const [hasReachedTitle, setHasReachedTitle] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setHasReachedTitle(true);
        }
      });
    });

    // Observe all elements with 'title' class
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    // Clean up
    return () => {
      if (titleRef.current) {
        observer.disconnect();
      }
    };
  }, []);


  return (
    <div className={styles.container}>
        <div className={styles.titleContainer} ref={titleRef}>
          <h2 className={`${styles.title} ${hasReachedTitle ? styles.visible : styles.invisible}`}>Craft and Design</h2>
          <h2 className={`${styles.title} ${hasReachedTitle ? styles.visible : styles.invisible}`}>New-Dimension</h2>
          <h2 className={`${styles.title} ${hasReachedTitle ? styles.visible : styles.invisible}`}>Digital Solutions</h2>
        </div>
        <div className={styles.scrollUI}>
          <p className={styles.scrollText}>Scroll Down to See More</p>
          <div className={styles.scrollSymbol}>
            <Image
              src={downwardSymbol}
              alt="downward symbol for scroll"
              width={15}
              height={15}
              className={styles.symbol}
            />
            <Image
              src={downwardSymbol}
              alt="downward symbol for scroll"
              width={15}
              height={15}
              className={styles.symbol}
            />
          </div>
        </div>
    </div>
  );
}