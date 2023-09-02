import React, { useEffect, useState } from "react";
import { getNews } from "../service/api";
import { NewsInterface } from "../types/types";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { articleAtom } from "../store/stroe";

const MainPage = () => {
  const [news, setNews] = useState<NewsInterface[] | []>([]);
  const [, setArticle] = useAtom(articleAtom);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getNews();
    setNews(data.results);
  };

  const handleArticleClick = (elem: NewsInterface) => {
    setArticle(elem);
    navigate(`${elem.article_id}`);
  };

  return (
    <div>
      <h1>MainPage</h1>
      {news.length ? (
        <div>
          <h2> some news</h2>
          {news.map((element) => (
            <div
              key={element?.article_id}
              onClick={() => handleArticleClick(element)}
            >
              <h4>{element?.title}</h4>
              <p>{element?.description}</p>
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
