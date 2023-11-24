import styles from "./HamburgerButton.module.css";
import { useEffect, useState } from 'react';



export default function HamburgerButton({isHamburgerClicked, setIsHamburgerClicked }) {

  const [hamburgerStyle, setHamburgerStyle] = useState("");

  useEffect(() => {
    if (isHamburgerClicked) {
      setHamburgerStyle(styles.active);
    } else {
      setHamburgerStyle("");
    }
  }, [isHamburgerClicked])


  return (
    <div
      className={`${styles.hamburgerSymbol} ${hamburgerStyle}`}
      onClick={() => setIsHamburgerClicked(!isHamburgerClicked)}
    >
      <div className={`${styles.line} ${styles.line1}`}>
        <div className={`${styles.innerLine} ${styles.innerLine1}`}></div>
      </div>
      <div className={`${styles.line} ${styles.line2}`}>
        <div className={`${styles.innerLine} ${styles.innerLine2}`}></div>
      </div>
    </div>
  );
}