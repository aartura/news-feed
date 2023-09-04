import { useAtom } from "jotai";
import React from "react";
import { articleAtom } from "../../store/stroe";
import "./styles.scss";
import Header from "../../components/Header/Header";
import NoNews from "../../components/NoNews/NoNews";
import { useNavigate } from "react-router-dom";

const ArticlePage = () => {
  const [article] = useAtom(articleAtom);
  const navigate = useNavigate();

  const handleTryAgain = () => {
    navigate(`/`);
  };
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
          <NoNews
            text="No news"
            handleButton={handleTryAgain}
            buttonText="Try again"
          ></NoNews>
        )}
      </div>
    </>
  );
};

export default ArticlePage;
