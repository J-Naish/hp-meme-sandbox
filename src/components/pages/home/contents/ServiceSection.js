'use client';

import styles from "./ServiceSection.module.css";
import commonStyles from "./Common.module.css";
import dynamic from 'next/dynamic';
import LinkButton from '@/components/common/UI/button/button';
import BorderLine from '@/components/common/UI/line/BorderLine';
import { useResponsive } from '@/components/common/utils/useResponsive';
import { languageMapping } from "./languageMapping";


const DynamicServiceCanvas = dynamic(() =>
  import("./ServiceCanvas.js"), {
    loading: () => null,
  }
)



// all service section
function ServiceSection({ language }) {

  const isDesktopView = useResponsive();

  return (
    <div className={styles.container}>

      <div className={`${styles.title} ${commonStyles.title}`}>
        <h1>Service</h1>
      </div>

      <BorderLine />


      <div className={styles.content}>

        <div className={`${styles.item} ${styles.border}`}>
          <div className={styles.canvasContainer}>
            <div className={styles.leftCanvas}>
              <DynamicServiceCanvas
                glbUrl="/assets/model/meta-influencer.glb"
                scale={[1, 1, 1]}
              />
            </div>
          </div>
          <MetaInfluencerContent language={language} />
        </div>

        <div className={`${styles.item} ${styles.border}`}>
          {/* switch order by client device width */}
          { isDesktopView && (
          <>
            <ParallelContent language={language} />
            <div className={styles.canvasContainer}>
              <div className={styles.rightCanvas}>
                <DynamicServiceCanvas
                  glbUrl="/assets/model/parallel.glb"
                  scale={[1, 1, 1]}
                  isRotatingRight={true}
                />
              </div>
            </div>
          </>
          )}
          { !isDesktopView && (
          <>
            <div className={styles.canvasContainer}>
              <div className={styles.rightCanvas}>
                <DynamicServiceCanvas
                  glbUrl="/assets/model/parallel.glb"
                  scale={[1, 1, 1]}
                />
              </div>
            </div>
            <ParallelContent language={language} />
          </>
          )}
        </div>

        <div className={`${styles.item} ${styles.bottomItem}`}>
          <div className={styles.canvasContainer}>
            <div className={styles.leftCanvas}>
              <DynamicServiceCanvas
                glbUrl="/assets/model/shefla.glb"
                scale={[1, 1, 1]}
              />
            </div>
          </div>
          <SheflaContent language={language} />
        </div>

      </div>

    </div>
  );
}


function MetaInfluencerContent({ language }) {
  return(
    <ServiceContent
      title={languageMapping.metaInfluencer.title[language]}
      subtitle={languageMapping.metaInfluencer.subtitle[language]}
      description={languageMapping.metaInfluencer.description[language]}
      link={languageMapping.metaInfluencer.link[language]}
      label={"Learn More"}
    />
  );
}
function ParallelContent({ language }) {
  return (
    <ServiceContent
      title={languageMapping.parallel.title[language]}
      subtitle={languageMapping.parallel.subtitle[language]}
      description={languageMapping.parallel.description[language]}
      link={languageMapping.parallel.link[language]}
      label={"Learn More"}
    />
  );
}
function SheflaContent({ language }) {
  return (
    <ServiceContent
      title={languageMapping.shefla.title[language]}
      subtitle={languageMapping.shefla.subtitle[language]}
      description={languageMapping.shefla.description[language]}
      link={languageMapping.shefla.link[language]}
      label={"Learn More"}
    />
  );
}



function ServiceContent({ title, subtitle, description, link, label}) {
  return (
    <div className={styles.descriptionContainer}>

      <div className={styles.textContainer}>
        <div className={styles.descriptionTitle}>
          <h2>{title}</h2>
        </div>
        <div className={styles.descriptionSubtitle}>
          <h3>{subtitle}</h3>
        </div>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
      </div>

      <LinkButton className={styles.descriptionButton} label={label} link={link}/>

    </div>
  );
}




export default ServiceSection;