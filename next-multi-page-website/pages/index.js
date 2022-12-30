import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h3>
          Hi, my name is
        </h3>
        <h1 className={styles.title}>
          Emily Zhang.
        </h1>
        <p>
          im an avid software engineer who enjoys ... currently i am interested in ...
        </p>
        <button>
          Check out my projects!
        </button>
      </main>
    </div>
  )
}
