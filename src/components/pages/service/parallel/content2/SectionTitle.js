import styles from "./SectionTitle.module.css";

export default function SectionTitle({ title, color }) {
  return (
    <div className={styles.container}>
      <div
        className={styles.line}
        style={{ backgroundImage: `linear-gradient(to right, transparent, ${color})` }}
      />
      <h5 className={styles.title} style={{ color: color }}>{title}</h5>
    </div>
  );
}