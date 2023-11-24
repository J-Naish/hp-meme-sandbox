import styles from './page.module.css';
import Recruit from '@/components/pages/recruit/Recruit';


export default function Page() {
  return (
    <main className={styles.main}>
      <Recruit language="ja" />
    </main>
  )
}