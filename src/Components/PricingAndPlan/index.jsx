import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import axios from "axios";

const url = "http://localhost:3000/Price";

const PricingAndPlan = () => {
  const [price, setPrice] = useState([]);

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setPrice(data);
    });
  }, []);
  return (
    <div className="container">
      <div className="row my-5">
        {price.map(({ id, title, currency, price, type, priceList }) => (
          <div className={`col-md-4`} key={id}>
            <div className={styles.PriceListBox}>
              <h5>{title}</h5>
              <div className={styles.priceListBox}>
                <div className={styles.PriceData}>
                  <p>{currency}</p>
                  <h4>{price}</h4>
                </div>
                <p>{type}</p>
              </div>
              <div className={styles.ListData}>
                <hr />
                {priceList.map((text, index) => (
                  <p key={index}> {text}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingAndPlan;
