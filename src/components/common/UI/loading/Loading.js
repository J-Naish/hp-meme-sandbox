"use client"


import styles from './Loading.module.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useProgress, useGLTF, useTexture, useFont } from '@react-three/drei';
import logoImage from '@/public/images/logo.png';



function Loading() {

  const [loaded, setLoaded] = useState(false);

  const { progress } = useProgress();

  useEffect(() => {
    if(progress === 100) {
      setTimeout(() => {
        setLoaded(true);
      }, 1500)
    }
  }, [progress, setLoaded])


  const [hiddenStyle, setHiddenStyle ] = useState({});

  useEffect(() => {
    if(loaded) {
      setTimeout(() => {
        document.body.style.overflow = "auto";
        setHiddenStyle({ display: "none" });
      }, 1000)
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [loaded])


  // successive variable for progress
  const [smoothProgress, setSmoothProgress] = useState(0);

  // make it smooth
  useEffect(() => {
    const interval = setInterval(() => {
      setSmoothProgress(prevSmoothProgress => {
        if(prevSmoothProgress < progress) {
          return prevSmoothProgress + 1;
        }
        clearInterval(interval);
        return progress;
      });
    }, 10);
    return () => clearInterval(interval);
  }, [progress]);


  return (
    <>
      <LoadingUI
        loaded={loaded}
        hiddenStyle={hiddenStyle}
      >
        <div className={styles.logoWrapper}>
          <Image
            src={logoImage}
            alt="logo"
            width={50}
            height={50}
            className={styles.logo}
            priority={true}
          />
        </div>
        <div className={styles.maskWrapper}>
          <div
            className={styles.mask}
            style={{
              height: `${100 - smoothProgress}%`
            }}
          >
          </div>
        </div>
      </LoadingUI>
    </>
  )
}


function LoadingUI({loaded, hiddenStyle, isDefault=false, children}) {
  return (
    <div
      className={`${styles.container} ${loaded ? styles.invisible : styles.visible}`}
      style={hiddenStyle}
    >
      <div className={styles.wrapper}>
        <div className={styles.loadingSymbol}></div>
        <div className={styles.loadingContent}>
          { isDefault && (
            <div className={styles.logoWrapper}>
              <Image
                src={logoImage}
                alt="logo"
                width={50}
                height={50}
                className={styles.logo}
                priority={true}
              />
          </div>
          )}
          {children}
        </div>
      </div>
    </div>
  )
}



useGLTF.preload("/assets/model/meme-base.glb");
useGLTF.preload("/assets/model/meme-letters.glb");
useGLTF.preload("/assets/model/projector.glb");
useTexture.preload("/assets/hdri/dark.hdr");
useTexture.preload("/images/about-display.jpg");
useTexture.preload("/images/contact-display.jpg");
useTexture.preload("/images/info-display.jpg");
useTexture.preload("/images/meta-influencer-display.jpg");
useTexture.preload("/images/parallel-display.jpg");
useTexture.preload("/images/recruit-display.jpg");
useTexture.preload("/images/shefla-display.jpg");
useFont.preload("/assets/font/Inter_Medium_Regular.json");


export default Loading;
export { LoadingUI };