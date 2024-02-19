import styles from "./MetaInfluencer.module.css";
import Underlay from "../Underlay";
import Hero from "../Hero";
import VideoText from "../VideoText";
import Spacer from "../Spacer";
import Content1 from "./content1/Content1";
import Content2 from "./content2/Content2";
import Content3 from "./content3/Content3";
import ScrollText from "../ScrollText";
import { languageMapping } from "./languageMapping";


const color = "#ACC7DA";

export default function MetaInfluencer({ language }) {
  return (
    <div className={styles.container}>
      <Underlay />
      <Hero lookAtY={1}>
        <VideoText position={[0, 1.35, -2]} title={languageMapping.title1[language]} src="/assets/textures/video/meta-influencer.mp4" />
        <VideoText position={[0, 0.35, -2]} title={languageMapping.title2[language]} src="/assets/textures/video/meta-influencer.mp4" />
      </Hero>
      <Spacer /><Spacer />
      <Content1 language={language} color={color} />
      <Spacer /><Spacer />
      <ScrollText
        text1="AI Technology"
        text2="3D Design"
        text3="SNS Marketing"
      />
      <Spacer /><Spacer />
      <Content2 language={language} color={color} />
      <Spacer /><Spacer />
      <Content3 language={language} color={color} />
      <Spacer /><Spacer />
    </div>
  );
}
