import { Noto_Sans_JP } from "next/font/google";
import '../globals.css'
import Header from "@/components/common/UI/header/header";

const notojp = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: 'Meme',
  description: 'The official website of Meme, LLC.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={notojp.className}>
        <Header language="en" />
        {children}
      </body>
    </html>
  )
}