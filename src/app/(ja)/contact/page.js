import styles from './page.module.css';
import Contact from '@/components/pages/contact/Contact';

export default function Page() {
  return (
    <main className={styles.main}>
      <Contact language="ja" />
    </main>
  )
}