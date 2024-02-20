'use client';

import styles from "./ServiceSection.module.css";
import commonStyles from "./Common.module.css";
import BorderLine from '@/components/common/UI/line/BorderLine';
import ImmersiveCard from "@/components/common/UI/card/ImmersiveCard";
import Text from "@/components/common/3D/Text";
import { languageMapping } from "./languageMapping";
import metaInfluencer from "@/public/images/meta-influencer-symbol.webp";
import parallel from "@/public/images/parallel-symbol.webp";
import shefla from "@/public/images/shefla-symbol.webp";


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
            imgUrl={metaInfluencer}
            title={languageMapping.metaInfluencer.title[language]}
            description={languageMapping.metaInfluencer.description[language]}
            link={languageMapping.metaInfluencer.link[language]}
            color={color1}
          >
            <Text title="Meta" position={[0, 0.6, 0]} color={color1} scale={[1, 1, 1]} />
            <Text title="Influencer" position={[0, -0.6, 0]} color={color1} scale={[1, 1, 1]} />
          </ImmersiveCard>
        </div>
        <div className={styles.cardWrapper}>
          <ImmersiveCard
            imgUrl={parallel}
            title={languageMapping.parallel.title[language]}
            description={languageMapping.parallel.description[language]}
            link={languageMapping.parallel.link[language]}
            color={color2}
          >
            <Text title="Parallel" position={[0, 0, 0]} color={color2} scale={[1, 1, 1]} />
          </ImmersiveCard>
        </div>
        <div className={styles.cardWrapper}>
          <ImmersiveCard
            imgUrl={shefla}
            title={languageMapping.shefla.title[language]}
            description={languageMapping.shefla.description[language]}
            link={languageMapping.shefla.link[language]}
            color={color3}
          >
            <Text title="Shefla" position={[0, 0, 0]} color={color3} scale={[1, 1, 1]} />
          </ImmersiveCard>
        </div>
      </div>

    </div>
  );
}




export default ServiceSection;