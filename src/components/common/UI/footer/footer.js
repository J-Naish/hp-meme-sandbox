'use client';

import styles from "./footer.module.css";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoImage from "../../../../../public/images/logo.png";
import { linkMap } from "@/map/linkMap";


const mapping = {
  service: {
    metaInfluencer: {
      title: {
        ja: 'Meta Influencer',
        en: 'Meta Influencer',
      },
      link: {
        ja: linkMap.service.metaInfluencer.ja,
        en: linkMap.service.metaInfluencer.en,
      }
    },
    parallel: {
      title: {
        ja: 'Parallel',
        en: 'Parallel',
      },
      link: {
        ja: linkMap.service.parallel.ja,
        en: linkMap.service.parallel.en,
      }
    },
    shefla: {
      title: {
        ja: 'Shefla',
        en: 'Shefla',
      },
      link: {
        ja: linkMap.service.shefla.ja,
        en: linkMap.service.shefla.en,
      }
    },
  },
  company: {
    about: {
      title: {
        ja: '会社概要',
        en: 'About',
      },
      link: {
        ja: linkMap.about.ja,
        en: linkMap.about.en,
      }
    },
    info: {
      title: {
        ja: '会社情報',
        en: 'Info',
      },
      link: {
        ja: linkMap.info.ja,
        en: linkMap.info.en,
      }
    },
    news: {
      title: {
        ja: 'News',
        en: 'News',
      },
      link: {
        ja: linkMap.news.ja,
        en: linkMap.news.en,
      }
    },
  },
  contact: {
    contact: {
      title: {
        ja: 'お問い合わせ',
        en: 'Contact',
      },
      link: {
        ja: linkMap.contact.ja,
        en: linkMap.contact.en,
      }
    },
    recruit: {
      title: {
        ja: '採用情報',
        en: 'Recruit',
      },
      link: {
        ja: linkMap.recruit.ja,
        en: linkMap.recruit.en,
      }
    },
  },
  home: {
    link: {
      ja: linkMap.home.ja,
      en: linkMap.home.en,
    }
  }
}


export default function Footer({ language }) {

  const [windowWidth, setWindowWidth] = useState(null);

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
    <div className={styles.container}>


      <div className={styles.head}>
        <Link href={mapping.home.link[language]} className={styles.logo}>
          <Logo className={styles.logo}/>
        </Link>
        <Link href={mapping.home.link[language]} className={styles.title}><h4>Meme</h4></Link>
      </div>

      <div className={styles.body}>

        {/* elements on desktops and tablets */}
        { windowWidth > 520 && (
          <div className={styles.leftItem}>
            <FooterBodyService language={language} />
            <FooterBodyCompany language={language} />
            <FooterBodyContact language={language} />
          </div>
        )}
        { windowWidth > 520 && (
          <div className={styles.rightItem}>
            <FooterBodyLanguage />
          </div>
        )}

        {/* elements on mobiles */}
        { windowWidth <= 520 && (
          <div className={styles.bodyMobile}>
            <div className={styles.leftItemMobile}>
              <FooterBodyService language={language} />
              <FooterBodyCompany language={language} />
            </div>
            <div className={styles.rightItemMobile}>
              <FooterBodyContact language={language} />
              <FooterBodyLanguage />
            </div>
          </div>
        )}

      </div>


    </div>
  );
}



function Logo({className}) {
  return (
    <div className={className}>
      <Image
        src={logoImage}
        alt="logo"
        width={45}
        height={45}
      />
    </div>
  );
}



function FooterBodyService({ language }) {
  return (
    <div className={styles.listContainer}>
      <div className={styles.listTitle}>
        <h4>Service</h4>
      </div>
      <div className={styles.list}>
        <div className={styles.listItem}>
          <Link href={mapping.service.metaInfluencer.link[language]}>{mapping.service.metaInfluencer.title[language]}</Link>
        </div>
        <div className={styles.listItem}>
          <Link href={mapping.service.parallel.link[language]}>{mapping.service.parallel.title[language]}</Link>
        </div>
        <div className={styles.listItem}>
          <Link href={mapping.service.shefla.link[language]}>{mapping.service.shefla.title[language]}</Link>
        </div>
      </div>
    </div>
  )
}

function FooterBodyCompany({ language }) {
  return (
    <div className={styles.listContainer}>
      <div className={styles.listTitle}>
        <h4>Company</h4>
      </div>
      <div className={styles.list}>
        <div className={styles.listItem}>
          <Link href={mapping.company.about.link[language]}>{mapping.company.about.title[language]}</Link>
        </div>
        <div className={styles.listItem}>
          <Link href={mapping.company.info.link[language]}>{mapping.company.info.title[language]}</Link>
        </div>
        <div className={styles.listItem}>
          <Link href={mapping.company.news.link[language]}>{mapping.company.news.title[language]}</Link>
        </div>
      </div>
    </div>
  )
}

function FooterBodyContact({ language }) {
  return (
    <div className={styles.listContainer}>
      <div className={styles.listTitle}>
        <h4>Contact</h4>
      </div>
      <div className={styles.list}>
        <div className={styles.listItem}>
          <Link href={mapping.contact.contact.link[language]}>{mapping.contact.contact.title[language]}</Link>
        </div>
        <div className={styles.listItem}>
          <Link href={mapping.contact.recruit.link[language]}>{mapping.contact.recruit.title[language]}</Link>
        </div>
      </div>
    </div>
  )
}


function FooterBodyLanguage() {

  return (
    <div className={`${styles.listContainer} ${styles.listContainerRight}`}>
      <div className={styles.listTitle}>
        <h4>Language</h4>
      </div>
      <div className={styles.list}>
        <div className={styles.listItem}>
          <Link href="/en">English</Link>
        </div>
        <div className={styles.listItem}>
          <Link href="/">日本語</Link>
        </div>
      </div>
    </div>
  )
}