import styles from '@/app/(ja)/info/page.module.css';
import Info from '@/components/pages/info/Info';


export default function Page() {
  return (
    <main className={styles.main}>
      <Info language="en" />
    </main>
  )
}