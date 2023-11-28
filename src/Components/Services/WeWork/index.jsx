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
        <div className={`${styles.WeWorkBox} `}>
          <div className={`${styles.WeWorkTitle} `}>
            <h2>How We Work</h2>
            <p>
              It is a long established fact will be distracted.Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className={`${styles.Works}`}>
            {servicePage.length &&
              servicePage.map(
                ({ id, src, descriptionTitle, description, icon }, index) => {
                  return (
                    <div key={id} className={`${styles.serviceData}`}>
                      <div>
                        <div>
                          <img
                            className={`${styles.WorkImg} `}
                            src={src}
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className={`${styles.ContentTitle}`}>
                        <div>
                          <div className={styles.WorkIcon}>
                            <img src={icon} alt="icon" />
                            <h3 style={{ order: 3 }}>
                              {index > 8 ? index + 1 : "0" + (index + 1)}
                            </h3>
                          </div>
                          <div className={`${styles.ContentSubtitle}`}>
                            <h5>{descriptionTitle}</h5>
                            <p>{description}</p>
                          </div>
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
