import BaseLayout from "../base-layout";

export const metadata = {
  title: 'Meme',
  description: '合同会社Memeオフィシャルコーポレートサイト',
}

export default function RootLayout({ children }) {
  return (
    <BaseLayout lang="ja">
      {children}
    </BaseLayout>
  );
}