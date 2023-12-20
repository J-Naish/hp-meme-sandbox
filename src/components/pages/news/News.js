import styles from "./News.module.css";
import Background from "@/components/common/UI/background/Background";
import NewsCard from "./NewsCard.js";
import { getNewsData } from "./getNewsData.js";
import { splitStringIntoArray } from "./splitStringIntoArray.js";


// define number for each language to get news data from database
const jaNumber = 0;
const enNumber = 1;

// table names in database
const table = "list";


// React component for news page
export default async function News({ language }) {

  // get news data from database
  const list = await getNewsData(table);
  // abstract necessary data and reverse the order
  const newsList = list["values"].reverse();


  // column number for the "list" table
  const idColumn = 0;
  const dateColumn = 1;
  const imageColumn = 2;
  const titleColumn = 3;

  // get each column data from the list
  const ids = newsList.map((news) => news[idColumn]);
  const dates = newsList.map((news) => news[dateColumn]);
  const images = newsList.map((news) => news[imageColumn]);
  const titles = newsList.map((news) => news[titleColumn]);

  //remove the last elements of each array
  // because the last element is just a column name
  ids.pop();
  dates.pop();
  images.pop();
  titles.pop();

  // define number of column of language
  const languageNumber = language === "en" ? enNumber : jaNumber;


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
                  title={splitStringIntoArray(titles[index])[languageNumber]}
                  imageLink={images[index]}
                />
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}