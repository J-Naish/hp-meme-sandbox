import BaseLayout from "../base-layout";

export const metadata = {
  title: 'Meme',
  description: '合同会社Memeオフィシャルコーポレートサイト',
  openGraph: {
    title: 'Meme',
    description: '合同会社Memeオフィシャルコーポレートサイト',
    url: 'https://llcmeme.com',
    siteName: 'Meme',
    locale: 'ja_JP',
    type: 'website',
  }
}

export default function RootLayout({ children }) {
  return (
    <BaseLayout lang="ja">
      {children}
    </BaseLayout>
  );
}