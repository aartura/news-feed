import React from "react";
import { render, screen } from "@testing-library/react";
import ArticleRow from "../../components/ArticleRow/ArticleRow";
import { NewsInterface } from "../../types/types";

const mockNews: NewsInterface = {
  title: "Sample Title",
  description: "Sample Description",
  image_url: "sample-image.jpg",
  article_id: "",
  link: "",
  source_id: "",
  keywords: [],
  creator: [],
  video_url: "",
  pubDate: "",
  content: "",
  country: [],
  category: [],
  language: "",
};

describe("ArticleRow Component", () => {
  it("renders without errors", () => {
    render(<ArticleRow news={mockNews} />);
  });

  it("displays the title correctly", () => {
    render(<ArticleRow news={mockNews} />);
    const titleElement = screen.getByText("Sample Title");
    expect(titleElement).toBeInTheDocument();
  });
  it("displays the description correctly", () => {
    render(<ArticleRow news={mockNews} />);
    const descriptionElement = screen.getByText("Sample Description");
    expect(descriptionElement).toBeInTheDocument();
  });

  it("displays the image correctly", () => {
    render(<ArticleRow news={mockNews} />);
    const imageElement = screen.getByAltText("Sample Title");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "sample-image.jpg");
  });

  it("does not display the image if image_url is not provided", () => {
    const newsWithoutImage: NewsInterface = {
      ...mockNews,
      image_url: "",
    };
    render(<ArticleRow news={newsWithoutImage} />);
    const imageElement = screen.queryByAltText("Sample Title");
    expect(imageElement).not.toBeInTheDocument();
  });
});
