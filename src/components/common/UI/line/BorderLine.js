import React from "react";
import styles from "./BorderLine.module.css";

export default function BorderLine() {
  return(
    <div className={styles.container}>
      <div className={styles.thickLine}></div>
      <div className={styles.thinLine}></div>
    </div>
  )
}