'use client';

import styles from './Dropdown.module.css';
import { useState } from 'react';
import Link from 'next/link';


export default function Dropdown ({ items, links, title }) {
  // useState hook to manage dropdown visibility
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const [animationClass, setAnimationClass] = useState('');

  const toggleDropdown = () => {
    if (!isDropdownVisible) {
      // apply the appearing animation
      setAnimationClass(styles.visible);
    } else {
      // apply the disappearing animation
      setAnimationClass(styles.invisible);
      // remove the list from the DOM
      setTimeout(() => setDropdownVisible(false), 300);
    }
  }

  const handleMouseEnter = () => {
    setAnimationClass(styles.visible);
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setAnimationClass(styles.invisible);
    setTimeout(() => setDropdownVisible(false), 300);
  };

  return (
    <div 
      className={styles.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={toggleDropdown}
    >
      <div className={styles.title}>{title}</div>
      {isDropdownVisible && (
        <>
        <div className={styles.list}>
          {items.map((item, index) => (
            <Link href={links[index]} key={index}>
              <div
                className={`${styles.listItem} ${animationClass} ${index !== items.length - 1 ? styles.borderBottom : ''}`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  clipPath: index === 0 ? 'polygon(5% 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 0 15%)'
                    : (index === items.length - 1 ? 'polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%, 0% 50%)'
                      : '')
                }}
              >
                {item}
              </div>
            </Link>
          ))}
        </div>
        </>
      )}
    </div>
  );
};
