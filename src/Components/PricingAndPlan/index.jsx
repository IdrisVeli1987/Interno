import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import axios from "axios";

const url = "http://localhost:3000/Price";

const PricingAndPlan = () => {
  const [price, setPrice] = useState([]);

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setPrice(data);
      console.log(data);
    });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className={styles.PricingCards}>
          <div className={styles.PricingCard}>
            {price.map(({ id, title, currency, price, type, priceList }) => (
              <div className={styles.PriceListBox} key={id}>
                <h5>{title}</h5>
                <div className={styles.priceListBox}>
                  <p>{currency}</p>
                  <h4>{price}</h4>
                  <p>{type}</p>
                </div>
                <hr />
                <p>{priceList}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingAndPlan;
