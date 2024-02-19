import Image from 'next/image';
import styles from './Badge.module.css';


export default function Badge({ title, imageUrls, isWide=false, className }) {
  return (
    <div className={`${styles.container} ${isWide ? styles.wide : styles.small} ${className}`}>
      <div className={styles.iconContainer}>
        {imageUrls.map((url, index) => (
          <div className={styles.icon} key={index}>
            <Image
              src={url}
              alt={title}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ))}
      </div>
      <div className={styles.title}><h6>{title}</h6></div>
    </div>
  )
}