import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.media_container}>
        <li className={styles.list}>
          <a href="https://github.com/ezhang24"><img className={styles.icon} src="github.svg"></img></a>
        </li>
        <li className={styles.list}>
          <a href="https://www.linkedin.com/in/emily-zhang-2024/"><img className={styles.icon} src="linkedin.svg"></img></a>
        </li>
        <li className={styles.list}>
          <a href="mailto: elzhang@caltech.edu"><img className={styles.icon} src="email.svg"></img></a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
