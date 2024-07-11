
import { getImageUrl } from '../../utils'
import PropTypes from 'prop-types';
import styles from "./ProjectCard.module.css"
import { useRef, useEffect } from 'react';

export const ProjectCard = ({project : {title, imageSrc, description, skills, source}}) => {
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const skillsRef = useRef(null);

    const handleScroll = (ref, event) => {
      const delta = event.deltaY || event.deltaX;
      ref.current.scrollLeft += delta / 3;
      if (ref === descRef) {
        ref.current.scrollTop += delta / 3;
      }
      event.preventDefault();
    };

    useEffect(() => {
      const refs = [titleRef.current, descRef.current, skillsRef.current];
      const disableScroll = (event) => {
        if (refs.includes(event.target) || refs.includes(event.target.parentElement)) {
          event.preventDefault();
        }
      };

      window.addEventListener('wheel', disableScroll, { passive: false });

      return () => {
        window.removeEventListener('wheel', disableScroll);
      };
    }, []);
    
  return (
    <div className={styles.container}>
      <img className={styles.image} src={getImageUrl(imageSrc)} alt={`Image of ${title}`} />
      <div className={styles.titleContainer} onWheel={(e) => handleScroll(titleRef, e)}>
        <h3 className={styles.title} ref={titleRef}>{title}</h3>
      </div>
      <p className={styles.desc} ref={descRef} onWheel={(e) => handleScroll(descRef, e)}>{description}</p>
      <div className={styles.skills} ref={skillsRef} onWheel={(e) => handleScroll(skillsRef, e)}>
        {skills.map((skill, id) => (
          <div className={styles.skill} key={id}>{skill}</div>
        ))}
      </div>
      <div className={styles.links}>
        <a className={styles.link} href={source} target="_blank" rel="noopener noreferrer">Check it out!</a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    source: PropTypes.string.isRequired,
  }).isRequired,
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

