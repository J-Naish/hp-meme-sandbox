import styles from './Title.module.css';


export default function Title({ title, subtitle, color }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div
        className={styles.line}
        style={{
          backgroundImage: `linear-gradient(90deg, ${color}00 0%, ${color} 50%, ${color}00 100%)`,
        }}
      />
      <h4 className={styles.subtitle}>{subtitle}</h4>
    </div>
  );
}