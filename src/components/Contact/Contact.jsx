import { getImageUrl } from "../../utils"
import styles from "./Contact.module.css"

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
        <div className={styles.text}>
            <h2>Contact Me!</h2>
            <p>Get in touch via: </p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")}alt="Email Icon"/>
                <a href="mailto:gv.belardo@gmail.com">gv.belardo@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")}alt="Email Icon"/>
                <a href="mailto:gerard_belardo@dlsu.edu.ph">gerard_belardo@dlsu.edu.ph</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")}alt="LinkedIn Icon"/>
                <a href="https://www.linkedin.com/in/gerard-vito-belardo-601865311/">linkedin.com/gvb</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")}alt="Github Icon"/>
                <a href="https://github.com/Shioxri">github.com/Shioxri</a>
            </li>
        </ul>

    </footer>
  )
}
