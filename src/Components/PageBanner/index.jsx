import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const PageBanner = ({ src, page, title = "" }) => {
  return (
    <div className={styles.bannerContainer}>
      <img src={src} alt="" className={styles.bannerLogo} />
      {title && (
        <div className={styles.bannerInfo}>
          <h2>{title}</h2>
          <p>
            <Link to="/">Home</Link> / {page}
          </p>
        </div>
      )}
    </div>
  );
};

export default PageBanner;
