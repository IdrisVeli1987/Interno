import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import styles from "./style.module.css";

const url = "http://localhost:3000/PeopleThinks";

const PeopleThinks = () => {
  const [peopleThinks, setPeopleThinks] = useState([]);
  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setPeopleThinks(data);
    });
  }, []);

  // const img = [src1, src2, src3];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className={styles.PeopleContent}>
          <div className={styles.peopleThinksTitle}>
            <h3 className={`${styles.PeopleCardTitle}`}>
              What the People Thinks <br /> About Us
            </h3>
          </div>
          <div className={styles.PeopleContentImg}>
            {peopleThinks.map(({ id, src }) => (
              <img key={id} src={src} alt="" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleThinks;
