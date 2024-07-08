//import React from 'react'
import skills from "../../data/skills.json";
//import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css"
export const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.content}>
            <div className={styles.skills}>{
                    skills.map((skill,id) => {
                       return (
                        <div key={id}>
                        <div className={styles.skillImgContainer}>
                            <img className={styles.skillImg} src={getImageUrl(skill.imageSrc) } alt={skill.Title}/>
                            <p>{skill.title}</p>

                        </div>
                       </div>
                       )
                    })
            }
            </div>
        </div>
    </section>
  )
}

/* Just add after you have work experience   //add mongoose, hbs, ajax
            
            <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
            </ul>
*/
