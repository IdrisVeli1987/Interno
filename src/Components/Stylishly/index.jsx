import React from "react";
import styles from "./style.module.css";
import { AiFillPhone } from "react-icons/ai";

const Stylishly = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h2>We Create The Art Of Stylish Living Stylishly</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more-or-less normal.
          </p>
          <div className="phone">
            <div>
              <AiFillPhone   />
            </div>
          </div>
        </div>
        <div className="col-6">
          <img src="../Stylishly/Stylishly.svg" alt="Stylishly image" />
        </div>
      </div>
    </div>
  );
};

export default Stylishly;
