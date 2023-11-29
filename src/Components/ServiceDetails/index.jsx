import React from "react";
import styles from "./style.module.css";

const ServiceDetails = () => {
  return (
    <div className="container">
      <div className="row">
        <div className={`${styles.Deatils}`}>
          <div className={`${styles.Trends}`}>
            <h2>
              We set the trends of <br /> modern living <br /> Services.
            </h2>
          </div>
          <div className={`${styles.TrendsP}`}>
            <p className={`${styles.FirstP}`}>
              It is a long established fact that a reader will be distracted by
              the of readable content of a page.
            </p>
            <p className={styles.secondP}>
              when lookings at its layouts the points spriof using that it has a
              more less normal.A wonderful serenity has taken pgossession of my
              entire soul, like thesce sweet morndsings of sphring which I enjoy
              with my forwhole heart. I am alone, and feel the charm of
              excgistence in this spot, which was created for the bliss of souls
              like mine.
            </p>
            <p className={styles.ThirdP}>
              when lookings at its layouts the points spriof using that it has a
              more less normal.A wonderful serenity has taken pgossession of my
              entire soul, like thesce sweet morndsings of sphring which I enjoy
              with my forwhole heart. I am alone, and feel the charm of
              excgistence in this spot, which was created for the bliss of souls
              like mine.
            </p>
          </div>
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
};

export default ServiceDetails;
