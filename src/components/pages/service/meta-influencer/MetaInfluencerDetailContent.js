"use client";


import styles from "./MetaInfluencerDetailContent.module.css";
import Hero from "../Hero.js";
import VideoText from "../VideoText";
import { languageMapping } from "./languageMapping";


// texts in Meta Influencer page
export default function MetaInfluencerDetailContent({ language }) {
  return (
    <div className={styles.container}>
      <Hero>
        <VideoText position={[0, 2, -2]} title={languageMapping.title1[language]} src="/assets/textures/video/meta-influencer.mp4" />
        <VideoText position={[0, 1, -2]} title={languageMapping.title2[language]} src="/assets/textures/video/meta-influencer.mp4" />
      </Hero>
    </div>
  );
}