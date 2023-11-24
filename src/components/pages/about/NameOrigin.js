import styles from "./Common.module.css";



// "Name Origin" section
function NameOrigin({ language }) {
  return (
    <div className={styles.container}>

      <div className={styles.title}>
        <h1>Name Origin</h1>
      </div>

        <div className={styles.content}>
          <p>{languageMapping.p1[language]}</p>
          <br></br>
          <p>{languageMapping.p2[language]}</p>
          <br></br>
          <p>{languageMapping.p3[language]}</p>
        </div>

    </div>
  );
}


const languageMapping = {
  p1: {
    en: 'The origin of our company name, Meme, comes from a passage in "The Selfish Gene," a book by evolutionary biologist Richard Dawkins.',
    ja: "Memeという社名の由来は進化生物学者のリチャード・ドーキンス博士の著書『利己的な遺伝子』の一節によるものです。"
  },
  p2: {
    en: 'While genes are physically propagated from parent to child through DNA and evolve, Dawkins named the things that are non-physically propagated and evolve from person to person, group to group, and generation to generation as "Meme."',
    ja: "遺伝子が親から子へDNAを通して物理的に伝播され進化してくのに対して人から人、集団から集団、世代から世代へ非物理的に伝播され進化してくものを彼は「Meme」と名付けました。"
  },
  p3: {
    en: 'We named our company "Meme" with the hope that our products and services will create new "Memes." These "Memes" would then spread across countries and generations, and even if we no longer exist, we hope that these "Memes" will continue to survive and evolve.',
    ja: "私たちのプロダクトやサービスが新しい「Meme」を生み出し、それが国や世代越えて多くの人々に伝わり、たとえ私たちがいなくなったとしてもその「Meme」が存続し進化していって欲しい、という願いを込めて私たちはその社名を「Meme」と名付けました。"
  }
}


export default NameOrigin;