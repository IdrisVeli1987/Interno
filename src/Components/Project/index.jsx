import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import axios from "axios";

const url = "http://localhost:3000/Project";

const Projects = () => {
  const [bedroomFiles, setBedroomFiles] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setBedroomFiles(data);
      console.log(data);
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
        {active === 0 && <p>menu 0</p>}
        {active === 1 && <p>menu 1</p>}
        {active === 2 && <p>menu 2</p>}
        {active === 3 && <p>menu 3</p>} 
      </div>
    </div>
  );
};

export default Projects;
