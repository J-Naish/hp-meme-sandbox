'use client';

import styles from './button.module.css';
import Link from 'next/link';
import Image from 'next/image'
import triangleSymbol from "../../../../../public/images/triangle.webp";


// button that redirects to another page or web site
function LinkButton({ label, link, className, hasExternalLink=false }) {

  const LinkComponent = hasExternalLink ? 'a' : Link;
  const linkProps = { href: link };

  return (
    <LinkComponent className={styles.linkButton} {...linkProps}>
      <Button label={label} className={className} />
    </LinkComponent>
  );
}


// button only with styling
function Button({ label, className, onClick, onPressEnter, isWhite=false }) {

  const handleKeyPress = (e) => {
    if(e.key === "Enter" && onPressEnter) {
      e.preventDefault();
      onPressEnter(e);
    }
  }


  const switchingClassName = [
    className,
    isWhite ? styles.whiteButton : styles.blackButton, 
    styles.defaultButton
  ].join(' ');

  return (
    <div
      className={switchingClassName}
      role='button'
      onClick={onClick}
      onKeyDown={handleKeyPress}
      tabIndex="0"
    >
      <div className={styles.container}>
        <div className={styles.triangleContainer}>
          <Image
            src={triangleSymbol}
            alt="triangle symbol in the button"
            width={10}
            height={10}
            className={`${styles.triangle} ${isWhite ? styles.blackTriangle : styles.whiteTriangle}`}
          />
        </div>
        <div className={styles.label}>
          <div>{label}</div>
        </div>
      </div>
    </div>
  );
}


export default LinkButton;
export { Button };