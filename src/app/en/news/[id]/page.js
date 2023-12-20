import NewsDetail from "@/components/pages/news/detail/NewsDetail.js";

export default function Page({ params: { id } }) {
  return (
    <NewsDetail id={id} language="en" />
  )
}