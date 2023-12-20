"use client";


import styles from "../ServiceDetailContent.module.css";
import { useRef } from "react";
import { useScrollFade } from "@/components/common/utils/useScrollFade.js";
import { languageMapping } from "./languageMapping.js";


// texts in Meta Influencer page
function MetaInfluencerDetailContent({ language }) {

  // TODO: should be modified because it is not beautiful
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const ref9 = useRef(null);
  const ref10 = useRef(null);
  const ref11 = useRef(null);
  const ref12 = useRef(null);

  useScrollFade([ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12]);

  return (
    <div className={styles.container}>

      <div className={`${styles.title} ${styles.fade}`} ref={ref1}>
        <h1>Meta Influencer</h1>
      </div>

      <div className={`${styles.subtitle} ${styles.fade}`} ref={ref2}>
        <h4>Next-Gen Superstar</h4>
      </div>

      <div className={styles.content}>

        <div className={styles.item}>
          <div className={`${styles.itemTitle} ${styles.fade}`} ref={ref3}>
            <h3>{languageMapping.content1.title[language]}</h3>
          </div>
          <div className={styles.fade} ref={ref4}>
            <br></br><br></br>
            <p>{languageMapping.content1.p1[language]}</p>
          </div>
          <br></br><br></br>
          <div className={styles.fade} ref={ref5}>
            <p>{languageMapping.content1.p2[language]}</p>
            <p>{languageMapping.content1.p3[language]}</p>
            <p>{languageMapping.content1.p4[language]}</p>
            <p>{languageMapping.content1.p5[language]}</p>
            <p>{languageMapping.content1.p6[language]}</p>
          </div>
          <br></br><br></br>
          <div className={styles.fade} ref={ref6}>
            <p>{languageMapping.content1.p7[language]}</p>
            <br></br><br></br><br></br>
          </div>
        </div>

        <div className={styles.item}>
          <div className={`${styles.itemTitle} ${styles.fade}`} ref={ref7}>
            <h3>{languageMapping.content2.title[language]}</h3>
          </div>
          <div className={styles.fade} ref={ref8}>
            <br></br><br></br>
            <p>{languageMapping.content2.p1[language]}</p>
            <p>{languageMapping.content2.p2[language]}</p>
            <p>{languageMapping.content2.p3[language]}</p>
          </div>
          <br></br>
          <div className={styles.fade} ref={ref9}>
            <p>{languageMapping.content2.p4[language]}</p>
          </div>
          <br></br>
          <div className={styles.fade} ref={ref10}>
            <p>{languageMapping.content2.p5[language]}</p>
            <br></br><br></br>
          </div>
        </div>

        <div className={styles.item}>
          <div className={`${styles.itemTitle} ${styles.fade}`} ref={ref11}>
            <h3>{languageMapping.content3.title[language]}</h3>
          </div>
          <div className={styles.fade} ref={ref12}>
            <br></br>
            <p>Coming soon..</p>
          </div>
        </div>

      </div>

    </div>
  );
}


export default MetaInfluencerDetailContent;