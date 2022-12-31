import React from "react";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <div className={styles.bio_container}>
        <div className={styles.description_container}>
          <p className={styles.description}>
            Hi there! My name is Emily and I am currently a junior pursuing
            Computer Science at the California Institute of Technology. I've taken
            courses in functional programming, machine learning, robotics,
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
      <div className={styles.topic_container}>
        <h2 className={styles.topic}>Some Shows I've Watched</h2>
        <ul className={styles.list}>
          <li>The Good Place</li>
          <li>Silicon Valley</li>
          <li>The Queen's Gambit</li>
          <li>Sky Castle</li>
        </ul>
      </div>
      <div className={styles.topic_container}>
        <h2 className={styles.topic}>Some Songs/Recipes/Artists/Restaurants I Like</h2>
        <ul className={styles.list}>
          <li>Yoshitomo Nara</li>
          <li>Hebru Brantley</li>
        </ul>
      </div>
      <a className={styles.button} href='/projects'>Continue to projects &rarr;</a>
    </div>
  );
}
