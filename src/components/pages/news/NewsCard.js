import Image from 'next/image';
import styles from './NewsCard.module.css';
import LinkButton from '@/components/common/UI/button/button';


export default function NewsCard({ title, imageLink, date, id, language }) {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.date}>{date}</p>
      </div>
      <div className={styles.body}>
        <div className={styles.imageWrapper}>
          <Image
            src={imageLink}
            alt="image of the news"
            unoptimized={true}
            width={100}
            height={100}
            style={{ width: "100%", height: "100%" }}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.button}>
        <LinkButton link={`${linkMap[language]}${id}`} label="Read More" />
      </div>
    </div>
  );
}


const linkMap = {
  en: "/en/news/",
  ja: "/news/",
}