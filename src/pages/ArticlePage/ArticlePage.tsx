import { useAtom } from "jotai";
import React from "react";
import { articleAtom } from "../../store/stroe";
import "./styles.scss";
import Header from "../../components/Header/Header";

const ArticlePage = () => {
  const [article] = useAtom(articleAtom);

  return (
    <>
      <Header />
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
            <p className="article-content">{article?.content}</p>
          </div>
        ) : (
          <h1>No content</h1>
        )}
      </div>
    </>
  );
};

export default ArticlePage;
