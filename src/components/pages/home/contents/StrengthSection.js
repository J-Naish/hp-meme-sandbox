'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './StrengthSection.module.css';
import commonStyles from './Common.module.css';
import BorderLine from '@/components/common/UI/line/BorderLine'
import { languageMapping } from './languageMapping';
import SimpleCard from '@/components/common/UI/card/SimpleCard';
import marketingSymbol from '../../../../../public/images/marketing-symbol.webp';
import developmentSymbol from '../../../../../public/images/development-symbol.webp';
import designSymbol from '../../../../../public/images/design-symbol.webp';




const marketingColor = "rgb(255,160,0)";
const developmentColor = "rgb(29,173,235)";
const designColor = "rgb(148,0,107)";


export default function StrengthSection({ language }) {
  return (
    <div className={styles.container}>

      <div className={`${styles.title} ${commonStyles.title}`}>
        <h1>Strength</h1>
      </div>

      <BorderLine />

      <div className={styles.subtitle}>
        <h3>{languageMapping.strength.subtitle[language]}</h3>
      </div>

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
          className={styles.circle1}
          color={marketingColor}
        />
        <StrengthMapItem language={language}
          title={languageMapping.strength.map.item2.title[language]}
          list={languageMapping.strength.map.item2.lists[language]}
          className={styles.circle2}
          color={developmentColor}
        />
        <StrengthMapItem language={language}
          title={languageMapping.strength.map.item3.title[language]}
          list={languageMapping.strength.map.item3.lists[language]}
          className={styles.circle3}
          color={designColor}
        />
      </div>
    </div>
  );
}


function StrengthMapItem({ title, list, className, color }) {

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

    <div className={`${styles.strengthMapItemContainer} ${className}`}>

      <div
        className={styles.strengthMapItemWrapper}
        ref={strengthCircleRef}
        style={{
          background: `radial-gradient(circle, ${color} 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0) 100%)`
        }}
      >

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
      <div className={styles.cardWrapper}>
        <SimpleCard
          title="Marketing"
          imgUrl={marketingSymbol}
          description={languageMapping.strength.content.item1.description[language]}
          color={marketingColor}
        />
      </div>
      <div className={styles.cardWrapper}>
        <SimpleCard
          title="Development"
          imgUrl={developmentSymbol}
          description={languageMapping.strength.content.item2.description[language]}
          color={developmentColor}
        />
      </div>
      <div className={styles.cardWrapper}>
        <SimpleCard
          title="Design"
          imgUrl={designSymbol}
          description={languageMapping.strength.content.item3.description[language]}
          color={designColor}
        />
      </div>
    </div>
  );
}
