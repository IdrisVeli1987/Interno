import React, { useState } from "react";
import styles from "./style.module.css";
import { Button } from "bootstrap";

const Modal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={styles.ModalContent} show={show} onhide={handleShow} >
      <h4></h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero maiores
        sint totam ipsa, deserunt placeat illo rerum sunt, est porro
        reprehenderit voluptatem aliquam molestias amet dicta consectetur,
        quaerat modi nemo.
      </p>
    </div>
  );
};

export default Modal;
