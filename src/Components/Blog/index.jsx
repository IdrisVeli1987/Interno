import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import BlogsArticle from "./BlogsArticle";

const url = "http://localhost:3000/Blog";

const SingleBlog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setBlog(data);
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
                  <div className="row d-flex align-items-center justify-content-center text-left">
                    <div className={`${styles.PostContent} col-6`}>
                      <h3>{title}</h3>
                      <img src={src} alt="" />
                    </div>
                    <div className={`${styles.PostCost} col-6`}>
                      <h5>{subtitle}</h5>
                      <p>{description}</p>
                      <div className={styles.PostDate}>
                        <p>{date}</p>
                        <div className={styles.PostBtn}>
                          <Link className={`arrow`} to="/">
                            <AiOutlineArrowRight />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* <BlogsArticle /> */}
      </div>
    </div>
  );
};

export default SingleBlog;
