import styles from "./AboutMemeSection.module.css";
import commonStyles from "./Common.module.css";
import LinkButton from '@/components/common/UI/button/button';
import BorderLine from '@/components/common/UI/line/BorderLine';
import Panel from '@/components/common/UI/card/Panel';
import { languageMapping } from "./languageMapping";
import missionSymbol from '@/public/images/mission.webp';
import visionSymbol from '@/public/images/vision.webp';
import valueSymbol from '@/public/images/value.webp';

// about meme section
function AboutMemeSection({ language }) {
  return (
    <div className={styles.container}>

      <div className={`${styles.title} ${commonStyles.title}`}>
        <h1>About Meme</h1>
      </div>

      <BorderLine />


      <Content language={language} />


      <div className={styles.buttonContainer}>
        <LinkButton
          label={languageMapping.aboutMeme.button.label[language]}
          link={languageMapping.aboutMeme.button.link[language]}
        />
      </div>

    </div>
  );
}


const color = "linear-gradient(315deg, rgba(255,160,0,1) 0%, rgba(148,0,107,1) 50%, rgba(29,173,235,1) 100%)";

function Content({ language }) {
  return (
    <div className={styles.content}>
      <div className={styles.panelWrapper}>
        <Panel
          title="Mission"
          imgUrl={missionSymbol}
          text={languageMapping.aboutMeme.content.mission[language]}
          color={color}
        />
      </div>
      <div className={styles.panelWrapper}>
        <Panel
          title="Vision"
          imgUrl={visionSymbol}
          text={languageMapping.aboutMeme.content.vision[language]}
          color={color}
        />
      </div>
      <div className={styles.panelWrapper}>
        <Panel
          title="Value"
          imgUrl={valueSymbol}
          text={languageMapping.aboutMeme.content.value[language]}
          color={color}
        />
      </div>
    </div>
  )
}



export default AboutMemeSection;