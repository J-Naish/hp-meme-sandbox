import styles from "./Content3.module.css";
import Title from "../../Title";
import { languageMapping } from "../languageMapping";


export default function Content3({ language, color }) {
  return (
    <div className={styles.container}>
      <Title title={languageMapping.content3.title[language]} subtitle={languageMapping.content3.subtitle[language]} color={color} />
      <div className={styles.content}>
        <div className={styles.temp}>coming soon...</div>
      </div>
    </div>
  );
}