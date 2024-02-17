import styles from "./Content4.module.css";
import Title from "../../Title";
import Visualization from "./Visualization";
import { languageMapping } from "../languageMapping";


export default function Content4({ language, color}) {
  return (
    <div className={styles.container}>
      <Title
        title={languageMapping.content4.title[language]}
        subtitle={languageMapping.content4.subtitle[language]}
        color={color}
      />
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <p className={styles.text}>{languageMapping.content4.p1[language]}</p>
          <br /><br />
          <p className={styles.text}>{languageMapping.content4.p2[language]}</p>
        </div>
        <div className={styles.visualization}>
          <Visualization color={color} />
        </div>
      </div>
    </div>
  );
}