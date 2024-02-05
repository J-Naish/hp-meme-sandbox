import ParallelPage from "@/components/pages/service/parallel/ParallelPage";


export const metadata = {
  metadataBase: new URL('https://llcmeme.com/service/parallel'),
  title: 'Meme',
  description: '合同会社Memeオフィシャルコーポレートサイト',
  openGraph: {
    title: 'Meme',
    description: 'LLC Meme｜Parallelは、3DCGを用いたUI/UXの向上で顧客体験を最大化し企画から制作、運用までをワンストップで提供します。3Dを用いたWeb開発、広告運用、XRアプリ開発、3D アプリ・ゲーム開発を行います。マーケティング、開発、クリエイティブの3つの軸で企業に最適な価値を提供します。',
    url: 'https://llcmeme.com/service/parallel',
    siteName: 'Meme',
    locale: 'ja_JP',
    type: 'website',
    images: {
      url: 'https://llcmeme.com/images/open-graph.png',
      width: 1200,
      height: 628,
    },
  }
}


export default function Page() {
  return (
    <ParallelPage language="ja" />
  )
}