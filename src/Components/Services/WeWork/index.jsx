import React from "react";
import styles from "./style.module.css";

const WeWork = () => {
  return (
    <div className="container">
      <div className="row">
        <div className={styles.WeWorkBox}>
          <h2 className={styles.WeWorkTitle}>How We Work</h2>
          <p className={styles.WeWorkSubtitle}>
            It is a long established fact will be distracted.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeWork;
