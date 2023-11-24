'use client';

import styles from "./StepProcessCircle.module.css";
import React, { useContext } from "react";
import ShareState from "./ShareState.js";
import { languageMapping } from "./languageMapping.js";



// component for visualizing the step process
function StepProcessCircle({ language }) {

  // get the state from ShareState
  const { isConfirmPage, isCompletePage } = useContext(ShareState);


  return (
    <div className={`${styles.container} ${styles.completed}`}>

      <div className={styles.item}>
        <div className={styles.number}>01</div>
        <div className={`${styles.circle} ${styles.completedBg}`}></div>
        <div className={styles.label}>{languageMapping.stepCircle.step1[language]}</div>
      </div>

      <div className={`${styles.line} ${isConfirmPage ? styles.completedBg : styles.uncompletedBg}`}></div>

      <div className={`${styles.item} ${isConfirmPage ? styles.completed : styles.uncompleted}`}>
        <div className={styles.number}>02</div>
        <div className={`${styles.circle} ${isConfirmPage ? styles.completedBg : styles.uncompletedBg}`}></div>
        <div className={styles.label}>{languageMapping.stepCircle.step2[language]}</div>
      </div>

      <div className={`${styles.line} ${isCompletePage ? styles.completedBg : styles.uncompletedBg}`}></div>

      <div className={`${styles.item} ${isCompletePage ? styles.completed : styles.uncompleted}`}>
        <div className={styles.number}>03</div>
        <div className={`${styles.circle} ${isCompletePage ? styles.completedBg : styles.uncompletedBg}`}></div>
        <div className={styles.label}>{languageMapping.stepCircle.step3[language]}</div>
      </div>

    </div>
  );
}


export default StepProcessCircle;