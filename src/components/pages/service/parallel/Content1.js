import styles from './Content1.module.css';
import Title from '../Title';
import { languageMapping } from './languageMapping';


export default function Content1({ language, color }) {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <Title
          title={languageMapping.content1.title[language]}
          subtitle={languageMapping.content1.subtitle[language]}
          color={color}
        />
      </div>
      <div className={styles.body}>
        <div className={styles.textContainer}>
          <p className={styles.text}>{languageMapping.content1.p1[language]}</p>
          <br />
          <p className={styles.text}>{languageMapping.content1.p2[language]}</p>
          <br />
          <p className={styles.text}>{languageMapping.content1.p3[language]}</p>
        </div>
        <div className={styles.visualization}>
        </div>
      </div>
    </div>
  );
}