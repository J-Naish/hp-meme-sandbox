import styles from './Content5.module.css';
import Title from '../../Title';
import Visualization from './Visualization';
import { languageMapping } from '../languageMapping';



export default function Content5({ language, color }) {
  return (
    <div className={styles.container}>
      <Title title={languageMapping.content5.title[language]} subtitle={languageMapping.content5.subtitle[language]} color={color} />
      <div className={styles.content}>
        <p className={styles.text}>{languageMapping.content5.p[language]}</p>
        <div className={styles.visualization}>
          <Visualization color={color} />
        </div>
      </div>
    </div>
  );
}