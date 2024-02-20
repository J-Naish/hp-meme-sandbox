import Image from "next/image";
import styles from "./Visualization.module.css";
import image from "@/public/images/service/parallel/content5/image.png";



export default function Visualization({ color }) {
  const gradient = `linear-gradient(60deg, ${color} 0%, rgba(0, 0, 0, 0) 100%)`;
  return (
    <div className={styles.container}>
      <div className={`${styles.circle} ${styles.largeCircle}`} style={{ background: gradient }} />
      <div className={styles.overlayWrapper}>
        <div className={styles.overlay}>
          <div className={styles.icon}>
            <Image
              src={image}
              alt="visualization for game development"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className={`${styles.circleContainer} ${styles.circle1}`}>
            <div className={styles.circleWrapper}>
              <div className={`${styles.circle} ${styles.circle1}`} style={{ background: gradient }} />
              <div className={styles.title}>
                Unity
              </div>
            </div>
          </div>
          <div className={`${styles.circleContainer} ${styles.circle2}`}>
            <div className={styles.circleWrapper}>
              <div className={`${styles.circle} ${styles.circle2}`} style={{ background: gradient }} />
              <div className={styles.title}>
                Unreal<br/>Engine
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
