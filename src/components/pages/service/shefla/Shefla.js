import styles from "./Shefla.module.css";
import Underlay from "../Underlay";
import Hero from "../Hero";
import VideoText from "../VideoText";
import Spacer from "../Spacer";
import Content1 from "./content1/Content1";
import Content2 from "./content2/Content2";
import Content3 from "./content3/Content3";
import LinkButton from "@/components/common/UI/button/button";
import { languageMapping } from "./languageMapping";



const color = "#C1848E";

export default function Shefla({ language }) {
  return (
    <div className={styles.container}>
      <Underlay />
      <Hero>
        <VideoText position={[0, 0.5, -2]} title={languageMapping.title[language]} src="/assets/textures/video/shefla.mp4" />
      </Hero>
      <Spacer /><Spacer />
      <Content1 language={language} color={color} />
      <Spacer /><Spacer />
      <Content2 language={language} color={color} />
      <Spacer /><Spacer />
      <Content3 language={language} color={color} />
      <Spacer /><Spacer /><Spacer />
      <div className={styles.button}>
        <LinkButton hasExternalLink={true} link="https://seeedtoflower.com/" label="Learn More" />
      </div>
      <Spacer /><Spacer />
    </div>
  );
}