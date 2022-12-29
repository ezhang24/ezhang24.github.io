import Link from 'next/link';
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <Link href='/' className={styles.link}>
                Home
            </Link>
            <Link href='/about' className={styles.link}>
                About
            </Link>
            <Link href='/projects' className={styles.link}>
                Projects
            </Link>
            <Link href='/work' className={styles.link}>
                Work Experience
            </Link>
        </nav>
    )
}

export default Navbar;