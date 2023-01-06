import React from "react";
import styles from "../styles/Projects.module.css";
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

export default function Projects() {
  return (
    <motion.div variants={fadeIn} initial="initial" animate="animate" className={styles.container}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.card}>
        <h2 className={styles.project_titles}>Portfolio Website</h2>
        <p className={styles.description}>
          A portfolio website built from scratch to display my experience and past
          projects and explore the Next.js framework. Prototyped with Figma
          to outline designs and theme.
        </p>
        <div className={styles.skills_container}>
          <p className={styles.skills_bubble}>NextJS</p>
          <p className={styles.skills_bubble}>HTML</p>
          <p className={styles.skills_bubble}>CSS</p>
          <p className={styles.skills_bubble}>Github</p>
        </div>
      </div>
      <div className={styles.card}>
        <h2 className={styles.project_titles}>Doodle Jump</h2>
        <p className={styles.description}>
          A recreation of the popular game, Doodle Jump, built atop a physics
          engine. Built to develop skills such as abstraction, ...
        </p>
        <div className={styles.skills_container}>
          <p className={styles.skills_bubble}>C</p>
          <p className={styles.skills_bubble}>Github</p>
          <p className={styles.skills_bubble}>Graphics library??</p>
        </div>
      </div>
      <div className={styles.card}>
        <h2 className={styles.project_titles}>Chest X-ray</h2>
        <p className={styles.description}>
          A machine learning algorithm developed to identify .. from chest xray
          images from Chexpert. Worked in a team of 4.
        </p>
        <div className={styles.skills_container}>
          <p className={styles.skills_bubble}>Python</p>
          <p className={styles.skills_bubble}>Jupyter</p>
          <p className={styles.skills_bubble}>ML</p>
          <p className={styles.skills_bubble}>Virtual Machine??</p>
        </div>
      </div>
      <div className={styles.card}>
        <h2 className={styles.project_titles}>Object Detection</h2>
        <p className={styles.description}>
          A gimbal built with a pan and tilt motor designed to detect and follow
          an object's path. Can also detect faces.
        </p>
        <div className={styles.skills_container}>
          <p className={styles.skills_bubble}>Python</p>
          <p className={styles.skills_bubble}>OnShape CAD</p>
          <p className={styles.skills_bubble}>Raspberry Pi</p>
          <p className={styles.skills_bubble}>Virtual Machine</p>
        </div>
      </div>
      <div className={styles.card}>
        <h2 className={styles.project_titles}>Monkey Bar Robot</h2>
        <p className={styles.description}>
          A robot with 42 degrees of freedom to move across monkey bars. Worked
          to coordinate limbs by forward and backward kinematics.
        </p>
        <div className={styles.skills_container}>
          <p className={styles.skills_bubble}>Python</p>
          <p className={styles.skills_bubble}>ROS</p>
          <p className={styles.skills_bubble}>Virtual Machine</p>
          <p className={styles.skills_bubble}>Linux</p>
        </div>
      </div>
      <a className={styles.button} href='/work'>Continue to work experience &rarr;</a>
    </motion.div>
  );
}
