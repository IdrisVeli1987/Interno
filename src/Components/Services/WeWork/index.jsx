import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import axios from "axios";

const url = "http://localhost:3000/ServicesPageFiles";

const WeWork = () => {
  const [servicePage, setServicePage] = useState([]);

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setServicePage(data);
    });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className={styles.WeWorkBox}>
          <div className={styles.WeWorkTitle}>
            <h2>How We Work</h2>
            <p>
              It is a long established fact will be distracted.Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className={styles.Works}>
            {servicePage.length &&
              servicePage.map(
                ({ id, src, descriptionTitle, description, icon }, index) => {
                  return (
                    <div key={id} className={styles.serviceData}>
                      <img className={styles.WorkImg} src={src} alt="image" />
                      <div className={styles.ContentTitle}>
                        <div className={styles.WorkIcon}>
                          <h3>{index > 8 ? index + 1 : "0" + (index + 1)}</h3>
                          <img className={styles.icons} src={icon} alt="" />
                        </div>
                        <h5>{descriptionTitle}</h5>
                        <div className={styles.ContentSubtitle}>
                          <p>{description}</p>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeWork;
