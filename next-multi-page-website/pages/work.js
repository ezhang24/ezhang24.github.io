import React from "react";
import styles from "../styles/Work.module.css";

export default function Work() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Work Experience</h1>
      <h2 className={styles.company}>Google STEP Intern</h2>
      <h4 className={styles.location}>Kirkland, WA</h4>
      <h4 className={styles.time}>June 2022 - September 2022</h4>
      <a href="https://wearos.google.com/">https://wearos.google.com/</a>
      <ul className={styles.description}>
        <li>
          Implemented full stack support for an upcoming feature on Messages for
          Android smartwatches with another intern for 12 weeks
        </li>
        <li>
          Completed entire development workflow, including writing design
          documents, passing design review, bug bashing, and testing
        </li>
        <li>
          Created backend infrastructure by transforming synced data from the
          into UI components using Dagger, Kotlin, and other internal tools
        </li>
        <li>
          Laid foundation for a suite of future updates, emphasizing
          expandability and reusibiity of the design
        </li>
      </ul>
      <ul className={styles.skills}>
        <li>Kotlin</li>
        <li>Android Studio</li>
        <li>Java</li>
        <li>Dagger</li>
        <li>OOD</li>
      </ul>
      <h2 className={styles.company}>Caltech SURF</h2>
      <h4 className={styles.location}>Pasadena, CA</h4>
      <h4 className={styles.time}>June 2021 - September 2021</h4>
      <ul className={styles.description}>
        <li>
          Built dataframe of 95,000+ US news headlines, date, and primary source
          via the BeautifulSoup web scraping using articles from Mar 2020 to Jan
          2021
        </li>
        <li>
          Adopted natural language processing tools to clean, organize, and
          preprocess headlines nad participants' free text responses
        </li>
        <li>
          Analyzed participants' frequency, type of news intake, demographic
          data with matplotlib and seaborn to examine variability in the data
        </li>
        <li>
          Performed a linear mixed effect regression analysis on average news
          source sentimnets against internal and external motivation to act
          without bias
        </li>
      </ul>
      <ul className={styles.skills}>
        <li>BeautifulSoup</li>
        <li>NLTK</li>
        <li>Python</li>
      </ul>
      <h2 className={styles.company}>Monogram</h2>
      <h4 className={styles.location}>Remote (Atlanta, GA)</h4>
      <h4 className={styles.time}>Mar 2021 - April 2021</h4>
      <a href="https://merlin.so/">https://merlin.so/</a>
      <ul className={styles.description}>
        <li>
          Collaborated with 2 other interns for 6 weeks to present a feature
          idea to the Merlin conferencing website
        </li>
        <li>
          Employed Figma to prototype the chat feature wireframe to include
          message tagging, video questions, and message filtering
        </li>
        <li>
          Engaged in a course on Next.js, React, and Tailwind CSS to learn
          Merlin's frontend and backend stack development
        </li>
      </ul>
      <ul className={styles.skills}>
        <li>Figma</li>
        <li>NextJS</li>
        <li>Tailwind CSS</li>
      </ul>
    </div>
  );
}
