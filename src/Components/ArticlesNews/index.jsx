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
      <div className="row  mb-5">
        <div
          className={`${styles.ArticleHeader} col-xl-12 col-md-12 col-sm-12`}
        >
          <h3>Articles & News</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the of readable content <br /> of a page when lookings at its
            layouts the points of using.
          </p>
        </div>
        <div className="mt-5 row">
          {article.map(({ id, src, title, date, imageTitle }) => (
            <div
              key={id}
              className={`${
                id === 2 && styles["ArticleBox-active"]
              } col-12  col-lg-4 col-xl-4`}
            >
              <div className={`${styles.ArticleBox} col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 w-100`}>
                <div className={`${styles.ArticleBoxImg}`}>
                  <img src={src} alt="image" />
                  <span className={styles.text}>{imageTitle}</span>
                </div>
                <h5 className={styles.ImageSubtitle}>{title}</h5>
                <div className={styles.ImageDesc}>
                  <div className={styles.DescDate}>
                    <p>{date}</p>
                    <Link to={`/blog/${id}`}>
                      <button className={styles.ArticleArrow}>
                        <MdOutlineArrowForwardIos />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesNews;
