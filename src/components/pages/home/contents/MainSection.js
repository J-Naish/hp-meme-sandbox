import Image from 'next/image';
import styles from './MainSection.module.css';
import downwardSymbol from '../../../../../public/images/downward.webp';


export default function MainSection({ language }) {
  return (
    <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Craft and Design</h2>
          <h2 className={styles.title}>New-Dimension</h2>
          <h2 className={styles.title}>Digital Solutions</h2>
        </div>
        <div className={styles.scrollUI}>
          <p className={styles.scrollText}>Scroll Down to See More</p>
          <div className={styles.scrollSymbol}>
            <Image
              src={downwardSymbol}
              alt="downward symbol for scroll"
              width={15}
              height={15}
              className={styles.symbol}
            />
            <Image
              src={downwardSymbol}
              alt="downward symbol for scroll"
              width={15}
              height={15}
              className={styles.symbol}
            />
          </div>
        </div>
    </div>
  );
}