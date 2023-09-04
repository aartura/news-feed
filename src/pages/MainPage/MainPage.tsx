import React, { useEffect, useState } from "react";
import { getNews } from "../../service/api";
import { NewsInterface } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { articleAtom } from "../../store/stroe";
import ArticleRow from "../../components/ArticleRow/ArticleRow";
import "./styles.scss";
import Header from "../../components/Header/Header";
import { CircularProgress } from "@mui/material";

const MainPage = () => {
  const [news, setNews] = useState<NewsInterface[] | []>([]);
  const [, setArticle] = useAtom(articleAtom);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getNews();
    setNews(data.results);
    setIsLoading(false);
  };

  const handleArticleClick = (elem: NewsInterface) => {
    setArticle(elem);
    navigate(`${elem.article_id}`);
  };

  return (
    <div>
      <Header />
      {isLoading ? (
        <div className="loader">
          <CircularProgress />
        </div>
      ) : news.length ? (
        <div className="list-wrapper">
          {news.map((element) => (
            <div onClick={() => handleArticleClick(element)}>
              <ArticleRow news={element} key={element?.article_id} />
            </div>
          ))}
        </div>
      ) : (
        <h2>No news</h2>
      )}
    </div>
  );
};

export default MainPage;
