import React from "react";
import styles from "./style.module.css";
import { FaQuoteLeft } from "react-icons/fa";

const Quote = () => {
  return (
    <div className="container">
      <div className="row ">
        <div className={`${styles.AuthorQuotes} `}>
          <div className={`${styles.Quote}`}>
            <FaQuoteLeft />
            <h1>
              I like an interior that defies labeling. I don't really want
              someone to walk into a room and know that I did it
            </h1>
            <p>-BUNNY WILLIAMS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
