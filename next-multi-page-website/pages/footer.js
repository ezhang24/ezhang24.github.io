import styles from "../styles/Footer.module.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className={styles.container}>
      <script
        src="https://kit.fontawesome.com/ddfeb5ea78.js"
        crossorigin="anonymous"
      ></script>
      <ul className={styles.media_container}>
        <li className={styles.list}>
          <a href="https://github.com/ezhang24">
            <motion.img
              whileHover={{ scale: 1.1 }}
              className={styles.icon}
              src="github.svg"
            ></motion.img>
          </a>
        </li>
        <li className={styles.list}>
          <a href="https://www.linkedin.com/in/emily-zhang-2024/">
            <motion.img
              whileHover={{ scale: 1.1 }}
              className={styles.icon}
              src="linkedin.svg"
            ></motion.img>
          </a>
        </li>
        <li className={styles.list}>
          <a href="mailto: elzhang@caltech.edu">
            <motion.img
              whileHover={{ scale: 1.1 }}
              className={styles.icon}
              src="email.svg"
            ></motion.img>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
