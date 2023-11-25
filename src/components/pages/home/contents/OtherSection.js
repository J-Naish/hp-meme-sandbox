import styles from "./OtherSection.module.css";
import Image from 'next/image';
import LinkButton from '@/components/common/UI/button/button';
import { languageMapping } from './languageMapping.js';
import recruitBgImage from '../../../../../public/images/recruit.webp';
import contactBgImage from '../../../../../public/images/contact.webp';


function OtherSection({ language }){
  return (
    <div className={styles.container}>
      <Content
        title={languageMapping.otherSection.item1.title[language]}
        description={languageMapping.otherSection.item1.description[language]}
        imgUrl={recruitBgImage}
        buttonLabel={languageMapping.otherSection.item1.buttonLabel[language]}
        buttonLink={languageMapping.otherSection.item1.buttonLink[language]}
      />
      <Content
        title={languageMapping.otherSection.item2.title[language]}
        description={languageMapping.otherSection.item2.description[language]}
        imgUrl={contactBgImage}
        buttonLabel={languageMapping.otherSection.item2.buttonLabel[language]}
        buttonLink={languageMapping.otherSection.item2.buttonLink[language]}
      />
    </div>
  );
}


function Content({ title, description, imgUrl, buttonLabel, buttonLink }){
  return(
    <div className={styles.contentWrapper}>

      <Image
        src={imgUrl}
        alt="background image for the recruit and contact section"
        className={styles.backgroundImage}
      />

      <div className={styles.content}>
        <div className={styles.contentTitle}>
          <h2>{title}</h2>
        </div>
        <div className={styles.contentSubtitle}>
          <p>{description}</p>
        </div>

        <div className={styles.contentButton}>
          <LinkButton
            label={buttonLabel}
            link={buttonLink}
          />
        </div>
      </div>

    </div>
  );
}


export default OtherSection;