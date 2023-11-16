import React from "react";
import styles from "./style.module.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

const url = "http://localhost:3000/ArticleNews/";

const ArticlesNews = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setArticle(data);
    });
  }, []);
  return (
    <div className="container">
      <div className="row mb-5">
        <div className={styles.ArticleHeader}>
          <h3>Articles & News</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the of readable content <br /> of a page when lookings at its
            layouts the points of using.
          </p>
        </div>
        <div
          className={`${styles.ArticleContent} d-flex align-items-center mt-5`}
        >
          {article.map(({ id, src, title, date }) => (
            <div
              key={id}
              className={`${styles.ArticleBox} ${
                id === 2 && styles["ArticleBox-active"]
              }`}
            >
              <div className={styles.ArticleBoxImg}>
                <img src={src} alt="image" />
                <span className={styles.text}>Text</span>
              </div>
              <h5 className={styles.ImageSubtitle}>{title}</h5>
              <div className={styles.ImageDesc}>
                <div className={styles.DescDate}>
                  <p>{date}</p>
                </div>
                <Link to={`/Blog/${id}`}>
                  <button className={styles.ArticleArrow}>
                    <MdOutlineArrowForwardIos />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesNews;
