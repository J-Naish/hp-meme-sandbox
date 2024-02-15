import styles from "./Parallel.module.css";
import Hero from "../Hero";
import VideoText from "../VideoText";
import { languageMapping } from "./languageMapping";


export default function Parallel({ language }) {
  return (
    <div className={styles.container}>
      <Hero>
        <VideoText position={[0, 0.5, -2]} title={languageMapping.title[language]} src="/assets/textures/video/parallel.mp4" />
      </Hero>
    </div>
  );
}