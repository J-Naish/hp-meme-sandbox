import BaseLayout from "../base-layout";

export const metadata = {
  title: 'Meme',
  description: 'The official website of Meme, LLC.',
}

export default function RootLayout({ children }) {
  return (
    <BaseLayout lang="ja">
      {children}
    </BaseLayout>
  );
}