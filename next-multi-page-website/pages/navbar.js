import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.logo}>EZ</h2>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>
          <span style={{ color: "#AA7DCE" }}>01. </span>Home
        </Link>
        <Link href="/about" className={styles.link}>
          <span style={{ color: "#AA7DCE" }}>02. </span>About
        </Link>
        <Link href="/projects" className={styles.link}>
          <span style={{ color: "#AA7DCE" }}>03. </span>Projects
        </Link>
        <Link href="/work" className={styles.link}>
          <span style={{ color: "#AA7DCE" }}>04. </span>Work Experience
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
