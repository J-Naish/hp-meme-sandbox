'use client';

import styles from "./CameraControlUI.module.css";
import { useEffect, useState, useMemo } from 'react';
import Image from "next/image";
import { useShareContext } from "../ShareContext.js";
import { useResponsive } from "@/components/common/utils/useResponsive";
import downwardSymbol from '../../../../../public/images/downward.webp';



function CameraControlUI() {

  const {
    sliderValue,
    setSliderValue,
  } = useShareContext();

  // Handler function to update the state
  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };


  const isDesktopView = useResponsive();
  const [textUI, setTextUI] = useState("Tap a Display to Learn More");

  // update text according to window width
  useEffect(() => {
    if (isDesktopView) {
      const newText = textUI.replace("Tap", "Click");
      setTextUI(newText); // update number of lines for slider
      setLineAmount(101);
    } else {
      const newText = textUI.replace("Click", "Tap");
      setTextUI(newText);
      setLineAmount(51); // update number of lines for slider
    }
  }, [textUI, isDesktopView]);


  // hide text if a user scrolls down
  const [textStyle, setTextStyle] = useState(styles.visible);

  // Handler function to update the state
  const handleScroll = () => {
    const threshold = window.innerHeight * 0.01;  // 1% of the viewport height
    if (window.scrollY > threshold) {
      setTextStyle(styles.invisible);
    } else {
      setTextStyle(styles.visible);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const [lineAmount, setLineAmount] = useState(31);

  const lines = useMemo(() => Array.from({ length: lineAmount }, (_, index) => (
    <div
      key={index}
      className={styles.line}
      style={{
        height: `${index % 5 === 0 ? "10px" : "6px"}`,
        backgroundColor: `${index % 5 === 0 ? "#fff" : "#aaa"}`,
      }}
    >
    </div>
  )), [lineAmount]);



  return (
    <div className={`${styles.container} ${textStyle}`}>
      <div className={`${styles.textWrapper}`}>{textUI}</div>
      <div className={styles.sliderWrapper}>
        <div className={styles.lineContainer}>{lines}</div>
        <input
          type="range"
          min="-180"
          max="180"
          value={sliderValue}
          onChange={handleSliderChange}
          className={styles.slider}
        />
      </div>
      <div className={styles.scrollSymbol}>
        <Image
          src={downwardSymbol}
          alt="downward symbol"
          width={10}
          height={10}
        />
      </div>
    </div>
  )
}



export default CameraControlUI;