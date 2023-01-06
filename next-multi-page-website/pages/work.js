import React from "react";
import styles from "../styles/Work.module.css";
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

export default function Work() {
  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      animate="animate"
      className={styles.container}
    >
      <h1 className={styles.title}>Work Experience</h1>
      <div className={styles.timeline}>
        <div className={styles.work_container}>
          <div className={styles.icon}>
            <img src="google.png" className={styles.icon_logo}></img>
          </div>
          <h2 className={styles.company}>
            STEP Intern <span style={{ color: "#AA7DCE" }}>@ Google</span>
          </h2>
          <h4 className={styles.location}>Kirkland, WA</h4>
          <h4 className={styles.time}>June 2022 - September 2022</h4>
          <ul className={styles.description}>
            <li>
              Implemented full stack support for an upcoming feature on Messages
              for Android smartwatches with another intern for 12 weeks
            </li>
            <li>
              Completed entire development workflow, including writing design
              documents, passing design review, bug bashing, and testing
            </li>
            <li>
              Created backend infrastructure by transforming synced data from
              the into UI components using Dagger, Kotlin, and other internal
              tools
            </li>
            <li>
              Laid foundation for a suite of future updates, emphasizing
              expandability and reusibiity of the design
            </li>
          </ul>
          <div className={styles.skills_container}>
            <p className={styles.skills_bubble}>Kotlin</p>
            <p className={styles.skills_bubble}>Android Studio</p>
            <p className={styles.skills_bubble}>Java</p>
            <p className={styles.skills_bubble}>Dagger</p>
            <p className={styles.skills_bubble}>OOD</p>
          </div>
        </div>
        <div className={styles.work_container}>
          <div className={styles.icon}>
            <img src="caltech.png" className={styles.icon_logo}></img>
          </div>
          <h2 className={styles.company}>
            Undergraduate Research Student{" "}
            <span style={{ color: "#AA7DCE" }}>@ Caltech</span>
          </h2>
          <h4 className={styles.location}>Pasadena, CA</h4>
          <h4 className={styles.time}>June 2021 - September 2021</h4>
          <ul className={styles.description}>
            <li>
              Built dataframe of 95,000+ US news headlines, date, and primary
              source via the BeautifulSoup web scraping using articles from Mar
              2020 to Jan 2021
            </li>
            <li>
              Adopted natural language processing tools to clean, organize, and
              preprocess headlines nad participants' free text responses
            </li>
            <li>
              Analyzed participants' frequency, type of news intake, demographic
              data with matplotlib and seaborn to examine variability in the
              data
            </li>
            <li>
              Performed a linear mixed effect regression analysis on average
              news source sentimnets against internal and external motivation to
              act without bias
            </li>
          </ul>
          <div className={styles.skills_container}>
            <p className={styles.skills_bubble}>BeautifulSoup</p>
            <p className={styles.skills_bubble}>NLTK</p>
            <p className={styles.skills_bubble}>Python</p>
          </div>
        </div>
        <div className={styles.work_container}>
          <div className={styles.icon}>
            <img src="monogram.png" className={styles.icon_logo}></img>
          </div>
          <h2 className={styles.company}>
            EWAAB Intern <span style={{ color: "#AA7DCE" }}>@ Monogram</span>
          </h2>
          <h4 className={styles.location}>Remote (Atlanta, GA)</h4>
          <h4 className={styles.time}>Mar 2021 - April 2021</h4>
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
          <div className={styles.skills_container}>
            <p className={styles.skills_bubble}>Figma</p>
            <p className={styles.skills_bubble}>NextJS</p>
            <p className={styles.skills_bubble}>Tailwind CSS</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
