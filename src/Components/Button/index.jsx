import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import styles from "./style.css";
import { Link } from "react-router-dom";

const Button = ({ title, arrow, arrowClass, bg, to }) => {
  return (
    <Link to={to} className={`button ${bg}`}>
      {title}
      {arrow && (
        <AiOutlineArrowRight strokeWidth={"2px"} className={arrowClass} />
      )}
    </Link>
  );
};

export default Button;
