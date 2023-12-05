import React from "react";
import styles from "./style.module.css";
import img from "../../../../public/ServiceSingle/Design/DesignSection.svg";
import Button from "../../Button";

const DesignSection = () => {
  return (
    <div className="container">
      <div className="row">
        <div className={`${styles.DesignBox}`}>
          <div className={`${styles.DesignImg}`}>
            <img src={img} alt="" />
          </div>
          <div className={`${styles.DesignText}`}>
            <div className={`${styles.DesignLove}`}>
              <h3>We love design.That's how we got here.</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the of readable content .
              </p>
              <Button title="Our Portfolio" arrowClass="arrow-gold" arrow bg="dark" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignSection;
