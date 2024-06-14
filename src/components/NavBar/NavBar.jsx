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
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const scrollToSection = (event, sectionId) => {
        event.preventDefault();
        const element = document.querySelector(sectionId);
        if (element) {
            const yOffset = -document.querySelector(`.${styles.navbar}`).offsetHeight - 50;
            const yPosition = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: yPosition, behavior: 'smooth' });
        }
        setMenuOpen(false);
    };

    return (
        <>{menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)}></div>}

        <nav className={`${styles.navbar} ${isFixed ? styles.fixed : ''}`}>
        <a className={styles.title} href="#" onClick={scrollToTop}>My Portfolio</a>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={menuOpen ? getImageUrl("nav/menu-back.png") : getImageUrl("nav/hamburger.png")}
                    onClick={() => setMenuOpen(!menuOpen)}
                    alt="Menu-Button"
                />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                <li>
                            <a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About</a>
                        </li>
                        <li>
                            <a href="#experience" onClick={(e) => scrollToSection(e, '#experience')}>Skills</a>
                        </li>
                        <li>
                            <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')}>Projects</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a>
                        </li>
                </ul>
            </div>
        </nav>
        </>
    );
};
