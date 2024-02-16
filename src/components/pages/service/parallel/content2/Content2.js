import styles from "./Content2.module.css";
import ContentTitle from "../ContentTitle";
import Title from "../../Title";
import Card from "./Card";
import { languageMapping } from "../languageMapping";

import image1_1 from "../../../../../../public/images/service/parallel/content2/web/1.png";
import image1_2 from "../../../../../../public/images/service/parallel/content2/web/2.png";
import image1_3 from "../../../../../../public/images/service/parallel/content2/web/3.png";
import image1_4 from "../../../../../../public/images/service/parallel/content2/web/4.png";

import image2_1 from "../../../../../../public/images/service/parallel/content2/video/1.png";
import image2_2 from "../../../../../../public/images/service/parallel/content2/video/2.png";
import image2_3 from "../../../../../../public/images/service/parallel/content2/video/3.png";
import image2_4 from "../../../../../../public/images/service/parallel/content2/video/4.png";

export default function Content2({ language, color }) {
  return (
    <div className={styles.container}>
      <Title title={languageMapping.content2.title[language]} subtitle={languageMapping.content2.subtitle[language]} color={color} />
    
      <div className={styles.content}>
        <div className={styles.contentTitle}>
          <ContentTitle title={languageMapping.content2.item1.title[language]} color={color} />
        </div>
        <p className={styles.text}>{languageMapping.content2.item1.p[language]}</p>
        <div className={styles.cardContainer}>
          <Card title={languageMapping.content2.item1.card1.title[language]} imageUrl={image1_1} text={languageMapping.content2.item1.card1.text[language]} isLarge={true} />
          <Card title={languageMapping.content2.item1.card2.title[language]} imageUrl={image1_2} text={languageMapping.content2.item1.card2.text[language]} isLarge={true} />
          <Card title={languageMapping.content2.item1.card3.title[language]} imageUrl={image1_3} text={languageMapping.content2.item1.card3.text[language]} isLarge={true} />
          <Card title={languageMapping.content2.item1.card4.title[language]} imageUrl={image1_4} text={languageMapping.content2.item1.card4.text[language]} isLarge={true} />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.contentTitle}>
          <ContentTitle title={languageMapping.content2.item2.title[language]} color={color} />
        </div>
        <p className={styles.text}>{languageMapping.content2.item2.p[language]}</p>
        <div className={styles.cardContainer}>
          <Card title={languageMapping.content2.item2.card1.title[language]} imageUrl={image2_1} text={languageMapping.content2.item2.card1.text[language]} isLarge={false} />
          <Card title={languageMapping.content2.item2.card2.title[language]} imageUrl={image2_2} text={languageMapping.content2.item2.card2.text[language]} isLarge={false} />
          <Card title={languageMapping.content2.item2.card3.title[language]} imageUrl={image2_3} text={languageMapping.content2.item2.card3.text[language]} isLarge={false} />
          <Card title={languageMapping.content2.item2.card4.title[language]} imageUrl={image2_4} text={languageMapping.content2.item2.card4.text[language]} isLarge={false} />
        </div>
      </div>

    </div>
  );
}