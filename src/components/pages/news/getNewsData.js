// function for getting news data from database
export async function getNewsData(tableName, option="") {

  const url = process.env.GOOGLE_SHEETS_URL;
  const key = process.env.GOOGLE_SHEETS_API_KEY;

  // api url
  const api = `${url}${tableName}${option}?key=${key}`;

  // get news data
  if (!api) throw new Error("URL is undefined");
  const res = await fetch(api);
  return res.json();
}