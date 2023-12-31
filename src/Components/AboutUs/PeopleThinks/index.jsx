import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

const url = "http://localhost:3000/PeopleThinks";

const PeopleThinks = () => {
  const [peopleThinks, setPeopleThinks] = useState([]);
  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setPeopleThinks(data);
    });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className={`${styles.PeopleContent} `}>
          <div className={`${styles.peopleThinksTitle}`}>
            <h3 className={`${styles.PeopleCardTitle}`}>
              What the People Thinks <br /> About Us
            </h3>
          </div>
          <div className={`${styles.PeopleContentImg}`}>
            <div className={`${styles.EmptyCard}`}>
              <h3>Nattasha Julie</h3>
              <p>Design, Australia</p>
              <div className={styles.EmpatyCardIcons}>
                <FaFacebook />
                <FaTwitter />
                <FaLinkedinIn />
                <FaInstagram />
              </div>
              <div className={styles.EmptyCardContact}>
                <Link to="+1 (378) 400-1234" className={styles.CardPhone}>
                  +1 (378) 400-1234
                </Link>
                <Link to="julie@email.com" className={styles.CardEmail}>
                  julie@email.com
                </Link>
              </div>
            </div>
            {peopleThinks.map(({ id, src }) => (
              <div className={`${styles.PeopleImageBox}`}>
                <img key={id} src={src} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleThinks;
