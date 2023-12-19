// function for getting news data from database
export async function getNewsData(tableName) {

  const url = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;
  const key = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY;

  // api url
  const api = `${url}${tableName}?key=${key}`;

  // get news data
  if (!api) throw new Error("URL is undefined");
  const res = await fetch(api);
  return res.json();
}