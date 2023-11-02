import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

const _url = "http://localhost:3000/WorkPlan";
const WorkPlanCards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios.get(_url).then(({ data }) => {
      setCards(data);
    });
  }, []);
  return (
    <div className="container">
      <div className="row mb-5 mt-2">
        {cards.map(({ id, title, description }) => {
          return (
            <div key={id} className={`col-12 col-xl-4 my-5 ${styles.WorkPlanCard}`}>
              <h3 className={`my-3 ${styles.title}`}>{title}</h3>
              <p>{description}</p>
            </div>
          );
        })}
        <div className="col-4"></div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default WorkPlanCards;
