"use client";

import styles from "../ServiceDetailContent.module.css";
import { useRef } from "react";
import LinkButton from "@/components/common/UI/button/button.js";
import { useScrollFade } from "@/components/common/utils/useScrollFade.js";
import { languageMapping } from "./languageMapping.js";
import { linkMap, linkMap, linkMap } from "@/map/linkMap"; 


const linkMap = {
  en: linkMap.contact.en,
  ja: linkMap.contact.ja
}


// texts in Parallel page
function ParallelDetailContent({ language }) {

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
  const ref13 = useRef(null);
  const ref14 = useRef(null);
  const ref15 = useRef(null);
  const ref16 = useRef(null);
  const ref17 = useRef(null);

  useScrollFade([ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17]);


  return (
    <div className={styles.container}>

      <div className={`${styles.title} ${styles.fade}`} ref={ref1}>
        <h1>Parallel</h1>
      </div>

      <div className={`${styles.subtitle} ${styles.fade}`} ref={ref2}>
        <h4>New Dimension Development</h4>
      </div>

      <div className={styles.content}>

        <div className={styles.item}>
          <div className={`${styles.itemTitle} ${styles.fade}`} ref={ref3}>
            <h3>{languageMapping.content1.title[language]}</h3>
          </div>
          <div className={styles.fade} ref={ref4}>
            <br></br><br></br>
            <p>{languageMapping.content1.p1[language]}</p>
            <br></br>
          </div>
          <div className={styles.fade} ref={ref5}>
            <p>{languageMapping.content1.p2[language]}</p>
            <br></br>
          </div>
          <div className={styles.fade} ref={ref6}>
          <br></br><br></br>
            <p>{languageMapping.content1.p3[language]}</p>
            <p>{languageMapping.content1.p4[language]}</p>
            <p>{languageMapping.content1.p5[language]}</p>
            <p>{languageMapping.content1.p6[language]}</p>
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
            <br></br>
          </div>
          <div className={styles.fade} ref={ref9}>
            <p>{languageMapping.content2.p2[language]}</p>
            <br></br><br></br><br></br>
          </div>
        </div>

        <div className={styles.item}>
          <div className={`${styles.itemTitle} ${styles.fade}`} ref={ref10}>
            <h3>{languageMapping.content3.title[language]}</h3>
          </div>
          <div className={styles.fade} ref={ref11}>
            <br></br><br></br>
            <p>{languageMapping.content3.p1[language]}</p>
            <br></br><br></br>
          </div>
          <div className={styles.fade} ref={ref12}>
            <p>{languageMapping.content3.p2[language]}</p>
            <br></br><br></br>
          </div>
          <div className={styles.fade} ref={ref13}>
            <p>{languageMapping.content3.p3[language]}</p>
            <br></br><br></br><br></br>
          </div>
        </div>

        <div className={styles.item}>
          <div className={`${styles.itemTitle} ${styles.fade}`} ref={ref14}>
            <h3>{languageMapping.content4.title[language]}</h3>
          </div>
          <div className={styles.fade} ref={ref15}>
            <br></br><br></br>
            <p>{languageMapping.content4.p1[language]}</p>
            <br></br>
          </div>
          <div className={styles.fade} ref={ref16}>
            <p>{languageMapping.content4.p2[language]}</p>
            <br></br><br></br><br></br><br></br>
          </div>
        </div>

        <div className={`${styles.button} ${styles.fade}`} ref={ref17}>
          <LinkButton language={language} label={"Contact"} link={linkMap[language]}/>
        </div>

      </div>

    </div>
  );
}


export default ParallelDetailContent;