import { useState, useEffect } from 'react';
import styles from "./NavBar.module.css";
import {getImageUrl} from "../../utils";
export const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${styles.navbar} ${isFixed ? styles.fixed : ''}`}>
            <a className={styles.title} href="/"> My Portfolio </a>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={menuOpen ? getImageUrl("nav/menu-back.png") : getImageUrl("nav/hamburger.png")}
                    onClick={() => setMenuOpen(!menuOpen)}
                    alt="Menu-Button"
                />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
