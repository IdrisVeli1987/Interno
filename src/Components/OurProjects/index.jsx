import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

const URL = "http://localhost:3000/OurProjects";

const OurProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(URL).then(({ data }) => {
      setProjects(data);
    });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className={styles.ourProjectsBox}>
          <h2 className={`${styles.projectsTitle}`}>Follow Our Projects</h2>
          <p className={`${styles.projectsDesc}`}>
            It is a long established fact that a reader will be distracted by
            the of readable content of page lookings at its layouts points.
          </p>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {projects?.map((project) => {

          return <OurProject  key={OurProjects.id} {...OurProjects}/>
        }
        )}
      </div>
    </div>
  );
};

export default OurProjects;
