import Image from "next/image";
import styles from "./Visualization.module.css";
import image from "../../../../../../public/images/service/meta-influencer/content2/image.png";


export default function Visualization({ color }) {
  const gradient = `linear-gradient(180deg, ${color} 0%, rgba(255, 255, 255, 0) 100%)`;
  return (
    <div className={styles.container}>

      <div className={`${styles.circleContainer} ${styles.largeCircle}`}>
        <div className={styles.circle} style={{ background: gradient }} />
        <div className={styles.image}>
          <Image
            src={image}
            alt="Meta Influencer Visualization"
            style={{ width: "80%", height: "80%" }}
          />
        </div>
      </div>

      <div className={styles.dashedLineContainer}>
        <div className={`${styles.dashedLine} ${styles.dashedLine1}`} style={{ borderColor: color }} />
        <div className={`${styles.dashedLine} ${styles.dashedLine2}`} style={{ borderColor: color }} />
      </div>

      <div className={styles.iconContainer}>
        <div className={`${styles.circleContainer} ${styles.smallCircle} ${styles.icon1}`}>
          <div className={`${styles.circle} ${styles.circle2}`} style={{ background: gradient }} />
          <div className={styles.icon}>AI</div>
        </div>
        <div className={`${styles.circleContainer} ${styles.smallCircle} ${styles.icon2}`}>
          <div className={`${styles.circle} ${styles.circle3}`} style={{ background: gradient }} />
          <div className={styles.icon}>SNS</div>
        </div>
        <div className={`${styles.circleContainer} ${styles.smallCircle} ${styles.icon3}`}>
          <div className={`${styles.circle} ${styles.circle4}`} style={{ background: gradient }} />
          <div className={styles.icon}>3DCG</div>
        </div>
      </div>


    </div>
  );
}