'use client';

import styles from "./Fade.module.css";
import { useEffect, useState} from "react";
import { useShareContext } from "./ShareContext.js";


function Fade() {
  const { isDisplayClicked } = useShareContext();

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isDisplayClicked) {
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
    }
  }, [isDisplayClicked])

  const fadeStyle = isDisplayClicked ? { display: 'block' } : { display: 'none' };

  return(
    <>
      {isDisplayClicked && (
        <div
          className={`${styles.container} ${isAnimating ? styles.animate : ''}`}
          style={fadeStyle}>
        </div>
      )}
    </>
  );
}


export default Fade;