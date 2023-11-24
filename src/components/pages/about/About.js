import styles from "./About.module.css";
import Head from './Head.js';
import AboutUs from './AboutUs.js';
import OurVision from './OurVision.js';
import NameOrigin from './NameOrigin.js';
import OurStrength from "./OurStrength.js";
import Background from './Background.js';
import BorderLine from '@/components/common/UI/line/BorderLine.js';
import Spacer from "./Spacer.js";



// all components in company about page
function About({ language }) {

  return (
    <>
        <div className={styles.container}>

          <Background />

          <Head language={language} />

          <div className={styles.contents}>
            <Spacer />
            <AboutUs language={language} />
            <Spacer /><Spacer />
            <BorderLine />
            <Spacer /><Spacer />
            <OurVision language={language} />
            <Spacer /><Spacer />
            <BorderLine />
            <Spacer /><Spacer />
            <NameOrigin language={language} />
            <Spacer /><Spacer />
            <BorderLine />
            <Spacer /><Spacer />
            <OurStrength language={language} />
            <Spacer /><Spacer />
          </div>

        </div>
    </>
  );
}



export default About;