import React, { useState } from "react";
import styles from "./style.module.css";
import { HiXMark } from "react-icons/hi2";

const Modal = ({onCloseModal}) => {
 
  return (
    <div className={`${styles.ModalContent} col-12 sm-4`}>
      <div className={styles.ModalHeader}>
        <h3>Minimal Bedroom</h3>
        <button onClick={onCloseModal}>
          <HiXMark fontSize={"32px"} />
        </button>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
        veritatis expedita quasi. Harum dolor, numquam soluta, expedita
        asperiores odit illo quae facere, autem in porro pariatur quia vitae
        tenetur quis!
      </p>
    </div>
  );
};

export default Modal;
