import React, { useState } from "react";
import styles from "./style.module.css";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";

const PeopleCard = ({ name, src, city, description }) => {
  const [rating, setRating] = useState(2); // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };
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
      <div className={styles.rate}>
        <Rating
          onClick={handleRating}
          initialValue={rating}
          size={20}
          label
          transition
          fillColor="orange"
          emptyColor="gray"
          className="foo"
          readonly
        />
        {rating}
      </div>
      <Link to="/AboutUs">Read more</Link>
    </div>
  );
};

export default PeopleCard;
