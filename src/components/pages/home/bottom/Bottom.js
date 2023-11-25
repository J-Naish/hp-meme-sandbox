import styles from "./Bottom.module.css";


function Bottom() {
  return (
    <div className={styles.container}>
      <div className={styles.slidingTextContainer}>
        <SlidingText />
      </div>
    </div>
  )
}


function SlidingText() {
  return (
    <div className={styles.slidingTextWrapper}>
      <p className={styles.slidingText}>Pioneering a Next-Gen Digital Society via SNS and 3D Tech</p>
      <p className={styles.slidingText}>Pioneering a Next-Gen Digital Society via SNS and 3D Tech</p>
    </div>
  );
}


export default Bottom;