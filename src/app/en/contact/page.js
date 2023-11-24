import styles from '@/app/(ja)/contact/page.module.css';
import Contact from '@/components/pages/contact/Contact';

export default function Page() {
  return (
    <main className={styles.main}>
      <Contact language="en" />
    </main>
  )
}