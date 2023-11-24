import styles from "./Common.module.css";


// "About Us" section
function AboutUs({ language }) {
  return (
    <div className={styles.container}>

      <div className={styles.title}>
        <h1>About Us</h1>
      </div>

      <div className={styles.content}>
        <p>{languageMapping.p1[language]}</p>
        <br></br>
        <p>{languageMapping.p2[language]}</p>
        <br></br>
        <p>{languageMapping.p3[language]}</p>
        <br></br><br></br>
        <p></p>
        <p>{languageMapping.p4[language]}</p>
        <br></br>
        <p>{languageMapping.p5[language]}</p>
        <br></br>
        <p>{languageMapping.p6[language]}</p>
        <br></br>
        <p>{languageMapping.p7[language]}</p>
        <br></br><br></br>
        <p>{languageMapping.p8[language]}</p>
      </div>

    </div>
  );
}


const languageMapping = {
  p1: {
    en: "Various social media platforms have permeated people's lives, and if you can exert influence on these platforms, anyone can spread their strengths around the world.",
    ja: "各種SNSプラットフォームは人々の生活の一部として浸透し、そこで発信力を持てばどんな人でも自身の強みを世界中に拡散できるようになりました。"
  },
  p2: {
    en: "Moreover, due to the incredible advancements in AI, the productivity of people utilizing AI has skyrocketed. Whether it's an individual or a small team, they can now produce sophisticated services and products.",
    ja: "また、昨今の凄まじいAIの進歩によってAIを駆使した人々の生産性が爆発的に伸び、個人だろうが少数チームだろうが洗練されたサービスやプロダクトを生産できるようになってきました。"
  },
  p3: {
    en: "In this era that is right around the corner, anyone and any team can thrive globally if they make full use of these tools and platforms.",
    ja: "どんな人でも、どんなチームでも、それらのツールやプラットフォームを駆使すれば、世界で活躍できるような時代が目前に迫っているのです。"
  },
  p4: {
    en: "On the other hand, software and hardware using 3D technology are expanding, and new products are being released one after another.",
    ja: "その一方で、3D技術を用いたソフトウェア・ハードウェアが広がりを見せ次々に新しいプロダクトがリリースされてきています。"
  },
  p5: {
    en: "Many innovative companies are striving to incorporate 3D into their existing businesses so as not to miss the wave of the new era.",
    ja: "多くの革新的な企業が新たな時代の波に乗り遅れまいと、既存のビジネスに3Dを取り入れるべく奮闘しています。"
  },
  p6: {
    en: "Companies are exploring new forms of digital experiences that have undergone a complete transformation in UI and UX compared to existing applications and devices. These are literally higher-dimensional new digital forms.",
    ja: "今までのアプリケーションやデバイスとはUIやUXが様変わりした、文字通り高次元の新しいデジタルの形を各企業が模索しています"
  },
  p7: {
    en: "We strongly feel that if such virtual spaces and experiences are combined with existing SNS infrastructure, the influence of individuals and companies with broadcasting power will expand even further.",
    ja: "そういったバーチャルな空間・体験が、既存SNSインフラと組み合わされば、発信力を持った個人や企業の影響力がさらに拡大するのではないかと私たちは強く感じています。"
  },
  p8: {
    en: "We, at Meme, anticipate the arrival of this new form of digital society and are actively working to utilize SNS and 3D technology so that people and companies can shine even more from this stage on.",
    ja: "私たちMemeは、そういった新しい形のデジタル社会が到来することを予期し、現段階からSNSや3Dテクノロジーを活用して人々や企業がより輝けるようになることを目指し活動しています。"
  }
}


export default AboutUs;