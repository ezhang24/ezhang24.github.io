import React from 'react';
import styles from '../styles/Work.module.css'

export default function Work() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Work Experience
            </h2>
            <p className={styles.description}>
                description and location and timeframe
            </p>
        </div>
    )
}