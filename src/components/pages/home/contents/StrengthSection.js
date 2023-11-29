'use client';

import React, { useEffect, useRef } from 'react';
import styles from './StrengthSection.module.css';
import commonStyles from './Common.module.css';
import BorderLine from '@/components/common/UI/line/BorderLine'
import { languageMapping } from './languageMapping';


function StrengthSection({ language }) {
  return (
    <div className={styles.container}>

      <div className={`${styles.title} ${commonStyles.title}`}>
        <h1>Strength</h1>
      </div>

      <BorderLine />

      <div className={styles.content}>
        <StrengthMap language={language}/>
        <Description language={language}/>
      </div>

    </div>
  );
}



function StrengthMap({ language }){
  return(
    <div className={styles.strengthMapWrapper}>
      <div className={styles.strengthMap}>
        <StrengthMapItem language={language}
          title={languageMapping.strength.map.item1.title[language]}
          list={languageMapping.strength.map.item1.lists[language]}
          className1={styles.circle1}
          className2={styles.item1}
        />
        <StrengthMapItem language={language}
          title={languageMapping.strength.map.item2.title[language]}
          list={languageMapping.strength.map.item2.lists[language]}
          className1={styles.circle2}
          className2={styles.item2}
        />
        <StrengthMapItem language={language}
          title={languageMapping.strength.map.item3.title[language]}
          list={languageMapping.strength.map.item3.lists[language]}
          className1={styles.circle3}
          className2={styles.item3}
        />
      </div>
    </div>
  );
}


function StrengthMapItem({ title, list, className1, className2 }) {

  const strengthCircleRef = useRef(null);

  useEffect(() => {

    const strengthCircle = strengthCircleRef.current;

    let a;
    let b;
    let centerX;
    let centerY;
    let points = [];
    let theta = 0;

    // function to create a point element
    const createPoint = () => {
      const point = document.createElement(styles["div"]);
      point.style.width = '8px';
      point.style.height = '8px';
      point.style.backgroundColor = 'white';
      point.style.position = 'absolute';
      point.style.borderRadius = '50%';
      return point;
    };

    // function to place the point on the border
    const placePoint = (theta, index) => {
      const x = a * Math.cos(theta);
      const y = b * Math.sin(theta);
      const point = points[index] || createPoint();
      point.style.left = `${centerX + x - 4}px`;
      point.style.top = `${centerY + y - 4}px`;
      if (!points[index]) {
        strengthCircle.appendChild(point);
        points[index] = point;
      }
    };

    const animatePoints = () => {
      const { width, height } = strengthCircle.getBoundingClientRect();
      a = width / 2;
      b = height / 2;
      centerX = width / 2;
      centerY = height / 2;
      theta += 0.001;
      placePoint(theta, 0);
      placePoint(theta + (Math.PI / 3 * 2), 1);
      placePoint(theta - (Math.PI / 3 * 2), 2);
      requestAnimationFrame(animatePoints);
    };

    // create three points
    placePoint(theta, 0);
    placePoint(theta + (Math.PI / 3 * 2), 1);
    placePoint(theta - (Math.PI / 3 * 2), 2);
    requestAnimationFrame(animatePoints);

    return () => {
      cancelAnimationFrame(animatePoints);
    };

  }, []);


  return (

    <div className={`${styles.strengthMapItemContainer} ${className1}`}>

      <div className={`${styles.strengthMapItemWrapper} ${className2}`} ref={strengthCircleRef}>

        <div className={styles.strengthMapItem}>
          <div className={styles.strengthMapItemTitle}>
            <h3>{title}</h3>
          </div>
        </div>

        <div className={styles.strengthMapItem_back}>
          <div className={styles.strengthMapItemList}>
            {list.map((item, index) => (
            <React.Fragment key={index}>
              <p>{item}</p>
            </React.Fragment>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}



function Description({ language }) {
  return (
    <div className={styles.description}>
      <p>{languageMapping.strength.content.p1[language]}</p>
      <br></br>
      <p>{languageMapping.strength.content.p2[language]}</p>
      <br></br>
      <p>{languageMapping.strength.content.p3[language]}</p>
    </div>
  );
}



export default StrengthSection;