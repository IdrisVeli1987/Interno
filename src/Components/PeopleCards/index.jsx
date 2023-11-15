import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PeopleCard from "../PeopleCard";
import styles from "./style.module.css";

const _url = "http://localhost:3000/users";

const PeopleCards = () => {
 

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 576 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  };
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get(_url).then(({ data }) => {
      setUsers(data);
    });
  }, []);

  return (
    <div className="container">
      <div className="row col-xl col-xs-12">
        <div className={`${styles.aboutUs} col-12`}>
          <h3 className={`${styles.title} mb-5  `}>
            What the People Thinks <br /> About Us
          </h3>

          <div className={styles.usersCards}>
            <Carousel
              responsive={responsive}
              arrows={false}
              infinite={true}
              autoPlay={true}
              className={styles.carousel}
            >
              {users.map((user) => {
                return <PeopleCard key={user.id} {...user} />;
              })}
              
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleCards;
