import React from "react";
import styles from "../styles/About.module.css";
import { motion } from "framer-motion";

const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export default function About() {
  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      animate="animate"
      className={styles.container}
    >
      <h1 className={styles.title}>About Me</h1>
      <div className={styles.bio_container}>
        <div className={styles.description_container}>
          <p className={styles.description}>
            Hi there! My name is Emily and I am currently a junior pursuing
            Computer Science at the California Institute of Technology. I've
            taken courses in functional programming, machine learning, robotics,
            distributed computing, algorithms, computing systems, and more, and
            I'm always excited to pursue new technology within the vast field of
            computer science.
            <br></br>
            Outside of computer science, you can find me playing tennis,
            journaling, hiking, playing poker, reading webtoons, or petting my
            friend's dogs.
          </p>
        </div>
        <img className={styles.img} src="me.jpg" alt="Bio Photo"></img>
      </div>
      <a className={styles.button} href="/projects">
        Continue to projects &rarr;
      </a>
    </motion.div>
  );
}
