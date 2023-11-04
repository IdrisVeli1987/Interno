import React from "react";
import styles from "./style.module.css";
import Button from "../Button";

const Stylishly = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-xl-6 p-3">
          <h2 className={styles.stylishlyTitle}>
            We Create The Art Of Stylish Living Stylishly
          </h2>
          <p className={styles.stylishlyDescription}>
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more-or-less normal.
          </p>
          <div className={styles.phone}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="93"
                height="93"
                viewBox="0 0 93 93"
                fill="none"
              >
                <circle cx="46.5" cy="46.5" r="46.5" fill="#F4F0EC" />
                <path
                  d="M61.0012 55.0749C59.7796 53.8442 56.8211 52.0482 55.3857 51.3243C53.5164 50.3828 53.3625 50.3059 51.8933 51.3974C50.9133 52.1258 50.2617 52.7766 49.1148 52.532C47.9678 52.2874 45.4754 50.9082 43.2931 48.7329C41.1107 46.5576 39.6514 43.9931 39.4061 42.8501C39.1607 41.7071 39.8222 41.0632 40.5438 40.081C41.5607 38.6964 41.4838 38.4657 40.6145 36.5965C39.9368 35.1427 38.0883 32.2121 36.8529 30.9967C35.5313 29.6914 35.5313 29.9222 34.6798 30.276C33.9865 30.5677 33.3214 30.9222 32.6928 31.3352C31.462 32.1529 30.7789 32.8321 30.3012 33.8528C29.8235 34.8735 29.6089 37.2665 32.0759 41.7478C34.5429 46.2292 36.2737 48.5206 39.8561 52.0928C43.4385 55.6649 46.1931 57.5856 50.2202 59.844C55.2018 62.6339 57.1126 62.09 58.1365 61.6131C59.1604 61.1362 59.8427 60.4593 60.662 59.2286C61.076 58.6011 61.4314 57.9368 61.7235 57.2441C62.0781 56.3957 62.3089 56.3957 61.0012 55.0749Z"
                  stroke="#CDA274"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
              </svg>
            </div>
            <div className={styles.phoneNumber}>
              <div>012345678</div>
              <div>Call Us Anytime</div>
            </div>
          </div>

          <Button title="Get Free Estimate" arrow bg="dark" />
        </div>
        <div className="col-6 d-none d-md-block">
          <img
            src="../Stylishly/Stylishly.svg"
            alt="Stylishly image"
            className={styles.stylishlyImg}
          />
        </div>
      </div>
    </div>
  );
};

export default Stylishly;
