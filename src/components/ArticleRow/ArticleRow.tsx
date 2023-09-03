import React from "react";
import { NewsInterface } from "../../types/types";
import "./styles.scss";

const ArticleRow = ({ news }: { news: NewsInterface }) => {
  return (
    <div className="article-row">
      {news?.image_url && (
        <img
          src={news?.image_url}
          alt={news?.title}
          className="article-img"
        ></img>
      )}
      <div className="content">
        <h4 className="heading">{news?.title}</h4>
        <p className="description">{news?.description}</p>
      </div>
    </div>
  );
};

export default ArticleRow;
