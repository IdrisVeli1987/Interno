import React from "react";
import { ImArrowUp } from "react-icons/im";
import ScrollToTop from "react-scroll-up";

const style = {
  padding: 10,
  border: "1px",
  borderColor: "#000",
  borderStyle: "solid",
  borderRadius: "50%",
};

const ScrollUp = () => {
  return (
    <ScrollToTop style={style} showUnder={160}>
      <span>
        <ImArrowUp />
      </span>
    </ScrollToTop>
  );
};

export default ScrollUp;
