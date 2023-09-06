import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../../components/Header/Header";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("Header Component", () => {
  it("renders without errors", () => {
    render(<Header />);
    const appBarElement = screen.getByRole("banner");
    expect(appBarElement).toBeInTheDocument();
  });

  it("displays the 'News' title", () => {
    render(<Header />);
    const titleElement = screen.getByText("News");
    expect(titleElement).toBeInTheDocument();
  });

  it("displays the 'Back' button when 'id' parameter is provided", () => {
    jest
      .spyOn(require("react-router-dom"), "useParams")
      .mockReturnValue({ id: 1234 });
    render(<Header />);
    const backButtonElement = screen.getByText("Back");
    expect(backButtonElement).toBeInTheDocument();
  });

  it("does not display the 'Back' button when 'id' parameter is not provided", () => {
    jest.spyOn(require("react-router-dom"), "useParams").mockReturnValue({});
    render(<Header />);
    const backButtonElement = screen.queryByText("Back");
    expect(backButtonElement).toBeNull();
  });

  it("navigates back when 'Back' button is clicked", () => {
    const mockNavigate = jest.fn();
    jest
    .spyOn(require("react-router-dom"), "useParams")
    .mockReturnValue({ id: 1234 });

    jest
      .spyOn(require("react-router-dom"), "useNavigate")
      .mockReturnValue(mockNavigate);
    render(<Header />);
    const backButtonElement = screen.getByText("Back");
    fireEvent.click(backButtonElement);
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
