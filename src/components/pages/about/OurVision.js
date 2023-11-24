import styles from "./Common.module.css";


// "Our Vision" section
function OurVision({ language }) {
  return (
    <div className={styles.container}>

      <div className={styles.title}>
        <h1>Our Vision</h1>
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
        <br></br><br></br>
        <p>{languageMapping.p6[language]}</p>
      </div>

    </div>
  );
}


const languageMapping = {
  p1: {
    en: 'What we at Meme aim for, in a word, is a "world where anyone can become anything."',
    ja: '私たちMemeが目指す場所は、一言で表すと"誰もが何者にでもなれる世界"です。"'
  },
  p2: {
    en: "There are many platforms available today, and we have entered an era where more people can become broadcasters than could have been imagined 20 years ago.",
    ja: "現在多くのプラットフォームがあり、20年前からは考えられれないほど多くの人間が発信者となれる時代になりました。"
  },
  p3: {
    en: "However, with the increase in broadcasters, fierce competition has arisen. Despite having attractive personalities and skills, many end up going unnoticed by the world.",
    ja: "しかし、発信者増加に伴い苛烈な競争が生まれ、せっかく魅力的な個性や能力を持っていてもそれを世界に知られることなく終わってしまうことも少なくありません。"
  },
  p4: {
    en: "In this context, we at Meme collaborate to provide individuals and companies with the knowledge and technology to maximize their desired image and presence in the world.",
    ja: "その中、私たちはMemeは個人・企業に知見や技術を提供しなりたい姿や見られたい姿を世の中に最大限届けられるように協業していきます。"
  },
  p5: {
    en: "We at Meme are composed of engineers, designers, and marketers, and many of us can utilize AI and 3D technology.",
    ja: "また私たちMemeは、エンジニア・デザイナー・マーケッターで構成されており多くの人間が、AIや3D技術を活用することができます。"
  },
  p6: {
    en: "Ultimately, we are active in leveraging these capabilities to create a new world in a virtual 3D space. In that world, we aim for many people and companies to be able to showcase their charm and individuality in various forms.",
    ja: "最終的に私たちは、そういった能力を活かし新しい世界をバーチャル3D空間上で創出しその世界で多くの人・企業が様々な形で自身の魅力や個性を発揮できるようにすること見据えて活動しています。"
  }
}


export default OurVision;