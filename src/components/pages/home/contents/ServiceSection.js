'use client';

import styles from "./ServiceSection.module.css";
import commonStyles from "./Common.module.css";
import dynamic from 'next/dynamic';
import BorderLine from '@/components/common/UI/line/BorderLine';
import ImmersiveCard from "@/components/common/UI/card/ImmersiveCard";
import { languageMapping } from "./languageMapping";
import temp1 from "../../../../../public/images/info-symbol.webp";
import temp2 from "../../../../../public/images/info-symbol.webp";
import temp3 from "../../../../../public/images/info-symbol.webp";


const DynamicServiceCanvas = dynamic(() =>
  import("./ServiceCanvas.js"), {
    loading: () => null,
  }
)


const color1 = "rgb(255,160,0)";
const color2 = "rgb(29,173,235)";
const color3 = "rgb(148,0,107)";

// all service section
function ServiceSection({ language }) {
  return (
    <div className={styles.container}>

      <div className={`${styles.title} ${commonStyles.title}`}>
        <h1>Service</h1>
      </div>

      <BorderLine />

      <div className={styles.content}>
        <div className={styles.cardWrapper}>
          <ImmersiveCard
            imgUrl={temp1}
            title={languageMapping.metaInfluencer.title[language]}
            description={languageMapping.metaInfluencer.description[language]}
            link={languageMapping.metaInfluencer.link[language]}
            color={color1}
          />
        </div>
        <div className={styles.cardWrapper}>
          <ImmersiveCard
            imgUrl={temp2}
            title={languageMapping.parallel.title[language]}
            description={languageMapping.parallel.description[language]}
            link={languageMapping.parallel.link[language]}
            color={color2}
          />
        </div>
        <div className={styles.cardWrapper}>
          <ImmersiveCard
            imgUrl={temp3}
            title={languageMapping.shefla.title[language]}
            description={languageMapping.shefla.description[language]}
            link={languageMapping.shefla.link[language]}
            color={color3}
          />
        </div>
      </div>

    </div>
  );
}




export default ServiceSection;