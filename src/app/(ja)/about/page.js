import styles from './page.module.css';
import About from '@/components/pages/about/About';

export default function Page() {
  return (
    <main className={styles.main}>
      <About language="ja" />
    </main>
  )
}