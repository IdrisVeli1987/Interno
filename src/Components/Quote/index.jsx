import React from "react";
import styles from "./style.module.css";
import { FaQuoteLeft } from "react-icons/fa";
// import Quote from "../../../public/AboutUs/Quote/Pattern1.svg"
// import Quote from "../../../public/AboutUs/Quote/Pattern2.svg"

const Quote = () => {
  return (
    <div className="container">
      <div className="row">
        <div className={`${styles.AuthorQuotes} col-12 col-xl-12`}>
          <div className={styles.Quote}>
            <FaQuoteLeft />
            {/* <img src={Quote} alt="" /> */}
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
