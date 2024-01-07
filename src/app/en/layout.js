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
  }
}

export default function RootLayout({ children }) {
  return (
    <BaseLayout lang="en">
      {children}
    </BaseLayout>
  );
}