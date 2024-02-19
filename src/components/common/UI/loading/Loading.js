"use client"


import styles from './Loading.module.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useProgress } from '@react-three/drei';
import logoImage from '../../../../../public/images/logo.png';



function Loading() {

  const [loaded, setLoaded] = useState(false);

  const { progress } = useProgress();

  useEffect(() => {
    if(progress === 100) {
      setTimeout(() => {
        setLoaded(true);
      }, 1000)
    }
  }, [progress, setLoaded])


  const [hiddenStyle, setHiddenStyle ] = useState({});

  useEffect(() => {
    if(loaded) {
      setTimeout(() => {
        setHiddenStyle({ display: "none" });
      }, 500)
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


export default Loading;
export { LoadingUI };