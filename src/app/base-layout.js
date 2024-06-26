import { Noto_Sans_JP, Bebas_Neue } from "next/font/google";

import './globals.css';
import Header from "@/components/common/UI/header/header";
import Footer from "@/components/common/UI/footer/footer";
import Loading from "@/components/common/UI/loading/Loading";


const notojp = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto",
});

const bebas = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas',
});



export default function BaseLayout({ children, lang }) {
  return (
    <html lang={lang}>
      <body className={`${notojp.variable} ${bebas.variable}`}>
        <Loading />
        <Header language={lang} />
        <main>
          {children}
        </main>
        <Footer language={lang} />
      </body>
    </html>
  )
}