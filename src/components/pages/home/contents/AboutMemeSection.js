import styles from "./AboutMemeSection.module.css";
import commonStyles from "./Common.module.css";
import LinkButton from '@/components/common/UI/button/button'
import BorderLine from '@/components/common/UI/line/BorderLine'
import { languageMapping } from "./languageMapping";



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



function Content({ language }){
  return (
    <div className={styles.content}>
      <p>{languageMapping.aboutMeme.content.p1[language]}</p>
      <br></br><br></br>
      <p>{languageMapping.aboutMeme.content.p2[language]}</p>
    </div>
  )
}



export default AboutMemeSection;