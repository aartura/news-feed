import React from "react";
import { useParams } from "react-router-dom";

const ArticlePage = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>ArticlePage</h2>
      <p>ID: {id}</p>
    </div>
  );
};

export default ArticlePage;
