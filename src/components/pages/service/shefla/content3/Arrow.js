import styles from './Arrow.module.css';


export default function Arrow({ color, isRight }) {
  return (
    <div
      className={styles.arrow}
      style={{ borderBottomColor: color, transform: isRight ? 'rotate(90deg)' : 'rotate(-90deg)'}}
    />
  );
}