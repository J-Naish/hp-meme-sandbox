import styles from "./Content2.module.css";
import Title from "../../Title";
import Visualization from "./Visualization";
import { languageMapping } from "../languageMapping";



export default function Content2({ language, color }) {
  return (
    <div className={styles.container}>
      <Title title={languageMapping.content2.title[language]} subtitle={languageMapping.content2.subtitle[language]} color={color} />
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <p className={styles.text}>{languageMapping.content2.p1[language]}</p>
          <p className={styles.text}>{languageMapping.content2.p2[language]}</p>
          <p className={styles.text}>{languageMapping.content2.p3[language]}</p>
          <p className={styles.text}>{languageMapping.content2.p4[language]}</p>
          <p className={styles.text}>{languageMapping.content2.p5[language]}</p>
          <br/>
          <p className={styles.text}>{languageMapping.content2.p6[language]}</p>
        </div>
        <div className={styles.visualization}>
          <Visualization color={color} />
        </div>
      </div>
    </div>
  );
}