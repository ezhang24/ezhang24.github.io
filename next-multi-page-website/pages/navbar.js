import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.logo}>EZ</h2>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>
          01. Home
        </Link>
        <Link href="/about" className={styles.link}>
          02. About
        </Link>
        <Link href="/projects" className={styles.link}>
          03. Projects
        </Link>
        <Link href="/work" className={styles.link}>
          04. Work Experience
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
