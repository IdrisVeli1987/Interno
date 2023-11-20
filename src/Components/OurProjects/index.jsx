import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import OurProject from "../OurProject";

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
          <h2 className={`${styles.projectsTitle} mb-2`}>
            Follow Our Projects
          </h2>
          <p className={`${styles.projectsDesc} mb-5 `}>
            It is a long established fact that a reader will be distracted by
            the of readable <br /> content of page lookings at its layouts
            points.
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-between flex-wrap alignItems-center">
        {projects.length &&
          projects.map((proj) => {
            return <OurProject key={proj.id} {...proj} />;
          })}
      </div>
    </div>
  );
};

export default OurProjects;
