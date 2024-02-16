import styles from './Content3.module.css';
import Title from '../../Title';
import Badge from './Badge';
import { languageMapping } from '../languageMapping';

import image1 from '../../../../../../public/images/service/parallel/content3/1.png';
import image2 from '../../../../../../public/images/service/parallel/content3/2.png';
import image3 from '../../../../../../public/images/service/parallel/content3/3.png';
import image4 from '../../../../../../public/images/service/parallel/content3/4.png';
import image5 from '../../../../../../public/images/service/parallel/content3/5.png';
import image6 from '../../../../../../public/images/service/parallel/content3/6.png';
import image7 from '../../../../../../public/images/service/parallel/content3/7.png';
import image8 from '../../../../../../public/images/service/parallel/content3/8.png';
import image9 from '../../../../../../public/images/service/parallel/content3/9.png';
import image10 from '../../../../../../public/images/service/parallel/content3/10.png';
import image11_1 from '../../../../../../public/images/service/parallel/content3/11_1.png';
import image11_2 from '../../../../../../public/images/service/parallel/content3/11_2.png';
import image11_3 from '../../../../../../public/images/service/parallel/content3/11_3.png';
const image11 = [image11_1, image11_2, image11_3];


export default function Content3({ language, color }) {
  const text = languageMapping.content3.text[language].split('\n').map((str, index) => (
    <span key={index}>
      {str}
      <br />
    </span>
  ));
  return (
    <div className={styles.container}>
      <Title
        title={languageMapping.content3.title[language]}
        subtitle={languageMapping.content3.subtitle[language]}
        color={color}
      />
      <div className={styles.content}>
        <p className={styles.text}>{text}</p>
        <div className={styles.badgeContainer}>
          <Badge title={languageMapping.content3.badge1[language]} imageUrls={[image1]} />
          <Badge title={languageMapping.content3.badge2[language]} imageUrls={[image2]} />
          <Badge title={languageMapping.content3.badge3[language]} imageUrls={[image3]} />
          <Badge title={languageMapping.content3.badge4[language]} imageUrls={[image4]} />
          <Badge title={languageMapping.content3.badge5[language]} imageUrls={[image5]} />
          <Badge title={languageMapping.content3.badge6[language]} imageUrls={[image6]} />
          <Badge title={languageMapping.content3.badge7[language]} imageUrls={[image7]} />
          <Badge title={languageMapping.content3.badge8[language]} imageUrls={[image8]} />
          <Badge title={languageMapping.content3.badge9[language]} imageUrls={[image9]} />
          <Badge title={languageMapping.content3.badge10[language]} imageUrls={[image10]} />
          <Badge title={languageMapping.content3.badge11[language]} imageUrls={image11} isWide={true} className={styles.wideBadge} />
        </div>
      </div>
    </div>
  );
}