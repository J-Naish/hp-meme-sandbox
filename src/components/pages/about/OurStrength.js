'use client';

import styles from "./Common.module.css";
import Image from "next/image";
import { useResponsive } from '@/components/common/utils/useResponsive.js';
import devDesktopImage from '../../../../public/images/strength-development-desktop.webp';
import devImage from "../../../../public/images/strength-development.webp";
import designDesktopImage from "../../../../public/images/strength-design-desktop.webp";
import designImage from "../../../../public/images/strength-design.webp";
import marketingDesktopImage from "../../../../public/images/strength-marketing-desktop.webp";
import marketingImage from "../../../../public/images/strength-marketing.webp";


function OurStrength({ language }) {

  const isDesktopView = useResponsive();

  return (
    <div className={styles.container}>

      <div className={styles.title}>
        <h1>Our Strength</h1>
      </div>

        <div className={styles.content}>
          <p>{languageMapping.p1[language]}</p>
          <br></br>
          <p>{languageMapping.p2[language]}</p>
          <br></br>
          <p>{languageMapping.p3[language]}</p>
          <br></br><br></br>
          <p>{languageMapping.p4[language]}</p>
          { isDesktopView && (
          <>
            <Image
              src={devDesktopImage}
              alt="development stacks"
              className={styles.strengthImage}
            />
            <Image
              src={designDesktopImage}
              alt="design stacks"
              className={styles.strengthImage}
            />
            <Image
              src={marketingDesktopImage}
              alt="marketing stacks"
              className={styles.strengthImage}
            />
          </>
          )}
          { !isDesktopView && (
          <>
            <Image
              src={devImage}
              alt="development stacks"
              className={styles.strengthImage}
            />
            <Image
              src={designImage}
              alt="design stacks"
              className={styles.strengthImage}
            />
            <Image
              src={marketingImage}
              alt="marketing stacks"
              className={styles.strengthImage}
            />
          </>
          )}
        </div>
    </div>
  );
}


const languageMapping = {
  p1: {
    en: "We at Meme operate each business in three teams: marketers, engineers, and designers. Each member is not only specialized in their respective fields, but also has a comprehensive set of skills required in their field.",
    ja: "私たちMemeは、マーケッター・エンジニア・デザイナーの3つのチームに分かれて各事業を運営しています。各メンバーはそれぞれの専門分野に特化しているだけでなく、その分野において必要なスキルを包括的に携えてます。"
  },
  p2: {
    en: "The collaboration of these three elite teams is also strong, so the products and services created in each business are optimized from the three perspectives of marketing, engineering, and design.",
    ja: "それら3つの精鋭のチームの連携もまた強固なので、各事業で生み出されるプロダクトやサービスは、マーケティング・エンジニアリング・デザインの3つの視点から最適化されています。"
  },
  p3: {
    en: "Also, all Meme members are good at using generative AI such as LLM, so we have high productivity.",
    ja: "また、Memeのメンバーは全員がLLMを始めとする生成AIの活用に長けているので、高い生産性を持っているのことも私たちの強みです。"
  },
  p4: {
    en: "In fact, the skills and stacks that each team can handle are as follows.",
    ja: "実際に、各チームが扱えるスキルやスタックは以下の通りです。"
  }
}



export default OurStrength;