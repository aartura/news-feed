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
import Search from "../../components/Search/Search";

const MainPage = () => {
  const [news, setNews] = useState<NewsInterface[] | []>([]);
  const [, setArticle] = useAtom(articleAtom);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [nextPage, setNextPage] = useState(0);
  const [prevPagesStack, setPrevPagesStack] = useState<number[]>([]);
  const [currentPage, setCurrrentPage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getNews();
    setNews(data.results);
    setNextPage(data.nextPage);
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

  const handleNextPage = async () => {
    setIsLoading(true);
    setCurrrentPage(nextPage);
    const pages = [...prevPagesStack];
    if (!pages.length) {
      pages.push(0);
    } else {
      pages.push(currentPage);
    }
    setPrevPagesStack(pages);
    fetchDataWithPage(nextPage);
  };

  const handlePrevPage = async () => {
    setIsLoading(true);
    const pages = [...prevPagesStack];
    pages.pop();
    setPrevPagesStack(pages);
    fetchDataWithPage(prevPagesStack[prevPagesStack.length - 1] || 0);
  };

  const fetchDataWithPage = async (page: number) => {
    let data;
    if (searchValue.length) {
      data = await getNewsByName(searchValue, page);
    } else {
      data = await getNews(page);
    }
    setNews(data.results);
    setNextPage(data.nextPage);
    setIsLoading(false);
  };

  const handleRefreshButton = () => {
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
            <Search
              searchValue={searchValue}
              handleSearchInput={(e) => {
                setSearchValue(e.target.value);
              }}
              handleSearchButton={handleSearch}
              handleClearButton={handleRefreshButton}
            />
            {news.map((element) => (
              <div
                onClick={() => handleArticleClick(element)}
                key={element?.article_id}
              >
                <ArticleRow news={element} />
              </div>
            ))}
            <div className="pagination-wrapper">
              <Button
                onClick={() => handlePrevPage()}
                variant="contained"
                disabled={!prevPagesStack.length}
              >
                Previous Page
              </Button>
              <Button
                onClick={() => handleNextPage()}
                variant="contained"
                disabled={!nextPage}
              >
                Next Page
              </Button>
            </div>
          </div>
        ) : (
          <NoNews
            text="No news"
            handleButton={handleRefreshButton}
            buttonText="Try again"
          ></NoNews>
        )}
      </div>
    </div>
  );
};

export default MainPage;
