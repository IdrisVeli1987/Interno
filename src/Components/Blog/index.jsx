import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";

const url = "http://localhost:3000/Blog";

const SingleBlog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setBlog(data);
      console.log(data);
    });
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className={styles.blogs}>
            {blog.map(({ id, title, src, subtitle, description, date }) => {
              return (
                <div key={id} className={styles.LatestPost}>
                  <div className="col-12 d-flex align-items-center justify-content-center text-left">
                    <div className="col-6">
                      <h3>{title}</h3>
                      <img src={src} alt="" />
                    </div>
                    <div className="col-6">
                      <h5>{subtitle}</h5>
                      <p>{description}</p>
                      <p>{date}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
