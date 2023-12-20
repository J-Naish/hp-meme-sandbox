import { notFound } from "next/navigation";
import NewsDetail from "@/components/pages/news/detail/NewsDetail.js";
import { getNewsData } from "@/components/pages/news/getNewsData.js";


const tableName = "list";


export const generateStaticParams = async () => {

  const data = await getNewsData(tableName);

  const newsList = data["values"].reverse();
  newsList.pop();

  return newsList.map((news) => ({
    id: news[0],
  }));
}



export default function Page({ params }) {

  const id = params.id;

  if(!id) return notFound();

  return (
    <NewsDetail id={id} language="ja" />
  );
}