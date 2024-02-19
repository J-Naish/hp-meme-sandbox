import styles from "./Shefla.module.css";
import Underlay from "../Underlay";
import Hero from "../Hero";
import VideoText from "../VideoText";
import Spacer from "../Spacer";
import Content1 from "./content1/Content1";
import Content2 from "./content2/Content2";
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
    </div>
  );
}