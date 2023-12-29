import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import PagePaginate from "./PagePaginate";

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
        <div className="col-8 mx-auto ">
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

          <PagePaginate bedroomFiles={bedroomFiles} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
