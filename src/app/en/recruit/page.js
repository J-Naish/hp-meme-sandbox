import styles from '@/app/(ja)/recruit/page.module.css';
import Recruit from '@/components/pages/recruit/Recruit';


export default function Page() {
  return (
    <main className={styles.main}>
      <Recruit language="en" />
    </main>
  )
}