import BaseLayout from "../base-layout";

export const metadata = {
  metadataBase: new URL('https://llcmeme.com'),
  title: 'Meme',
  description: '合同会社Memeオフィシャルコーポレートサイト',
  openGraph: {
    title: 'Meme',
    description: '合同会社Memeオフィシャルコーポレートサイト',
    url: 'https://llcmeme.com',
    siteName: 'Meme',
    locale: 'ja_JP',
    type: 'website',
    images: {
      url: 'https://llcmeme.com/images/logo.png',
      width: 600,
      height: 600,
    },
  }
}

export default function RootLayout({ children }) {
  return (
    <BaseLayout lang="ja">
      {children}
    </BaseLayout>
  );
}