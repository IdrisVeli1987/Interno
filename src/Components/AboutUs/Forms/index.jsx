import React from "react";
import styles from "./style.module.css";
import { useFormik } from "formik";
import Button from "../../Button";
import { Link } from "react-router-dom";

const Forms = () => {
  const form = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container">
      <div className="row">
        <div className={styles.FormBox}>
          <div className={`${styles.FormTitle} row col-12 col-xl-12`}>
            <h3>
              Creative project? Let's have <br /> a productive talk.
            </h3>
          </div>
          <div className={styles.FormContent}>
            <form onSubmit={form.handleSubmit}>
              <div className={`${styles.FormInput} row col-12 col-xl-12 col-sm-10`}>
                <input type="name" name="name" placeholder="Name" required />
                <input
                  type="email"
                  email="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className={`${styles.FormTextarea} row col-12 col-xl-12 col-sm-10`}>
                <textarea
                  type="text"
                  name="message"
                  placeholder="Text"
                  className="row col-12 col-xl-12 col-sm-2"
                ></textarea>
              </div>
              <div className={`${styles.FormBtn}`}>
                <Link to="/contact" className={`${styles.FormLink}`}>
                  <Button
                    title="Send Now"
                    arrow
                    bg="dark"
                    color="black"
                  />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
