import Image from "next/image";
import styles from "./Visualization.module.css";

import image from "@/public/images/service/parallel/content4/image.png";


export default function Visualization({ color }) {
  const gradient = `linear-gradient(60deg, ${color} 0%, rgba(0, 0, 0, 0) 100%)`;
  return (
    <div className={styles.container}>
      <div className={`${styles.circleContainer} ${styles.small} ${styles.smallCircle1}`}>
        <div className={styles.circleWrapper}>
          <div className={`${styles.circle} ${styles.circle1}`} style={{ background: gradient }} />
          <div className={styles.title}>Swift</div>
        </div>
      </div>
      <div className={`${styles.circleContainer} ${styles.small} ${styles.smallCircle2}`}>
        <div className={styles.circleWrapper}>
          <div className={`${styles.circle} ${styles.circle2}`} style={{ background: gradient }} />
          <div className={styles.title}>Unity</div>
        </div>
      </div>
      <div className={`${styles.circleContainer} ${styles.small} ${styles.smallCircle3}`}>
        <div className={styles.circleWrapper}>
          <div className={`${styles.circle} ${styles.circle3}`} style={{ background: gradient }} />
          <div className={styles.title}>Unreal<br/>Engine</div>
        </div>
      </div>
      <div className={`${styles.circleContainer} ${styles.large}`}>
        <div className={styles.circleWrapper}>
          <div className={styles.imageWrapper}>
            <Image
              src={image}
              alt="visualization for XR app development"
              style={{ width: "80%", height: "80%" }}
              className={styles.image}
            />
          </div>
          <div className={`${styles.circle} ${styles.circle4}`} style={{ background: gradient }} />
        </div>
      </div>
    </div>
  );
}