import styles from "./Shefla.module.css";
import Underlay from "../Underlay";
import Hero from "../Hero";
import VideoText from "../VideoText";
import { languageMapping } from "./languageMapping";


export default function Shefla({ language }) {
  return (
    <div className={styles.container}>
      <Underlay />
      <Hero>
        <VideoText position={[0, 0.5, -2]} title={languageMapping.title[language]} src="/assets/textures/video/shefla.mp4" />
      </Hero>
    </div>
  );
}