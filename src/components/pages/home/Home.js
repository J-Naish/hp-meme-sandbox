'use client';

import styles from "./Home.module.css";
import React, { useEffect } from 'react';
import Top from "./top/Top.js";
import AboutMemeSection from "./contents/AboutMemeSection.js";
import StrengthSection from "./contents/StrengthSection.js";
import ServiceSection from "./contents/ServiceSection.js";
import OtherSection from "./contents/OtherSection.js";
import Spacer from "./contents/Spacer.js";
import Bottom from "./bottom/Bottom.js";
import Fade from "./Fade.js";
import { useShareContext, ShareContextProvider } from "./ShareContext.js";


export default function Home({ language }) {
  return (
    <ShareContextProvider>
      <HomeContent language={language} />
    </ShareContextProvider>
  );
}



function HomeContent({ language }) {

  const { isBottomReached, setIsBottomReached } = useShareContext();

  // change the background color of the contents container when the bottom is reached
  useEffect(() => {
    const handleScroll = () => {
      const bottomElement = document.querySelector('.bottom');

      if (bottomElement !== null) {
        const bottomRect = bottomElement.getBoundingClientRect();

        if (bottomRect.top <= window.innerHeight && bottomRect.bottom >= 0) {
          setIsBottomReached(true);
        } else {
          setIsBottomReached(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setIsBottomReached]);

  return (
    <>
      <Fade />

      <div className={styles.container}>

        <Top />

        <div className={`${styles.content} ${isBottomReached ? styles.reachedBottom : ''}`}>
          <div className={`${styles.mask} ${isBottomReached ? styles.reachedBottom : ''}`}>
            <AboutMemeSection language={language}/>
            <Spacer />
            <StrengthSection language={language}/>
            <Spacer />
            <ServiceSection language={language}/>
            <Spacer /><Spacer />
            <OtherSection language={language}/>
            <Spacer /><Spacer />
          </div>
        </div>

        <div className={`bottom ${isBottomReached ? styles.reachedBottom: ''} ${styles.bottom}`}>
          <Bottom />
        </div>

      </div>
    </>
  );
}