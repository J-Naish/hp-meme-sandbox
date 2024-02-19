import Image from "next/image";
import styles from "./Visualization.module.css";
import mainImage from "../../../../../../public/images/service/shefla/content2/main.png";
import icon1 from "../../../../../../public/images/service/shefla/content2/image1.png";
import icon2 from "../../../../../../public/images/service/shefla/content2/image2.png";
import icon3 from "../../../../../../public/images/service/shefla/content2/image3.png";
import icon4 from "../../../../../../public/images/service/shefla/content2/image4.png";
import icon5 from "../../../../../../public/images/service/shefla/content2/image5.png";


export default function Visualization({ color }) {
  const gradient = `linear-gradient(60deg, ${color} 0%, rgba(0, 0, 0, 0) 100%)`;
  return (
    <div className={styles.container}>

      <div className={styles.circleContainer}>
        <div className={styles.circleWrapper}>
          <div
            className={`${styles.circle} ${styles.largeCircle} ${styles.normalCircle}`}
            style={{ background: gradient }}
          >
            <div className={styles.circleOverlay} />
          </div>
          <div
            className={`${styles.circle} ${styles.mediumCircle} ${styles.dashedCircle}`}
            style={{ borderColor: color }}
          />
          <div
            className={`${styles.circle} ${styles.smallCircle} ${styles.normalCircle}`}
            style={{ background: gradient }}
          />
          <div className={styles.smallCircleOverlay}>
            <Image
              src={mainImage}
              alt="main visualization for Shefla's strengths"
              style={{ width: "80%", height: "80%" }}
            />
          </div>
        </div>
      </div>


      <div className={`${styles.icon} ${styles.icon1}`} style={{ background: color }}>
        <Image
          src={icon1}
          alt="icon for each Shefla's strength"
          style={{ width: "80%", height: "80%" }}
        />
      </div>
      <div className={`${styles.icon} ${styles.icon2}`} style={{ background: color }}>
        <Image
          src={icon2}
          alt="icon for each Shefla's strength"
          style={{ width: "80%", height: "80%" }}
        />
      </div>
      <div className={`${styles.icon} ${styles.icon3}`} style={{ background: color }}>
        <Image
          src={icon3}
          alt="icon for each Shefla's strength"
          style={{ width: "80%", height: "80%" }}
        />
      </div>
      <div className={`${styles.icon} ${styles.icon4}`} style={{ background: color }}>
        <Image
          src={icon4}
          alt="icon for each Shefla's strength"
          style={{ width: "80%", height: "80%" }}
        />
      </div>
      <div className={`${styles.icon} ${styles.icon5}`} style={{ background: color }}>
        <Image
          src={icon5}
          alt="icon for each Shefla's strength"
          style={{ width: "80%", height: "80%" }}
        />
      </div>



    </div>
  );
}