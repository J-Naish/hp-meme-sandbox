import BaseLayout from "../base-layout";

export const metadata = {
  metadataBase: new URL('https://llcmeme.com'),
  title: 'Meme',
  description: '合同会社Memeオフィシャルコーポレートサイト',
  openGraph: {
    title: 'Meme',
    description: 'LLC Meme｜私たちは、SNSとバーチャルな3D体験を通じて、たとえ個人であろうと企業であろうと全世界に多大な影響力を発揮する、そんな未来が到来することを目指し活動しています。\n私たちMemeは、新しい形のデジタル社会が到来することを予期し、現段階からSNSや3Dテクノロジーを活用して人々や企業がより輝けるようになることを目指し活動しています。',
    url: 'https://llcmeme.com',
    siteName: 'Meme',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: 'https://llcmeme.com/images/open-graph.png',
        width: 1200,
        height: 628,
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meme',
    description: 'LLC Meme｜私たちは、SNSとバーチャルな3D体験を通じて、たとえ個人であろうと企業であろうと全世界に多大な影響力を発揮する、そんな未来が到来することを目指し活動しています。\n私たちMemeは、新しい形のデジタル社会が到来することを予期し、現段階からSNSや3Dテクノロジーを活用して人々や企業がより輝けるようになることを目指し活動しています。',
    creator: '@llcmeme',
    images: [
      {
        url: 'https://llcmeme.com/images/open-graph.png',
        width: 1200,
        height: 628,
      }
    ],
  },
  keywords: ["XR", "3D", "SNS", "マーケティング", "開発", "3DCG", "Webデザイン", "LP", "マーケティングコンサル", "広告運用"],
  category: "XR",
};

export default function RootLayout({ children }) {
  return (
    <BaseLayout lang="ja">
      {children}
    </BaseLayout>
  );
}