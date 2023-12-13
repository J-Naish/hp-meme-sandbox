import styles from "./News.module.css";


async function getNewsData() {
  const url = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;
  if (!url) throw new Error("URL is undefined");
  const res = await fetch(url);
  return res.json();
}


export default async function News() {
  const data = await getNewsData();
  return (
    <div className={styles.container}>
    </div>
  );
}