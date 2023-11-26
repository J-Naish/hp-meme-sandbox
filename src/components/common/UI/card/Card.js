import Image from "next/image";
import styles from "./Card.module.css";


export default function Card({ title, description, imgLink }){
  return(
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.head}>
            <div className={styles.imageWrapper}>
              <Image
                src={imgLink}
                alt="symbol image for card"
                width={30}
                height={30}
                className={styles.image}
              />
            </div>
            <h4 className={styles.title}>{title}</h4>
          </div>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
}