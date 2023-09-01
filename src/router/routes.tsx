import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import ArticlePage from "../pages/ArticlePage";

const routes = () => (
  <Routes>
    <Route path="/" element={<MainPage />}></Route>
    <Route path="/:id" element={<ArticlePage />}></Route>
  </Routes>
);

export default routes;
