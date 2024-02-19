import Image from 'next/image';
import styles from './Card.module.css';


export default function Card({ title, imageUrl, text, isLarge }) {
  return (
    <div className={`${styles.container} ${isLarge ? styles.large: styles.small}`}>
      <div className={styles.head}>
        <div className={styles.icon}>
          <Image
            src={imageUrl}
            alt={title}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <h6 className={styles.title}>{title}</h6>
      </div>
      <div className={styles.body}>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  )
}