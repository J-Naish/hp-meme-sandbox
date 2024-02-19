// function for getting news data from database
export async function getNewsData(tableName, option="") {

  const url = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;
  const key = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY;

  // api url
  const api = `${url}${tableName}${option}?key=${key}`;

  // get news data
  if (!api) throw new Error("URL is undefined");
  // every 24 hours (86400 seconds) revalidate data
  const res = await fetch(api, { next: { revalidate: 86400 }});
  return res.json();
}