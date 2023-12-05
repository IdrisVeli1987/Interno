import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import styles from "./style.css";

const Button = ({ title, arrow, arrowClass, bg }) => {
  return (
    <button className={`button ${bg}`}>
      {title}
      {arrow && <AiOutlineArrowRight strokeWidth={'2px'} className={arrowClass} />}
    </button>
  );
};

export default Button;
