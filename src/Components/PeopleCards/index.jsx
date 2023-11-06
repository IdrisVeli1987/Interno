import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";

const _url = "http://localhost:3000/users";

const PeopleCards = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(_url).then(({ data }) => {
      setUsers(data);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className={`${styles.aboutUs} `}>
          <h3 className={`${styles.title} mb-5  `}>
            What the People Thinks About Us
          </h3>
          <div className={styles.usersCards}>
            {users.map(({ id, src, name, city, description }) => {
              return (
                <div key={id} className={`${styles.PeopleCard}`}>
                  <div
                    className={`${styles.PeopleCard_top} d-flex align-items-center`}
                  >
                    <img className={styles.image} src={src} alt={name} />
                    <div className={`${styles.PeopleCard_topText}`}>
                      <h5 className={styles.userName}>{name}</h5>
                      <p className={styles.userCity}>{city}</p>
                    </div>
                  </div>
                  <p className={styles.useDesc}>{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleCards;
