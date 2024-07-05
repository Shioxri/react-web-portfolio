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
          <img src={getImageUrl("about/ci.png")} className={styles.aboutItemLogo} alt="Cavite Institute Logo"  />
          <div className={styles.aboutItemText}>
            <h3>Cavite Institute - Elisea School of Creative Learning</h3>
            <ul>
                <li>Pre-School to Senior High School</li>
                <li>June 2007 - July 2022</li>
                <li>STEM Strand</li>
                <li>Consistent High Honors</li>
                <li>Graduated With High Honors</li>
                <li>Best Researcher Award</li>
            </ul>
          </div>
          </li>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/DLSU-LOGO.png")} className={styles.aboutItemLogo}  alt="DLSU Logo" />
          <div className={styles.aboutItemText}>
            <h3>De La Salle University Manila</h3>
            <ul>
              <li>BS Computer Science Major in Software Technology</li>
              <li>Sept. 2022 - Current</li>
              <li>Consistent Dean&apos;s Lister</li>
              <li>3.5 CGPA</li>
              <li>DOST MERIT Scholar</li>
                  Organizations
                  <ul className={styles.orgsList}>
                  <t>
                      <li>LSCS</li>
                      <li>GAS</li>
                      <li>NKK</li>
                      </t>
                  </ul>
          </ul>
          </div>
          </li>
        </ul>
        </div>
        
    </section>
  )
}
