import styles from './page.module.css'
import Home from '@/components/pages/home/Home.js'

export default function Page() {
  return (
    <main className={styles.main}>
      <Home language="ja" />
    </main>
  )
}
