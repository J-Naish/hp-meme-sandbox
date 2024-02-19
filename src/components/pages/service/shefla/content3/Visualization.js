import Image from 'next/image';
import styles from './Visualization.module.css';
import Arrow from './Arrow';
import icon1 from "../../../../../../public/images/service/shefla/content3/icon1.png";
import icon2 from "../../../../../../public/images/service/shefla/content3/icon2.png";
import icon3 from "../../../../../../public/images/service/shefla/content3/icon3.png";
import icon4 from "../../../../../../public/images/service/shefla/content3/icon4.png";
import image1 from "../../../../../../public/images/service/shefla/content3/image1.png";
import image2 from "../../../../../../public/images/service/shefla/content3/image2.png";


export default function Visualization({ color }) {
  return (
    <div className={styles.container}>
      <div className={styles.flowContainer}>
        <Flow color={color} />
        <Relation color={color} />
      </div>
      <Goal color={color} />
    </div>
  );
}


function Flow({ color }) {
  return (
    <div className={styles.flow}>
      <div className={styles.dashedLine1} style={{ borderBottomColor: color }} />
      <div className={styles.icon} style={{ backgroundColor: color }}>
        <Image
          src={icon1}
          alt="icon for Shefla's SNS operation support flow"
          style={{ width : '80%', height : '80%' }}
        />
      </div>
      <div className={styles.dashedLine1} style={{ borderBottomColor: color }} />
      <div className={styles.icon} style={{ backgroundColor: color }}>
        <Image
          src={icon2}
          alt="icon for Shefla's SNS operation support flow"
          style={{ width : '80%', height : '80%' }}
        />
      </div>
      <div className={styles.dashedLine1} style={{ borderBottomColor: color }} />
      <div className={styles.icon} style={{ backgroundColor: color }}>
        <Image
          src={icon3}
          alt="icon for Shefla's SNS operation support flow"
          style={{ width : '80%', height : '80%' }}
        />
      </div>
      <div className={styles.dashedLine1} style={{ borderBottomColor: color }} />
      <div className={styles.icon} style={{ backgroundColor: color }}>
        <Image
          src={icon4}
          alt="icon for Shefla's SNS operation support flow"
          style={{ width : '80%', height : '80%' }}
        />
      </div>
      <div className={styles.dashedLine1} style={{ borderBottomColor: color }} />
      <Arrow color={color} isRight={true} />
    </div>
  );
}


function Relation({ color }) {
  const gradient = `linear-gradient(90deg, ${color} 0%, rgba(255, 255, 255, 0) 100%)`;
  return (
    <div className={styles.relation}>

      <div className={`${styles.circle1Container}`}>
        <div className={styles.dashedCircle} style={{ borderColor: color }} />
        <div className={styles.image1} style={{ backgroundColor: color }}>
          <Image
            src={image1}
            alt="image for Shefla's SNS operation support flow"
            style={{ width : '80%', height : '80%' }}
          />
          <div className={styles.imageText} style={{ marginTop: "-16px" }}>
            Shefla's<br/>Marketer
          </div>
        </div>
      </div>

      <div className={styles.arrowContainer}>
        <div className={styles.arrow}>
          <Arrow color={color} isRight={false} />
          <div className={styles.dashedLine2} style={{ borderColor: color }} />
          <Arrow color={color} isRight={true} />
        </div>
        <div className={styles.arrow}>
          <Arrow color={color} isRight={false} />
          <div className={styles.dashedLine2} style={{ borderColor: color }} />
          <Arrow color={color} isRight={true} />
        </div>
        <div className={styles.arrow}>
          <Arrow color={color} isRight={false} />
          <div className={styles.dashedLine2} style={{ borderColor: color }} />
          <Arrow color={color} isRight={true} />
        </div>
      </div>

      <div className={`${styles.circle2Container}`}>
        <div className={styles.circle} style={{ background: gradient }} />
        <div className={styles.image2}>
          <Image
            src={image2}
            alt="image for Shefla's SNS operation support flow"
            style={{ width : '80%', height : '80%' }}
          />
          <div className={styles.imageText} style={{ color: color, marginTop: "-10px" }}>
            influencer
          </div>
        </div>
      </div>

    </div>
  );
}


function Goal({ color }) {
  return (
    <div className={styles.goal} style={{ borderLeftColor: color, color: color  }}>
      GOAL
    </div>
  );
}