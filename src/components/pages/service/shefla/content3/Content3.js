import styles from './Content3.module.css';
import Title from '../../Title';
import Visualization from './Visualization';
import { languageMapping } from '../languageMapping';



export default function Content3({ language, color }) {
  return (
    <div className={styles.container}>
      <Title title={languageMapping.content3.title[language]} subtitle={languageMapping.content3.subtitle[language]} color={color} />
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <p className={styles.text}>{languageMapping.content3.p1[language]}</p>
          <br/>
          <p className={styles.text}>{languageMapping.content3.p2[language]}</p>
          <br/>
          <p className={styles.text}>{languageMapping.content3.p3[language]}</p>
        </div>
        <div className={styles.visualization}>
          <Visualization color={color} />
        </div>
      </div>
    </div>
  );
}