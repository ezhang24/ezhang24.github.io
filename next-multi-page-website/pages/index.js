import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.name_container}>
        <h3 className={styles.heading}>Hi, my name is</h3>
        <h1 className={styles.title}>Emily Zhang</h1>
      </div>
      <div className={styles.description_container}>
        <p className={styles.description}>
          I'm an avid software engineer with a passion for learning new things
          and creating technology that makes the world a more accessible place.
          Currently, I've been interested in web development, robotics, and AI.
        </p>
      </div>
      <a className={styles.button} href='/about'>Learn more about me &rarr;</a>
    </main>
  );
}
