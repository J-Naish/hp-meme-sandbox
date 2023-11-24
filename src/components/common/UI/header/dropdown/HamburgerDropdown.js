'use client';

import styles from './HamburgerDropdown.module.css';
import { useState } from 'react';
import Link from 'next/link';



// component for the dropdown shown when hamburger is clicked
export default function HamburgerDropdown({ title, items, links }) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.container}>
      <div className={styles.head} onClick={toggleDropdown}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.toggleSymbol}>
          { isOpen && <>−</>}
          { !isOpen && <>+</>}
        </div>
      </div>
        <div className={`${styles.list} ${isOpen ? styles.openList : ''}`}>
          {items.map((item, index) => (
            <Link href={links[index]} key={index}>
              <div className={styles.item}>{item}</div>
            </Link>
          ))}
        </div>
    </div>
  );
}