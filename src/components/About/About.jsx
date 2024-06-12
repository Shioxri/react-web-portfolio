//import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";
export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About Me!</h2>
        <div className={styles.content}>
            <img className={styles.aboutImg} src={getImageUrl("about/abt1.png")} alt="About Me Image" />
            <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/icon1.png")} />
          <div className={styles.aboutItemText}>
            <h3>Frontend Developer</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
          </li>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/icon1.png")} />
          <div className={styles.aboutItemText}>
            <h3>Frontend Developer</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
          </li>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/icon1.png")} />
          <div className={styles.aboutItemText}>
            <h3>Frontend Developer</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
          </li>
        </ul>
        </div>
        
    </section>
  )
}
