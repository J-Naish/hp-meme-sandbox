import Image from 'next/image';
import styles from './Panel.module.css';


export default function Panel({ title, imgUrl, text, color }) {
  return (
    <div
      className={styles.container}
      style={{ background: `${color}`}}
    >
      <div
        className={styles.mask1} 
        style={{ background: `${color}`}}
      />

      <div className={styles.mask2} />

      <div className={styles.head}>
        <div className={styles.symbolWrapper}>
          <Image
            src={imgUrl}
            alt={`panel symbol for ${title}`}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className={styles.titleContainer}>
          <h4 className={styles.title}>{title}</h4>
        </div>
      </div>

      <div className={styles.body}>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  )
}