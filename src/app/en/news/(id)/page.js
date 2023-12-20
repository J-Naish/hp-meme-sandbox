// import NewsDetail from "@/components/pages/news/detail/NewsDetail.js";


// export async function generateStaticParams() {

//   const tableName = "list";
//   const url = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;
//   const key = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY;

//   // api url
//   const api = `${url}${tableName}?key=${key}`;

//   // get news data
//   if (!api) throw new Error("URL is undefined");
//   const data = await fetch(api).then((res) => res.json());

//   const newsList = data["values"].reverse();

//   return newsList.map((news) => ({
//     id: news[0],
//   }));
// }



// export default function Page({ params }) {
//   const { id } = params;
//   return (
//     <NewsDetail id={id} language="en" />
//   );
// }