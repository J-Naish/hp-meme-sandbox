import styles from "./Head.module.css";


// first section
export default function Head({ language }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <p>{languageMapping.title[language]}</p>
        </div>
        <div className={styles.subtitle}>
          <p>{languageMapping.subtitle[language]}</p>
        </div>
      </div>
    </>
  );
}


const languageMapping = {
  title: {
    en: "Leading Digital Society via SNS and 3D Tech",
    ja: "Leading Digital Society via SNS and 3D Tech"
  },
  subtitle: {
    en: "We envision a future where even an individual can influence the whole world by the power of social media and 3D virtual experiences.",
    ja: "私たちは、SNSとバーチャルな3D体験を通じて、たとえ個人であろうと全世界に多大な影響力を発揮する、そんな未来が到来することを目指し活動しています。"
  }
}