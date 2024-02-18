import styles from "./Visualization.module.css";


export default function Visualization({ color }) {
  const gradient = `linear-gradient(60deg, ${color} 0%, rgba(0, 0, 0, 0) 100%)`;
  return (
    <div className={styles.container}>
      <div className={`${styles.circleContainer} ${styles.circle1}`}>
        <div className={styles.circleWrapper}>
          <div className={styles.circle} style={{ boxShadow: `0 0 0 2px ${color} inset` }} />
          <div className={styles.title}>AI Tech</div>
        </div>
      </div>
      <div className={`${styles.circleContainer} ${styles.circle2}`}>
        <div className={styles.circleWrapper}>
          <div className={styles.circle} style={{ boxShadow: `0 0 0 2px ${color} inset` }} />
          <div className={styles.title}>3D Design</div>
        </div>
      </div>
      <div className={`${styles.circleContainer} ${styles.circle3}`}>
        <div className={styles.circleWrapper}>
          <div className={styles.circle} style={{ boxShadow: `0 0 0 2px ${color} inset` }} />
          <div className={styles.title}>Marketing</div>
        </div>
      </div>
    </div>
  );
}