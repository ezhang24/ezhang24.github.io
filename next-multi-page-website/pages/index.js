import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.name_container}>
        <h3 className={styles.heading} style={{ color: "#AA7DCE" }}>
          Hi, my name is
        </h3>
        <motion.div variants={fadeInUp} initial="initial" animate="animate" >
          <h1 className={styles.title}>Emily Zhang</h1>
        </motion.div>
      </div>
      <div className={styles.description_container}>
        <p className={styles.description}>
          I'm an avid software engineer with a passion for learning new things
          and creating technology that makes the world a more accessible place.
          Currently, I've been interested in web development, robotics, and AI.
        </p>
      </div>
      <a className={styles.button} href="/about">
        Learn more about me &rarr;
      </a>
    </main>
  );
}
