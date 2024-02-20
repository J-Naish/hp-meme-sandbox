import styles from "./DiscoverSection.module.css";
import commonStyles from "./Common.module.css";
import Card from "@/components/common/UI/card/Card";
import LinkButton from "@/components/common/UI/button/button";
import BorderLine from '@/components/common/UI/line/BorderLine'
import { languageMapping } from "./languageMapping";
import recruitSymbol from "@/public/images/recruit-symbol.webp";
import contactSymbol from "@/public/images/contact-symbol.webp";
import newsSymbol from "@/public/images/news-symbol.webp";
import infoSymbol from "@/public/images/info-symbol.webp";



export default function DiscoverSection({ language }){
  return (
    <div className={styles.container}>

      <div className={commonStyles.title}><h1>Discover</h1></div>
      <BorderLine />

      <div className={styles.cardContainer}>
        <Card1 language={language} />
        <Card2 language={language} />
        <Card3 language={language} />
        <Card4 language={language} />
      </div>
    </div>
  );
}


function Card1({ language }) {
  return (
    <div className={styles.cardWrapper}>
      <Card
        title={languageMapping.otherSection.item1.title[language]}
        description={languageMapping.otherSection.item1.description[language]}
        imgLink={recruitSymbol}
      />
      <div className={styles.button}>
        <LinkButton link={languageMapping.otherSection.item1.buttonLink[language]} label={languageMapping.otherSection.item1.buttonLabel[language]} />
      </div>
    </div>
  )
}


function Card2({ language }) {
  return (
    <div className={styles.cardWrapper}>
      <Card
        title={languageMapping.otherSection.item2.title[language]}
        description={languageMapping.otherSection.item2.description[language]}
        imgLink={contactSymbol}
      />
      <div className={styles.button}>
        <LinkButton link={languageMapping.otherSection.item2.buttonLink[language]} label={languageMapping.otherSection.item2.buttonLabel[language]} />
      </div>
    </div>
  )
}


function Card3({ language }) {
  return (
    <div className={styles.cardWrapper}>
      <Card
        title={languageMapping.otherSection.item3.title[language]}
        description={languageMapping.otherSection.item3.description[language]}
        imgLink={newsSymbol}
      />
      <div className={styles.button}>
        <LinkButton link={languageMapping.otherSection.item3.buttonLink[language]} label={languageMapping.otherSection.item3.buttonLabel[language]} />
      </div>
    </div>
  )
}


function Card4({ language }) {
  return (
    <div className={styles.cardWrapper}>
      <Card
        title={languageMapping.otherSection.item4.title[language]}
        description={languageMapping.otherSection.item4.description[language]}
        imgLink={infoSymbol}
      />
      <div className={styles.button}>
        <LinkButton link={languageMapping.otherSection.item4.buttonLink[language]} label={languageMapping.otherSection.item4.buttonLabel[language]} />
      </div>
    </div>
  )
}