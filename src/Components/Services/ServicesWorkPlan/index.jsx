import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

const URL = "http://localhost:3000/ServicesWorkPlan";

const ServicesWorkPlan = () => {
  const [servicesCard, setServicesCard] = useState([]);
  useEffect(() => {
    axios.get(URL).then(({ data }) => {
      setServicesCard(data);
    });
  }, []);
  return (
    <div className="container">
      <div className="row my-5">
        {servicesCard.map(({ id, title, description }) => {
          return (
            <div key={id} className={`col-4 my-5 ${styles.ServicesDesc}`}>
              <h5 className={`${styles.title}`}>{title}</h5>
              <p>{description}</p>
              <Link className={`${styles.readMoreBtn} my-3`}>
                Read More{" "}
                <span>
                  <AiOutlineArrowRight />
                </span>{" "}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesWorkPlan;
