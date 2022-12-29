import React from 'react';
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                About Me
            </h2>
            <p className={styles.description}>
                silly little text about me
            </p>
        </div>
    )
}