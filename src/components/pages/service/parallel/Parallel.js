import styles from "./Parallel.module.css";
import Underlay from "../Underlay";
import Spacer from "../Spacer";
import Hero from "../Hero";
import VideoText from "../VideoText";
import Content1 from "./content1/Content1";
import Content2 from "./content2/Content2";
import Content3 from "./content3/Content3";
import Content4 from "./content4/Content4";
import Content5 from "./content5/Content5";
import LinkButton from "@/components/common/UI/button/button";
import { languageMapping } from "./languageMapping";



const color = "#67D2DB";

export default function Parallel({ language }) {
  // TODO: temporary link
  const link = "https://www.apple.com";
  return (
    <div className={styles.container}>
      <Underlay />
      <Hero>
        <VideoText position={[0, 0.5, -2]} title={languageMapping.title[language]} src="/assets/textures/video/parallel.mp4" />
      </Hero>
      <Spacer /><Spacer />
      <Content1 language={language} color={color} />
      <Spacer /><Spacer />
      <Content2 language={language} color={color} />
      <Spacer /><Spacer />
      <Content3 language={language} color={color} />
      <Spacer /><Spacer />
      <Content4 language={language} color={color} />
      <Spacer /><Spacer />
      <Content5 language={language} color={color} />
      {/* <Spacer /><Spacer /><Spacer /><Spacer />
      <div className={styles.button}>
        <LinkButton hasExternalLink={true} link={link} label="Learn More" />
      </div> */}
      <Spacer /><Spacer />
    </div>
  );
}