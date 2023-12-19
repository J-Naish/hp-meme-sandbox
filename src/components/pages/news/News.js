import styles from "./News.module.css";
import Background from "@/components/common/UI/background/Background";
import NewsCard from "./NewsCard.js";
import { getNewsData } from "./getNewsData.js";


// define number for each language to get news data from database
const jaNumber = 1;
const enNumber = 2;

// table names in database
const table1 = "list";
const table2 = "title";


// React component for news page
export default async function News({ language }) {

  // get news data from database
  const list = await getNewsData(table1);
  // abstract necessary data and reverse the order
  const newsList = list["values"].reverse();

  // column number for the "list" table
  const idColumn = 0;
  const dateColumn = 1;
  const imageColumn = 2;

  // get each column data from the list
  const ids = newsList.map((news) => news[idColumn]);
  const dates = newsList.map((news) => news[dateColumn]);
  const images = newsList.map((news) => news[imageColumn]);

  //remove the last elements of each array
  // because the last element is just a column name
  ids.pop();
  dates.pop();
  images.pop();

  // define number of column of language
  const languageNumber = language === "en" ? enNumber : jaNumber;

  // get news titles
  const title = await getNewsData(table2);
  const newsTitle = title["values"].reverse();

  // get news titles
  const titles = newsTitle.map((title) => title[languageNumber]);
  titles.pop();



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
          {ids.map((id, index) => (
              <div className={styles.newsCard} key={id}>
                <NewsCard
                  id={id}
                  date={dates[index]}
                  title={titles[index]}
                  imageLink={images[index]}
                />
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}