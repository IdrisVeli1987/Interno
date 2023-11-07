import React from "react";
import styles from "./style.module.css";

const OurProject = ({ src, title, description }) => {
  return (
    <div>
      <div className={`${styles.ourProjectsBox} d-flex`}>
        <div className={`${styles.projectscards} d-inline-block alignItems-center`}>
          <div className={`${styles.cardImages} d-flex`}>
            <img src={src} alt="" className={styles.projectsImg}/>
          </div>
          <h5 className={`${styles.projectsTitle}`}>{title}</h5>
          <p className={`${styles.projectsDesc}`}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default OurProject;
