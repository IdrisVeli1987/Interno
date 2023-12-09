import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "../../Button";

const url = "http://localhost:3000/WhatWeDo";

const WhatWeDo = () => {
  const [weDo, setWeDo] = useState([]);
  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setWeDo(data);
    });
  }, []);
  return (
    <div className="container">
      <div className="row">
        {weDo.map(({ id, title, description, src }) => {
          return (
            <div key={id} className={styles.WeDoContent}>
              <div className={`${styles.WeDoText} row col-12 col-xl-12`}>
                <div className={`${styles.WedoTitle}`}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className={styles.ToPortfolio}>
                    <Button title="Our Portfolio" arrow  bg="dark" color="#CDA274"/>
                  </div>
                </div>
              </div>
              <div className={styles.WeDoImg}>
                <img src={src} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhatWeDo;
