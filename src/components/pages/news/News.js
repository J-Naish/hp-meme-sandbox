import styles from "./News.module.css";
import Background from "@/components/common/UI/background/Background";
import NewsCard from "./NewsCard.js";
import tempImg from "../../../../public/images/info-display.jpg";


// define number for each language to get news data from database
const jaNumber = 1;
const enNumber = 2;

// table names in database
const table1 = "list";
const table2 = "title";
const table3 = "description";


// function for getting news data from database
async function getNewsData(tableName) {

  const url = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;
  const key = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY;

  // api url
  const api = `${url}${tableName}?key=${key}`;

  // get news data
  if (!api) throw new Error("URL is undefined");
  const res = await fetch(api);
  return res.json();
}



// React component for news page
export default async function News() {

  // get news data from database
  const data = await getNewsData(table1);
  // abstract necessary data
  const newsData = data["values"];

  return (
    <div className={styles.container}>
      <Background />
      <div className={styles.head}>
        <div className={styles.title}>
          <h1 className={`pageTitle ${styles.title}`}>News</h1>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.newsContainer}>
          <div className={styles.newsCard}>
            <NewsCard
              title="temp"
              imageLink={tempImg}
              date="2021/08/01"
              id="1"
            />
          </div>
          <div className={styles.newsCard}>
            <NewsCard
              title="temp"
              imageLink={tempImg}
              date="2021/08/01"
              id="2"
            />
          </div>
          <div className={styles.newsCard}>
            <NewsCard
              title="temp"
              imageLink={tempImg}
              date="2021/08/01"
              id="3"
            />
          </div>
          <div className={styles.newsCard}>
            <NewsCard
              title="temp"
              imageLink={tempImg}
              date="2021/08/01"
              id="4"
            />
          </div>
          <div className={styles.newsCard}>
            <NewsCard
              title="temp"
              imageLink={tempImg}
              date="2021/08/01"
              id="5"
            />
          </div>
          <div className={styles.newsCard}>
            <NewsCard
              title="temp"
              imageLink={tempImg}
              date="2021/08/01"
              id="6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}