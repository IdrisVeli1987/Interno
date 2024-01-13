import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import Button from "../../Button";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const url = "http://localhost:3000/BlogArticle";

const BlogsArticle = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setBlogs(data);
    });
  }, []);
  return (
    <div>
      <div className="container">
        <div className={` row ${styles.BlogsArticleContent}`}>
          <h3>Articles & News</h3>
          {blogs.map(({ id, src, title, date }) => {
            return (
              <div key={id} className={` col-4 ${styles.ImagesCard}`}>
                <img src={src} alt="images" />
                <p>{title}</p>
                <div className={styles.ImagesCardBottom}>
                  <p>{date}</p>
                  <Link className={styles.ImageCardBtn}>
                    <AiOutlineArrowRight />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogsArticle;
