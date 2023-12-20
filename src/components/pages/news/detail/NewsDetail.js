import Image from "next/image";
import Link from "next/link";
import styles from "./NewsDetail.module.css";
import Background from "@/components/common/UI/background/Background";
import LinkButton from "@/components/common/UI/button/button";
import BorderLine from "@/components/common/UI/line/BorderLine";
import { getNewsData } from "../getNewsData.js";
import { splitStringIntoArray } from "../splitStringIntoArray.js";



export default async function NewsDetail({ id, language }) {

  // get integer-converted id
  const intId = parseInt(id);

  const range = `A${intId+1}:F${intId+1}`;
  const newsData = await getNewsData("list", `!${range}`);
  const news = newsData["values"][0];

  const languageNumber = language === "en" ? 1 : 0;

  // each number of the array of the news
  const dateNumber = 1;
  const imageNumber = 2;
  const titleNumber = 3;
  const descriptionNumber = 4;
  const referenceNumber = 5;

  // each data of the news
  const date = news[dateNumber];
  const image = news[imageNumber];
  const title = splitStringIntoArray(news[titleNumber])[languageNumber];
  const description = splitStringIntoArray(news[descriptionNumber])[languageNumber];
  const reference = news[referenceNumber] ? news[referenceNumber] : null;


  return (
    <div className={styles.container}>
      <Background />
      <div className={styles.backToNews}>
        <Link href={languageMapping.newsListLink[language]}>
          {languageMapping.backToNews[language]}
        </Link>
      </div>
      <h1 className={styles.title}>
        {title}
        <BorderLine />
      </h1>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={`image of ${title}`}
          width={100}
          height={100}
          unoptimized={true}
          style={{width: "100%", height: "100%"}}
          className={styles.image}
        />
      </div>
      <div className={styles.date}><p>{date}</p></div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
      {reference && (
      <div className={styles.reference}>
        <LinkButton
          label="Learn More"
          link={reference}
          hasExternalLink={true}
          className={styles.referenceButton}
        />
      </div>
      )}
    </div>
  )
}


const languageMapping = {
  newsListLink: {
    en: "/en/news",
    ja: "/news"
  },
  backToNews: {
    en: "←Back to News",
    ja: "←ニュース一覧へ"
  }
}