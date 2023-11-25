'use client'

import styles from './Contact.module.css';
import { useState } from 'react';
import Background from '@/components/common/UI/background/Background';
import ContactForm from './ContactForm.js';
import StepProcessCircle from './StepProcessCircle.js';
import ShareState from './ShareState.js';
import ScrollToTop from '@/components/common/UI/ScrollToTop';
import { languageMapping } from './languageMapping.js';
import LinkButton from '@/components/common/UI/button/button';





export default function Contact({ language }) {

  const [statusMessage, setStatusMessage] = useState("");

  // states for current page
  const [isConfirmPage, setIsConfirmPage] = useState(false);
  const [isCompletePage, setIsCompletePage] = useState(false);

  // get name input
  const [inputName, setInputName] = useState("");


  return (
    <>
      <ShareState.Provider value={{
        isConfirmPage, setIsConfirmPage,
        isCompletePage, setIsCompletePage
        }}
      >

        <div className={styles.container}>

          <Background />

          <div className={styles.titleContainer}>

            {/* switch page content based on current page */}
            {!isCompletePage &&
            <>
            <div className={styles.title}>
              <h1>Contact</h1>
            </div>
            <div className={styles.subtitle}>
              <p>{languageMapping.subtitle1[language]}</p>
              <p>{languageMapping.subtitle2[language]}</p>
            </div>
            </>
            }
            {isCompletePage &&
            <div className={styles.completeTitle}>
              <h1>{languageMapping.completeMessage.title[language]}</h1>
            </div>
            }

          </div>

          <div className={styles.stepUi}>
            <StepProcessCircle language={language} />
          </div>


          <div className={styles.formContainer}>

            {/* switch page content based on current page */}
            {!isCompletePage &&
            <>
            <div className={styles.formStatus} style={{color: "red"}}>
              {statusMessage}
            </div>
            <ContactForm language={language} setStatusMessage={setStatusMessage} setName={setInputName} />
            </>
            }
            {isCompletePage &&
              <ScrollToTop>
                <CompletePageContent language={language} />
              </ScrollToTop>
            }

          </div>


        </div>

      </ShareState.Provider>
    </>
  );
}



function CompletePageContent({ language }) {

  const linkMap = {
    en: "/en",
    ja: "/"
  }

  return (
    <div className={styles.completeContent}>
      <p>{languageMapping.completeMessage.p1[language]}</p>
      <p>{languageMapping.completeMessage.p2[language]}</p>
      <div className={styles.completeButtonContainer}>
        <LinkButton
          label={languageMapping.completeMessage.buttonLabel[language]}
          link={linkMap[language]}
        />
      </div>
    </div>
  );
}