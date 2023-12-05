import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import axios from "axios";

const url = "http://localhost:3000/Use";

const _url = "http://localhost:3000/Art";

const Interior = () => {
  const [useList, setUseList] = useState([]);

  const [artList, setArtList] = useState([]);


  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setUseList(data);
    });
  }, []);

  useEffect(() => {
    axios.get(_url).then(({ data }) => {
      setArtList(data);
    });
  }, []);

  return (
    <div className="container">
      <div className={`${styles.InteriorBox} row bg-primary`}>
        <div className={`${styles.Use} col-12 col-lg-6`}>
          <h4>Use of Interior</h4>
          <ol>
            {useList.map(({ id, description }) => {
              return (
                <li key={id} className={`${styles.UseList}`}>
                  {description}
                </li>
              );
            })}
          </ol>
        </div>
        <div className={`${styles.Art} col-12 col-lg-6`}>
          <h4>Make An Art</h4>
          <ol>
            {artList.map(({ id, description }) => {
              return (
                <li key={id} className={`${styles.ArtList} `}>
                  {description}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Interior;
