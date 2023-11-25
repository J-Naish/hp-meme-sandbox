import styles from "./Card.module.css";


export default function Card({ title, description }){
  return(
    <div className={styles.card}>
      <div className={`${styles.content} ${styles.whiteBoxBg}`}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}