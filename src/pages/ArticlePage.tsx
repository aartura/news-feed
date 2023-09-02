import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { articleAtom } from "../store/stroe";

const ArticlePage = () => {
  const [article] = useAtom(articleAtom);
  const { id } = useParams();

  return (
    <div>
      <h2>ArticlePage</h2>
      <p>ID: {id}</p>
      {article ? (
        <div>
          <h4>{article?.title}</h4>
          <p>{article?.description}</p>
        </div>
      ) : (
        <p>No content</p>
      )}
    </div>
  );
};

export default ArticlePage;
