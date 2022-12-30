import React from 'react';
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                About Me
            </h1>
            <p className={styles.description}>
                Hi there! My name is Emily and I enjoy ...
                <br></br>
                thsifisdif
                <br></br>
                add watch list. playlist.
            </p>
            <img className={styles.img} src='me.jpg' alt='Bio Photo'>
            </img>
        </div>
    )
}