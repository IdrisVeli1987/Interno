import React, { useState } from "react";
import styles from "./style.module.css";
import { Rating } from "react-simple-star-rating";

const PeopleCard = ({ name, src, city, description }) => {
  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // Some logic
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
          ratingValue={rating}
          size={20}
          label
          transition
          fillColor="orange"
          emptyColor="gray"
          className="foo" // Will remove the inline style if applied
        />
        {/* Use rating value */}
        {rating}
      </div>
    </div>
  );
};

export default PeopleCard;
