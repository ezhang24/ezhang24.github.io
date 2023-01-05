import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

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
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <motion.main
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      className={styles.main}
    >
      <div className={styles.name_container}>
        <motion.div variants={fadeInUp}>
          <h3 className={styles.heading} style={{ color: "#AA7DCE" }}>
            Hi, my name is
          </h3>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <h1 className={styles.title}>Emily Zhang</h1>
        </motion.div>
      </div>
      <motion.div className={styles.description_container} variants={fadeInUp}>
        <p className={styles.description}>
          I'm an avid software engineer with a passion for learning new things
          and creating technology that makes the world a more accessible place.
          Currently, I've been interested in web development, robotics, and AI.
        </p>
      </motion.div>
      <motion.div variants={fadeInUp}>
        <a className={styles.button} href="/about">
          Learn more about me &rarr;
        </a>
      </motion.div>
    </motion.main>
  );
}
