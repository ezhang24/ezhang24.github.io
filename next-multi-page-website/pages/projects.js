import React from 'react';
import styles from '../styles/Projects.module.css'

export default function Projects() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Projects
            </h1>
            <h2 className={styles.project_titles}>
                Portfolio Website
            </h2>
            <p className={styles.description}>
                A portfolio website built from scratch to showcase my skills and past projects and learn about the Next.js framework. Prototyped with Figma to outline designs and theme.
            </p>
            <h3 className={styles.skills_title}>
                Skills
            </h3>
            <ul className={styles.skills}>
                <li>Next.js</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Github</li>
            </ul>
            <h2 className={styles.project_titles}>
                Doodle Jump
            </h2>
            <p className={styles.description}>
                A recreation of the popular game, Doodle Jump, built atop a physics engine. Built to develop skills such as abstraction, ...
            </p>
            <h3 className={styles.skills_title}>
                Skills
            </h3>
            <ul className={styles.skills}>
                <li>C</li>
                <li>Github</li>
                <li>Graphics library??</li>
            </ul>
            <h2 className={styles.project_titles}>
                Chest X-ray
            </h2>
            <p className={styles.description}>
                A machine learning algorithm developed to identify .. from chest xray images from Chexpert. Worked in a team of 4.
            </p>
            <h3 className={styles.skills_title}>
                Skills
            </h3>
            <ul className={styles.skills}>
                <li>Python</li>
                <li>Jupyter</li>
                <li>ML</li>
                <li>Virtual Machine??</li>
            </ul>
            <h2 className={styles.project_titles}>
                Object Detection
            </h2>
            <p className={styles.description}>
                A gimbal built with a pan and tilt motor designed to detect and follow an object's path. Can also detect faces.
            </p>
            <h3 className={styles.skills_title}>
                Skills
            </h3>
            <ul className={styles.skills}>
                <li>Python</li>
                <li>OnShape CAD</li>
                <li>Raspberry Pi</li>
                <li>Virtual Machine</li>
            </ul>
            <h2 className={styles.project_titles}>
                Monkey Bar Robot
            </h2>
            <p className={styles.description}>
                A robot with 42 degrees of freedom to move across monkey bars. Worked to coordinate limbs by forward and backward kinematics.
            </p>
            <h3 className={styles.skills_title}>
                Skills
            </h3>
            <ul className={styles.skills}>
                <li>Python</li>
                <li>ROS</li>
                <li>Virtual Machine</li>
            </ul>
        </div>
    )
}