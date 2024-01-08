import BaseLayout from "../base-layout";

export const metadata = {
  metadataBase: new URL('https://llcmeme.com/en'),
  title: 'Meme',
  description: 'The official website of Meme, LLC.',
  openGraph: {
    title: 'Meme',
    description: 'The official website of Meme, LLC.',
    url: 'https://llcmeme.com',
    siteName: 'Meme',
    locale: 'en_US',
    type: 'website',
    images: {
      url: 'https://llcmeme.com/images/logo.png',
      width: 600,
      height: 600,
    },
  },
  twitter: {
    card: "app",
    title: "Meme",
    description: "合同会社Memeオフィシャルコーポレートサイト",
    images: {
      url: 'https://llcmeme.com/images/logo.png',
      width: 600,
      height: 600,
    },
  }
}

export default function RootLayout({ children }) {
  return (
    <BaseLayout lang="en">
      {children}
    </BaseLayout>
  );
}