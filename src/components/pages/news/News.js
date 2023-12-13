import styles from "./News.module.css";


// define number for each language to get news data from database
const jaNumber = 1;
const enNumber = 2;


// function for getting news data from database
async function getNewsData() {

  const url = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;
  const key = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY;

  // table names in database
  const table1 = "list";
  const table2 = "title";
  const table3 = "description";

  // api url
  const api = `${url}${table1}?key=${key}`;

  // get news data
  if (!api) throw new Error("URL is undefined");
  const res = await fetch(api);
  return res.json();
}



// React component for news page
export default async function News() {

  // get news data from database
  const data = await getNewsData();
  // abstract necessary data
  const newsData = data["values"];

  console.log(newsData);

  return (
    <div className={styles.container}>
    </div>
  );
}