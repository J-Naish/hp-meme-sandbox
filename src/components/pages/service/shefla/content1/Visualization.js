import Image from "next/image";
import styles from "./Visualization.module.css";
import image1 from "../../../../../../public/images/service/shefla/content1/image1.png";
import image2 from "../../../../../../public/images/service/shefla/content1/image2.png";
import { languageMapping } from "../languageMapping";




export default function Visualization({ language, color }) {
  const gradient = `linear-gradient(180deg, ${color} 0%, rgba(0, 0, 0, 0) 100%)`;
  return (
    <div className={styles.container}>

      <div className={styles.item1Container}>
        <div className={styles.item1Wrapper}>
          <div className={styles.dashedCircle} style={{ borderColor: color }} />
          <div className={styles.item1} style={{ backgroundColor: color }}>
            <div className={styles.icon}>
              <Image
                src={image1}
                alt="visualization for shefla"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className={styles.title}>
              {languageMapping.content1.visualization.item1[language]}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.item2Container}>
        <div className={styles.item2Wrapper}>
          <div className={styles.circle} style={{ background: gradient }}/>
          <div className={styles.item2}>
            <div className={styles.icon}>
              <Image
                src={image2}
                alt="visualization for shefla"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className={styles.title}>
              {languageMapping.content1.visualization.item2[language]}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}