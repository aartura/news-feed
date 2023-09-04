import React, { useEffect, useState } from "react";
import { getNews, getNewsByName } from "../../service/api";
import { NewsInterface } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { articleAtom } from "../../store/stroe";
import ArticleRow from "../../components/ArticleRow/ArticleRow";
import "./styles.scss";
import Header from "../../components/Header/Header";
import { Button, TextField } from "@mui/material";
import NoNews from "../../components/NoNews/NoNews";
import Loader from "../../components/Loader/Loader";

const MainPage = () => {
  const [news, setNews] = useState<NewsInterface[] | []>([]);
  const [, setArticle] = useAtom(articleAtom);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

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

  const handleSearch = async () => {
    setIsLoading(true);
    const data = await getNewsByName(searchValue);
    setNews(data.results);
    setIsLoading(false);
  };

  const handleArticleClick = (elem: NewsInterface) => {
    setArticle(elem);
    navigate(`${elem.article_id}`);
  };

  const handleTryAgain = () => {
    setSearchValue("");
    setIsLoading(true);
    fetchData();
    setIsLoading(true);
  };

  return (
    <div>
      <Header />
      <div className="list-wrapper">
        {isLoading ? (
          <Loader />
        ) : news.length ? (
          <div>
            <div className="search">
              <TextField
                id="search"
                label="Search"
                variant="outlined"
                sx={{ width: "100%" }}
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              />
              <Button
                onClick={() => handleSearch()}
                variant="contained"
                disabled={!searchValue.length}
              >
                Serch
              </Button>
            </div>
            {news.map((element) => (
              <div onClick={() => handleArticleClick(element)}>
                <ArticleRow news={element} key={element?.article_id} />
              </div>
            ))}
          </div>
        ) : (
          <NoNews
            text="No news"
            handleButton={handleTryAgain}
            buttonText="Try again"
          ></NoNews>
        )}
      </div>
    </div>
  );
};

export default MainPage;
