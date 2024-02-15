import styles from "./Parallel.module.css";
import Spacer from "../Spacer";
import Hero from "../Hero";
import VideoText from "../VideoText";
import Content1 from "./Content1";
import { languageMapping } from "./languageMapping";


const color = "#67D2DB";

export default function Parallel({ language }) {
  return (
    <div className={styles.container}>
      <Hero>
        <VideoText position={[0, 0.5, -2]} title={languageMapping.title[language]} src="/assets/textures/video/parallel.mp4" />
      </Hero>
      <Spacer /><Spacer />
      <Content1 language={language} color={color} />
    </div>
  );
}