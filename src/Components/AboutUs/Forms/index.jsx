import React from "react";
import styles from "./style.module.css";
import { useFormik } from "formik";

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
          <div className={styles.FormTitle}>
            <h3>
              Creative project? Let's have <br /> a productive talk.
            </h3>
          </div>
          <div className={styles.FormContent}>
            <form onSubmit={form.handleSubmit}>
              <div className={styles.FormInput}>
                <input type="name" name="name" placeholder="name" required />
                <input
                  type="email"
                  email="email"
                  placeholder="email"
                  required
                />
              </div>
              <textarea
                type="text"
                name="message"
                placeholder="Text"
              ></textarea>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
