import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";

const url = "http://localhost:3000/Project";

const Projects = () => {
  const [bedroomFiles, setBedroomFiles] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setBedroomFiles(data);
    });
  }, []);
  const titles = ["Bathroom", "Bed Room", "Kitchan", "Living Area"];
  return (
    <div className="container">
      <div className="row">
        <div className={styles.TitleList}>
          <ul>
            {titles.map((title, index) => {
              return (
                <li
                  onClick={() => setActive(index)}
                  className={index === active ? styles.active : ""}
                >
                  {title}
                </li>
              );
            })}
          </ul>
        </div>
        {bedroomFiles.map(({ id, src, title, subtitle }) => {
          return (
            <div key={id} className={styles.RoomsImages}>
              <div className="row col-12">
                <div className=" row col-6">
                  <img src={src} alt="" />
                  <h5>{title}</h5>
                  <p>{subtitle}</p>
                </div>
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
