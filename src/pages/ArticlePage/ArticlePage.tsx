import { useAtom } from "jotai";
import React from "react";
// import { useParams } from "react-router-dom";
import { articleAtom } from "../../store/stroe";
import "./styles.scss";

const ArticlePage = () => {
  const [article] = useAtom(articleAtom);
  // const { id } = useParams();

  console.log(article);
  return (
    <div className="article-wrapper">
      {article ? (
        <div>
          <h1 className="article-heading">{article?.title}</h1>
          {article?.image_url && (
            <img
              src={article?.image_url}
              alt={article?.title}
              className="article-img"
            ></img>
          )}
          <p>{article?.content}</p>
        </div>
      ) : (
        <p>No content</p>
      )}
    </div>
  );
};

export default ArticlePage;
