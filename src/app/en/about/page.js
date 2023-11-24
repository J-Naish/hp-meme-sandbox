import styles from '@/app/(ja)/about/page.module.css';
import About from '@/components/pages/about/About';

export default function Page() {
  return (
    <main className={styles.main}>
      <About language="en" />
    </main>
  )
}