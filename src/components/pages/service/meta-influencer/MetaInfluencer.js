import styles from "./MetaInfluencer.module.css";
import Hero from "../Hero";
import VideoText from "../VideoText";
import { languageMapping } from "./languageMapping";


export default function MetaInfluencer({ language }) {
  return (
    <div className={styles.container}>
      <Hero lookAtY={1}>
        <VideoText position={[0, 1.35, -2]} title={languageMapping.title1[language]} src="/assets/textures/video/meta-influencer.mp4" />
        <VideoText position={[0, 0.35, -2]} title={languageMapping.title2[language]} src="/assets/textures/video/meta-influencer.mp4" />
      </Hero>
    </div>
  );
}
