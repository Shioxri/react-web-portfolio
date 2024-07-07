
import { getImageUrl } from '../../utils'
import PropTypes from 'prop-types';
import styles from "./ProjectCard.module.css"

export const ProjectCard = ({project : {title, imageSrc, description, skills, source}}) => {
  return (
    <div className={styles.container}>
        <img className={styles.image} src = {getImageUrl(imageSrc)} alt={`Image of ${title}`}/>
        <h3 className={styles.title} >{title}</h3>
        <p className={styles.desc}>{description}</p>
        <div className={styles.skills}>
            {
            skills.map((skill, id) => (
                <div className={styles.skill} key={id}>{skill}</div>
            ))
            }
        </div>
        <div className={styles.links}>
            <a className={styles.link} href={source}>Check it out!</a>
        </div>
    </div>
  )
}
/*
export const ProjectCard = ({project : {title, imageSrc, description, skills, source}}) => {
  return (
    <div className={styles.container}>
        <img className={styles.image} src = {getImageUrl(imageSrc)} alt={`Image of ${title}`}/>
        <h3 className={styles.title} >{title}</h3>
        <p className={styles.desc}>{description}</p>
        <ul className={styles.skills}>
            {
            skills.map((skill, id) => (
                <li className={styles.skill} key={id}>{skill}</li>
            ))
            }
        </ul>
        <div className={styles.links}>
            <a className={styles.link} href={source}>Check it out!</a>
        </div>
    </div>
  )
}
  */
ProjectCard.propTypes = {
    project: PropTypes.shape({
      title: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      skills: PropTypes.arrayOf(PropTypes.string).isRequired,
      source: PropTypes.string.isRequired,
    }).isRequired,
  }

