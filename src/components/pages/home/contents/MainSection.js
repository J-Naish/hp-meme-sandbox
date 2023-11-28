import styles from './MainSection.module.css';
import LinkButton from '@/components/common/UI/button/button';
import { linkMap } from '@/map/linkMap';

export default function MainSection({ language }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Craft and Design<br/>New-Dimension<br/>Digital Solutions</h2>
      <p className={styles.subtitle}>{languageMapping.subtitle[language]}</p>
      <div className={styles.button}><LinkButton label="Contact Us" link={linkMap.contact[language]} /></div>
    </div>
  );
}


const languageMapping = {
  subtitle: {
    ja: "私たちMemeは、最先端の3D技術とSNSを用いたブランドマーケティングを通じて、サービスやプロダクトの価値を最大限まで高めるソリューションを提供します",
    en: "We provide solutions that maximize the value of services and products through brand marketing using state-of-the-art 3D technology and social media."
  }
}