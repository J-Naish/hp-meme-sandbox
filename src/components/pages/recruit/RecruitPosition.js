'use client';

import styles from "./RecruitPosition.module.css";
import { useState } from "react";
import ToggleTriangle from "@/components/common/UI/toggle-triangle/ToggleTriangle";
import { languageMapping } from "./languageMapping.js";


function RecruitPositionEngineer({ language }) {
  return (
    <>
      <RecruitPositionWeb language={language} />
      <RecruitPositionXr language={language} />
      <RecruitPosition3dDev language={language} />
    </>
  )
}
function RecruitPositionMarketer({ language }) {
  return (
    <>
      <RecruitPositionHead title={languageMapping.recruitPosition.marketer.socialMedia[language]} hasToggle={false} />
      <RecruitPositionHead title={languageMapping.recruitPosition.marketer.influencer[language]} hasToggle={false} />
      <RecruitPositionHead title={languageMapping.recruitPosition.marketer.copywriter[language]} hasToggle={false} />
      <RecruitPositionHead title={languageMapping.recruitPosition.marketer.seoWriter[language]} hasToggle={false} />
    </>
  )
}
function RecruitPositionDesigner({ language }) {
  return (
    <>
      <RecruitPosition2dDesign language={language} />
      <RecruitPosition3dDesign language={language} />
    </>
  )
}




function RecruitPositionWeb({ language }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
    <div onClick={toggle}>
      <RecruitPositionHead 
        title={languageMapping.recruitPosition.engineer.web.title[language]}
        hasToggle={true}
        isOpen={isOpen}
        toggle={toggle}
      />
    </div>
      { isOpen &&
      <RecruitPositionWebItem language={language} />
      }
    </>
  )
}
function RecruitPositionXr({ language }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
    <div onClick={toggle}>
      <RecruitPositionHead title={languageMapping.recruitPosition.engineer.xr.title[language]}
        hasToggle={true}
        isOpen={isOpen}
        toggle={toggle}
      />
    </div>
      { isOpen &&
      <RecruitPositionXrItem language={language} />
      }
    </>
  )
}
function RecruitPosition3dDev({ language }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
    <div onClick={toggle}>
      <RecruitPositionHead
        title={languageMapping.recruitPosition.engineer.dev3d.title[language]}
        hasToggle={true}
        isOpen={isOpen}
        toggle={toggle}
      />
    </div>
      { isOpen &&
      <RecruitPosition3dDevItem language={language} />
      }
    </>
  )
}

function RecruitPosition2dDesign({ language }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
    <div onClick={toggle}>
      <RecruitPositionHead
        title={languageMapping.recruitPosition.designer.twoD.title[language]}
        hasToggle={true}
        isOpen={isOpen}
        toggle={toggle}
      />
    </div>
      { isOpen &&
      <RecruitPosition2dDesignItem language={language} />
      }
    </>
  )
}
function RecruitPosition3dDesign({ language }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
    <div onClick={toggle}>
      <RecruitPositionHead
        title={languageMapping.recruitPosition.designer.threeD.title[language]}
        hasToggle={true}
        isOpen={isOpen}
        toggle={toggle}
      />
    </div>
      { isOpen &&
      <RecruitPosition3dDesignItem language={language} />
      }
    </>
  )
}

function RecruitPositionHead({ title, hasToggle, isOpen, toggle }) {
  return (
    <>
      <div className={styles.positionHeadContainer}>
        <div className={styles.positionHeadTitleContainer}>
          <div className={styles.rectangle}></div>
          <div className={styles.positionHeadTitle}>
            {title}
          </div>
        </div>
        { hasToggle &&
        <div className={styles.toggleSymbol}>
          <div className={styles.toggleSymbol}>
            <ToggleTriangle isOpen={isOpen} toggle={toggle}/>
          </div>
        </div>
        }
      </div>
    </>
  )
}


function RecruitPositionWebItem({ language }) {
  return (
    <div className={styles.positionItem}>
      <div className={styles["recruit-position-item-title"]}>
        <p>{languageMapping.recruitPosition.engineer.web.item1.title[language]}</p>
      </div>
      <div className={styles["recruit-position-item-content"]}>
        <p>{languageMapping.recruitPosition.engineer.web.item1.content[language]}</p>
      </div>
      <br></br>
      <div className={styles["recruit-position-item-title"]}>
        <p>{languageMapping.recruitPosition.engineer.web.item2.title[language]}</p>
      </div>
      <div className={styles["recruit-position-item-content"]}>
        <p>{languageMapping.recruitPosition.engineer.web.item2.content[language]}</p>
      </div>
    </div>
  )
}
function RecruitPositionXrItem({ language }) {
  return (
    <div className={styles.positionItem}>
      <div className={styles["recruit-position-item-content"]}>
        <p>{languageMapping.recruitPosition.engineer.xr.item1.content[language]}</p>
      </div>
    </div>
  )
}
function RecruitPosition3dDevItem({ language }) {
  return (
    <div className={styles.positionItem}>
      <div className={styles["recruit-position-item-content"]}>
        <p>{languageMapping.recruitPosition.engineer.dev3d.item1.content[language]}</p>
      </div>
    </div>
  )
}
function RecruitPosition2dDesignItem({ language }) {
  return (
    <div className={styles.positionItem}>
      <div className={styles["recruit-position-item-content"]}>
        <p>{languageMapping.recruitPosition.designer.twoD.item1[language]}</p>
      </div>
    </div>
  )
}
function RecruitPosition3dDesignItem({ language }) {
  return (
    <div className={styles.positionItem}>
      <div className={styles["recruit-position-item-title"]}>
        <p>{languageMapping.recruitPosition.designer.threeD.item1.title[language]}</p>
      </div>
      <div className={styles["recruit-position-item-content"]}>
        <p>{languageMapping.recruitPosition.designer.threeD.item1.content[language]}</p>
      </div>
      <br></br>
      <div className={styles["recruit-position-item-title"]}>
        <p>{languageMapping.recruitPosition.designer.threeD.item2.title[language]}</p>
      </div>
      <div className={styles["recruit-position-item-content"]}>
        <p>{languageMapping.recruitPosition.designer.threeD.item2.content[language]}</p>
      </div>
      <br></br>
      <div className={styles["recruit-position-item-title"]}>
        <p>{languageMapping.recruitPosition.designer.threeD.item3.title[language]}</p>
      </div>
      <div className={styles["recruit-position-item-content"]}>
        <p>{languageMapping.recruitPosition.designer.threeD.item3.content[language]}</p>
      </div>
    </div>
  )
}




export {RecruitPositionEngineer, RecruitPositionMarketer, RecruitPositionDesigner};