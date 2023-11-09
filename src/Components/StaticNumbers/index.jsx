import React from "react";
import styles from "./style.module.css";

const StaticNumber = ({ id, number, description }) => {
  return (
    <div>
      <div className={`${styles.staticNumBox}col-12`}>
        <div className="container">
          <div className="row">
            <div className={styles.staticBox}>
                <h1>{number}</h1>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticNumber;
