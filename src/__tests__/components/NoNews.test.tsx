import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NoNews from "./../../components/NoNews/NoNews";

describe("NoNews Component", () => {
  const mockHandleButton = jest.fn();

  it("renders without errors", () => {
    render(
      <NoNews
        handleButton={mockHandleButton}
        text="No news available."
        buttonText="Reload"
      />
    );

    const noNewsElement = screen.getByTestId("no-news");
    expect(noNewsElement).toBeInTheDocument();
  });

  it("displays the provided text", () => {
    render(
      <NoNews
        handleButton={mockHandleButton}
        text="No news available."
        buttonText="Reload"
      />
    );

    const textElement = screen.getByText("No news available.");
    expect(textElement).toBeInTheDocument();
  });

  it("displays the provided button text", () => {
    render(
      <NoNews
        handleButton={mockHandleButton}
        text="No news available."
        buttonText="Reload"
      />
    );

    const buttonElement = screen.getByText("Reload");
    expect(buttonElement).toBeInTheDocument();
  });

  it("calls handleButton when the button is clicked", () => {
    render(
      <NoNews
        handleButton={mockHandleButton}
        text="No news available."
        buttonText="Reload"
      />
    );

    const buttonElement = screen.getByText("Reload");
    fireEvent.click(buttonElement);
    expect(mockHandleButton).toHaveBeenCalled();
  });
});
