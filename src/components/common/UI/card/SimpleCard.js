import Image from 'next/image';
import styles from './SimpleCard.module.css';


export default function SimpleCard({ title, imgUrl, description, color }) {
  return (
    <div className={styles.container}>

      <div className={styles.head}>
        <div
          className={styles.imgContainer}
          style={{
            background: `linear-gradient(71deg, #050206, ${color}, #050206)`,
          }}
        >
          <div
            className={styles.imgWrapper}
            style={{
              boxShadow: `0 0 5px ${color}`
            }}
          >
            <Image
              src={imgUrl}
              alt={`Picture for the ${title}`}
              style={{
                width: '80%',
                height: '80%',
              }}
            />
          </div>
        </div>
        <div className={styles.title}>
          <h4>{title}</h4>
        </div>
      </div>

      <div className={styles.body}>
        <p className={styles.description}>{description}</p>
      </div>

    </div>
  )
}