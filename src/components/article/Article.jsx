import React from "react";
import styles from "./article.module.scss";

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className={styles.gpt3__blog_container_article}>
      <div className={styles.gpt3__blog_container_article_image}>
        <img src={imgUrl} alt={imgUrl} />
      </div>
      <div className={styles.gpt3__blog_container_article_content}>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
