//import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}> Hi, I&apos;m Troy! </h1>
            <p className={styles.desc}>
            Hi! I&apos;m Gerard Vito J. Belardo, but you can call me Troy. 
            I am currently pursuing a degree in Computer Science, majoring in Software Technology, 
            at De La Salle University (ID122).
            </p>
            <p className={styles.desc}>
            As a passionate and dedicated aspiring software developer, 
            I am committed to continuous learning, enhancing productivity, 
            and making meaningful contributions to the tech industry.
            </p>
            <div className={styles.buttons}>
                <a className={styles.contactBtn} href="mailto:gv.belardo@gmail.com">Contact Me</a>
                <a className={styles.downloadBtn} href="assets/hero/GVB_Portfolio.pdf" download value="GVB Portfolio"> Download CV</a>
            </div>

        </div>
        <img className={styles.heroImg} src={getImageUrl("hero/heroImg.png")} alt="Profile Picture" />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  )
}
