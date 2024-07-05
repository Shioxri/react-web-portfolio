import { getImageUrl } from '../../utils';
import PropTypes from 'prop-types';
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project: { title, imageSrc, desc, skills, source } }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={getImageUrl(imageSrc)} alt={`Image of ${title}`} />
      <h3 className={styles.title} data-title={title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li className={styles.skill} key={id}>{skill}</li>
        ))}
      </ul>
      <div className={styles.links}>
        <a className={styles.link} href={source}>Source Code</a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    source: PropTypes.string.isRequired,
  }).isRequired,
};
