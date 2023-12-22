import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./style.module.css";
import Button from "../../Button";
import { Link } from "react-router-dom";

const url = "http://localhost:3000/Result";

const Result = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setPortfolio(data);
    });
  }, []);
  return (
    <div className="container">
      <div className="row">
        {portfolio.map(({ id, src, title, description }) => {
          return (
            <div className={styles.ResultBox} key={id}>
              <div className={`${styles.ResultImg} row `}>
                <div className={`${styles.ResultPhoto} col-12 col-xl-6`}>
                  <div>
                    <img src={src} alt="" />
                  </div>
                </div>
                <div
                  className={`${styles.ResultText} col-12 col-xl-6 ps-0 ps-xl-5`}
                >
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                  <div>
                    <Link to="/PricingAndPlan">
                      <Button
                        title="Our Pricing and Plan"
                        arrow
                        bg="dark"
                        color="#CDA274"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Result;
