'use client'

import styles from './Recruit.module.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { languageMapping } from './languageMapping.js';
import RecruitList from './RecruitList.js';
import { RecruitPositionEngineer, RecruitPositionMarketer, RecruitPositionDesigner } from './RecruitPosition.js';
import recruitBgImage from '../../../../public/images/recruit.webp';



export default function Recruit({ language }) {
  return (
    <>
      <div className={styles.container}>

        <div className={styles.title}>
          <h1>Recruit</h1>
        </div>

        <RecruitHead language={language} />

        <RecruitAbout language={language} />

        <RecruitLists language={language} />

      </div>
    </>
  );
}



function RecruitHead({ language }) {
  return (
    <div className={styles.head}>

      <Image
        src={recruitBgImage}
        alt="recruit background image for the subtitle"
        className={styles.headBackground}
      />

      <div className={styles.headContent}>
        <div className={styles.headTitle}>
          <p>{languageMapping.recruitHead.title.p1[language]}</p>
          <p>{languageMapping.recruitHead.title.p2[language]}</p>
        </div>
        <div className={styles.headSubtitle}>
          <p>{languageMapping.recruitHead.subtitle.p1[language]}
            {languageMapping.recruitHead.subtitle.p2[language]}
            {languageMapping.recruitHead.subtitle.p3[language]}
          </p>
        </div>
      </div>
    </div>
  );
}


function RecruitAbout({ language }) {
  return (
    <div className={styles.about}>

      <div className={`${styles.aboutContent} ${styles.borderBottom}`}>

        <div className={styles.aboutTitle}>
          <p>{languageMapping.recruitAbout.content1.title[language]}</p>
        </div>

        <div className={styles.aboutDescription}>
          <p>{languageMapping.recruitAbout.content1.description.p1[language]}</p>
          <p>{languageMapping.recruitAbout.content1.description.p2[language]}</p>
          <p>{languageMapping.recruitAbout.content1.description.p3[language]}</p>
          <p>{languageMapping.recruitAbout.content1.description.p4[language]}</p>
          <p>{languageMapping.recruitAbout.content1.description.p5[language]}</p>
          <p>{languageMapping.recruitAbout.content1.description.p6[language]}</p>
        </div>

      </div>

      <div className={styles.aboutContent}>

        <div className={styles.aboutTitle}>
          <p>{languageMapping.recruitAbout.content2.title[language]}</p>
        </div>

        <div className={styles.aboutDescription}>
          <p>{languageMapping.recruitAbout.content2.description.p1[language]}</p>
          <p>{languageMapping.recruitAbout.content2.description.p2[language]}</p>
          <br></br>
          <p>{languageMapping.recruitAbout.content2.description.p3[language]}</p>
        </div>

      </div>

    </div>
  )
}



// all the dropdowns for recruit positions
function RecruitLists({ language }) {

  const [isEngineerOpen, setIsEngineerOpen] = useState(false);
  const [isMarketerOpen, setIsMarketerOpen] = useState(false);
  const [isDesignerOpen, setIsDesignerOpen] = useState(false);

  const toggleEngineer = () => { setIsEngineerOpen(!isEngineerOpen); }
  const toggleMarketer = () => { setIsMarketerOpen(!isMarketerOpen); }
  const toggleDesigner = () => { setIsDesignerOpen(!isDesignerOpen); }



  const [windowWidth, setWindowWidth] = useState(null);

  const minDesktopWidth = 820; // border for change layout


  // get client window width
  useEffect(() => {

    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.position}>

      {windowWidth > minDesktopWidth &&
      <>
      <div className={styles.positionList}>
        <div className={styles.positionListItem} onClick={toggleEngineer}>
          <RecruitList title={languageMapping.recruitPosition.engineer.title[language]} isOpen={isEngineerOpen} toggle={toggleEngineer} />
        </div>
        <div className={styles.positionListItem} onClick={toggleMarketer}>
          <RecruitList title={languageMapping.recruitPosition.marketer.title[language]} isOpen={isMarketerOpen} toggle={toggleMarketer} />
        </div>
        <div className={styles.positionListItem} onClick={toggleDesigner}>
          <RecruitList title={languageMapping.recruitPosition.designer.title[language]} isOpen={isDesignerOpen} toggle={toggleDesigner} />
        </div>
      </div>

      <div className={styles.positionDetail}>
      {isEngineerOpen &&
      <>
        <RecruitPositionEngineer language={language}/>
        <Spacer />
      </>
      }
      {isMarketerOpen &&
      <>
        <RecruitPositionMarketer language={language} />
        <Spacer />
      </>
      }
      {isDesignerOpen &&
        <RecruitPositionDesigner language={language} />
      }
      </div>
      </>
      }


      {windowWidth <= minDesktopWidth &&
      <>
      <div className={styles.positionList}>
        <div className={styles.positionListItem} onClick={toggleEngineer}>
          <RecruitList title={languageMapping.recruitPosition.engineer.title[language]} isOpen={isEngineerOpen} toggle={toggleEngineer} />
        </div>
        {isEngineerOpen &&
        <div className={styles.positionDetail}>
          <RecruitPositionEngineer language={language}/>
        </div>
        }
        <div className={styles.positionListItem} onClick={toggleMarketer}>
          <RecruitList title={languageMapping.recruitPosition.marketer.title[language]} isOpen={isMarketerOpen} toggle={toggleMarketer} />
        </div>
        {isMarketerOpen &&
        <div className={styles.positionDetail}>
          <RecruitPositionMarketer language={language} />
        </div>
        }
        <div className={styles.positionListItem} onClick={toggleDesigner}>
          <RecruitList title={languageMapping.recruitPosition.designer.title[language]} isOpen={isDesignerOpen} toggle={toggleDesigner} />
        </div>
        {isDesignerOpen &&
        <div className={styles.positionDetail}>
          <RecruitPositionDesigner language={language} />
        </div>
        }
      </div>
      </>
      }

    </div>
  )
}


function Spacer() {
  return (
    <div className={styles.spacer}></div>
  )
}