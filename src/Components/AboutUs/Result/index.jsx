import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./style.module.css"

const url = "http://localhost:3000/Result";

const Result = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setPortfolio(data)
    });
  }, []);
  return (
    <div className="container">
      <div className="row">
        {
            portfolio.map(({id, src, title, description})=>{
                return(
                    <div className={styles.ResultBox} key={id}>
                        <div className={`${styles.ResultImg} row col-12 col-xl-12`}>
                            <div className={`${styles.ResultPhoto} row col-6`}>
                                <img src={src} alt="" />
                            </div>
                            <div className={`${styles.ResultText} row col-6`}>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  );
};

export default Result;
