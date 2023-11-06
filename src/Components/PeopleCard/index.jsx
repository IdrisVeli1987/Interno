import React from "react";
import styles from "./style.module.css";
const PeopleCard = ({ name, src, city, description }) => {
  return (
    <div className={`${styles.PeopleCard}`}>
      <div className={styles.PeopleCard_top}>
        <img className={styles.image} src={src} alt={name} />
        <div>
          <h5 className={styles.userName}>{name}</h5>
          <p className={styles.userCity}>{city}</p>
        </div>
      </div>
      <p className={styles.useDesc}>{description}</p>
    </div>
  );
};

export default PeopleCard;
