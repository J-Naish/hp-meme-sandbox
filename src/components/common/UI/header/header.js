'use client';

import styles from "./header.module.css";
import { useState, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { linkMap } from "@/map/linkMap";
import Dropdown from "./dropdown/Dropdown";
import HamburgerDropdown from "./dropdown/HamburgerDropdown";
import HamburgerButton from "./HamburgerButton";
import ThinLine from "../line/ThinLine";
import logoImage from "../../../../../public/images/logo.png";
import dropdownSymbol from "../../../../../public/images/downward.webp";


const mapping = {
  service: {
    title: {
      ja: 'Service',
      en: 'Service',
    },
    items: {
      ja: ['Meta Influencer', 'Parallel', "Shefla"],
      en: ['Meta Influencer', 'Parallel', 'Shefla'],
    },
    links: {
      ja: [linkMap.service.metaInfluencer.ja, linkMap.service.parallel.ja, linkMap.service.shefla.ja],
      en: [linkMap.service.metaInfluencer.en, linkMap.service.parallel.en, linkMap.service.shefla.en],
    }
  },
  company: {
    title: {
      ja: 'Company',
      en: 'Company',
    },
    items: {
      ja: ['About', 'News', "Info"],
      en: ['About', 'News', 'Info'],
    },
    links: {
      ja: [linkMap.about.ja, linkMap.news.ja, linkMap.info.ja],
      en: [linkMap.about.en, linkMap.news.en, linkMap.info.en],
    }
  },
  contact: {
    title: {
      ja: 'Contact',
      en: 'Contact',
    },
    items: {
      ja: ['Contact', 'Recruit'],
      en: ['Contact', 'Recruit'],
    },
    links: {
      ja: [linkMap.contact.ja ,linkMap.recruit.ja],
      en: [linkMap.contact.en ,linkMap.recruit.en],
    }
  },
  language: {
    title: {
      ja: 'Language',
      en: 'Language',
    },
    items: {
      ja: ['日本語', 'English'],
      en: ['English', '日本語'],
    },
    links: {
      ja: [linkMap.home.ja, linkMap.home.en],
      en: [linkMap.home.en, linkMap.home.ja],
    }
  },
}


// component for the header
function Header({ language }) {

  // state if the hamburger button is clicked
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);
  const [menuStyles, setMenuStyles] = useState({ height: '0vh' });

  // state for the header style
  const [headerStyle, setHeaderStyle] = useState(styles.transparent);


  // switch header background color when scrolling
  const handleScroll = () => {
    const threshold = window.innerHeight * 0.01;  // 1% of the viewport height
    if (window.scrollY > threshold) {
      setHeaderStyle(styles.black);
    } else {
      setHeaderStyle(styles.transparent);
    }
  };


  useEffect(() => {
    if (isHamburgerClicked) {
      setMenuStyles({ height: '100vh' });
    } else {
      setMenuStyles({ height: '0vh' });
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, [isHamburgerClicked]);

  return (
    <div className={`${styles.container} ${headerStyle}`}>
      <HeaderLogo language={language} />
      <HeaderNav language={language} />
      <div className={styles.hamburger}>
        <HamburgerButton isHamburgerClicked={isHamburgerClicked} setIsHamburgerClicked={setIsHamburgerClicked} />
        <HamburgerMenu language={language} customStyles={menuStyles} onClick={() => setIsHamburgerClicked(false)} />
      </div>
    </div>
  );
}


// component for the header logo
function HeaderLogo({ language }) {
  return (
    <Link href={linkMap.home[language]} className={styles.logoContainer}>
      <Image
        src={logoImage}
        width={40}
        height={40}
        alt="logo"
      />
      <div className={styles.companyText}>Meme</div>
    </Link>
  );
}


// component for the header navigation
function HeaderNav({ language }) {
  return (
    <div className={styles.nav}>
      <HeaderNavLeft language={language}/>
      <HeaderNavRight language={language} />
    </div>
  );
}

// component for the header navigation left
function HeaderNavLeft({ language }) {

  return (
    <div className={styles.leftNav}>
      <ul>
        <li className={styles.dropdown}>
          <Dropdown items={mapping.service.items[language]} links={mapping.service.links[language]} title="Service"/>
          <div className={styles.dropdownSymbol}>
            <Image
              src={dropdownSymbol}
              alt="downward symbol to open and close the dropdown"
              width={10}
              height={10}
            />
          </div>
        </li>
        <li className={styles.dropdown}>
          <Dropdown items={mapping.company.items[language]} links={mapping.company.links[language]} title="Company" />
          <div className={styles.dropdownSymbol}>
            <Image
              src={dropdownSymbol}
              alt="downward symbol to open and close the dropdown"
              width={10}
              height={10}
            />
          </div>
        </li>
        <li className={styles.dropdown}>
          <Dropdown items={mapping.contact.items[language]} links={mapping.contact.links[language]} title="Contact" />
          <div className={styles.dropdownSymbol}>
            <Image
              src={dropdownSymbol}
              alt="downward symbol to open and close the dropdown"
              width={10}
              height={10}
            />
          </div>
        </li>
      </ul>
    </div>
  );
}


// component for the header navigation right
function HeaderNavRight({ language }) {
  return (
    <div className={styles.rightNav}>
      <div className={styles.rightDropdown}>
        <Dropdown items={mapping.language.items[language]} links={mapping.language.links[language]} title="Language" />
        <div className={styles.dropdownSymbol}>
          <Image
            src={dropdownSymbol}
            alt="downward symbol to open and close the dropdown"
            width={10}
            height={10}
          />
        </div>
      </div>
    </div>
  );
}




// component shown when hamburger button is clicked
function HamburgerMenu({ customStyles, language, onClick }) {
  return (
    <div className={styles.hamburgerMenuWrapper} style={customStyles}>
      <div className={styles.hamburgerMenu}>
      <ThinLine />
      <HamburgerDropdown items={mapping.service.items[language]} links={mapping.service.links[language]} title="Service" onClick={onClick} />
      <ThinLine />
      <HamburgerDropdown items={mapping.company.items[language]} links={mapping.company.links[language]} title="Company" onClick={onClick} />
      <ThinLine />
      <HamburgerDropdown items={mapping.contact.items[language]} links={mapping.contact.links[language]} title="Contact" onClick={onClick} />
      <ThinLine />
      <HamburgerDropdown items={mapping.language.items[language]} links={mapping.language.links[language]} title="Language" onClick={onClick} />
      <ThinLine />
      </div>
    </div>
  )
}



export default Header;