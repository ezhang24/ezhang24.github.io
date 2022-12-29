import React from 'react';
import styles from '../styles/Projects.module.css'

export default function Projects() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Projects
            </h2>
            <p className={styles.description}>
                project description and images
            </p>
        </div>
    )
}