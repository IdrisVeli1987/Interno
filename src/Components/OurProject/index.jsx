import React from "react";
import styles from "./style.module.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";

const OurProject = ({ src, title, description }) => {
  return (
    <div className={`${styles.ourProjectsBox} col-12 col-md-5 col-xl-5 d-flex`}>
      <div className={`${styles.projectsCards}`}>
        <div className={`${styles.cardImages}`}>
          <img src={src} alt={title} className={styles.projectsImg} />
        </div>

        <div
          className={`${styles.card_bottom} d-flex align-items-center justify-content-between`}
        >
          <div className={styles.card_text}>
            <h5 className={`${styles.projectsTitle}`}>{title}</h5>
            <p className={`${styles.projectsDesc}`}>{description}</p>
          </div>

          <button
            className={`${styles.card_arrow} d-flex align-items-center justify-content-center`}
          >
              <MdOutlineArrowForwardIos />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurProject;
