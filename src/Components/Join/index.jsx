import React from "react";
import styles from "./style.module.css";
import Button from "../Button";
import { Link } from "react-router-dom";

const Join = () => {
  return (
    <div className="container">
      <div className="row">
        <div className={`${styles.joinContent} mb-5`}>
            <h3 className={styles.joinHeader}>Wanna join the interno?</h3>
            <p>It is a long established fact will be distracted.</p>
            <Link>
              <Button title="Contact With Us" arrow bg="gold" color="black" />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Join;
