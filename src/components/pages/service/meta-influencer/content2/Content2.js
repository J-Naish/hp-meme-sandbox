import styles from "./Content2.module.css";
import Title from "../../Title";
import Visualization from "./Visualization";
import { languageMapping } from "../languageMapping";


export default function Content2({ language, color }) {
  return (
    <div className={styles.container}>
      <Title color={color} title={languageMapping.content2.title[language]} subtitle={languageMapping.content2.subtitle[language]} />
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <p className={styles.text}>{languageMapping.content2.p1[language]}</p>
          <br/>
          <p className={styles.text}>{languageMapping.content2.p2[language]}</p>
        </div>
        <div className={styles.visualization}>
          <Visualization color={color} />
        </div>
      </div>
    </div>
  );
}