import styles from '../../(ja)/(root)/page.module.css'
import Home from '@/components/pages/home/Home.js'

export default function Page() {
  return (
    <main className={styles.main}>
      <Home language="en" />
    </main>
  )
}
