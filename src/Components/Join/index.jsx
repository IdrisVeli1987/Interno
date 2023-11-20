import React from "react";
import styles from "./style.module.css";
import Button from "../Button";
import { Link } from "react-router-dom";
import { useState } from "react";


const Join = () => {
  // const [joinBtn, setJoinBtn] = useState([]) 
  return (
    <div className="container">
      <div className={`${styles.joinContent} mb-2 px-1`}>
        <h3 className={styles.joinHeader}>Wanna join the interno?</h3>
        <p>It is a long established fact will be distracted.</p>
        <Link to="/contact">
          <Button title="Contact With Us" arrow bg="gold" color="black" />
        </Link>
      </div>
    </div>
  );
};

export default Join;
