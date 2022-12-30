import React from 'react';
import styles from '../styles/Work.module.css'

export default function Work() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Work Experience
            </h1>
            <h2 className={styles.company}>
                Google STEP Intern
            </h2>
            <h4 className={styles.location}>
                Kirkland, WA
            </h4>
            <h4 className={styles.time}>
                June 2022 - September 2022
            </h4>
            <p className={styles.description}>
                description and location and timeframe
            </p>
            <h2 className={styles.company}>
                Caltech SURF
            </h2>
            <h4 className={styles.location}>
                Pasadena, CA
            </h4>
            <h4 className={styles.time}>
                June 2021 - September 2021
            </h4>
            <p className={styles.description}>
                description and location and timeframe
            </p>
            <h2 className={styles.company}>
                Monogram
            </h2>
            <h4 className={styles.location}>
                Remote
            </h4>
            <h4 className={styles.time}>
                April 2021 - May 2021
            </h4>
            <p className={styles.description}>
                description and location and timeframe
            </p>
        </div>
    )
}