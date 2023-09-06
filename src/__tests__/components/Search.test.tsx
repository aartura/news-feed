import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./../../components/Search/Search";

describe("Search Component", () => {
  const mockHandleSearchInput = jest.fn();
  const mockHandleSearchButton = jest.fn();
  const mockHandleClearButton = jest.fn();

  it("renders without errors", () => {
    render(
      <Search
        searchValue=""
        handleSearchInput={mockHandleSearchInput}
        handleSearchButton={mockHandleSearchButton}
        handleClearButton={mockHandleClearButton}
      />
    );

    const searchElement = screen.getByTestId("search");
    expect(searchElement).toBeInTheDocument();
  });

  it("displays the search input with the provided value", () => {
    render(
      <Search
        searchValue="Sample Value"
        handleSearchInput={mockHandleSearchInput}
        handleSearchButton={mockHandleSearchButton}
        handleClearButton={mockHandleClearButton}
      />
    );

    const searchInputElement = screen.getByLabelText("Search");
    expect(searchInputElement).toBeInTheDocument();
    expect(searchInputElement).toHaveValue("Sample Value");
  });

  it("calls handleSearchInput when the search input changes", () => {
    render(
      <Search
        searchValue=""
        handleSearchInput={(event) => {
          const newValue = event.target.value;
          mockHandleSearchInput(newValue);
        }}
        handleSearchButton={mockHandleSearchButton}
        handleClearButton={mockHandleClearButton}
      />
    );

    const searchInputElement = screen.getByLabelText("Search");
    fireEvent.change(searchInputElement, { target: { value: "New Value" } });
    expect(mockHandleSearchInput).toHaveBeenCalledWith("New Value");
  });

  it("calls handleSearchButton when the search button is clicked", () => {
    render(
      <Search
        searchValue="Sample Value"
        handleSearchInput={mockHandleSearchInput}
        handleSearchButton={mockHandleSearchButton}
        handleClearButton={mockHandleClearButton}
      />
    );

    const searchButtonElement = screen.getByTestId("search-button");
    fireEvent.click(searchButtonElement);
    expect(mockHandleSearchButton).toHaveBeenCalled();
  });

  it("calls handleClearButton when the clear button (ClearIcon) is clicked", () => {
    render(
      <Search
        searchValue="Sample Value"
        handleSearchInput={mockHandleSearchInput}
        handleSearchButton={mockHandleSearchButton}
        handleClearButton={mockHandleClearButton}
      />
    );

    const clearButtonElement = screen.getByLabelText(
      "toggle password visibility"
    );
    fireEvent.click(clearButtonElement);
    expect(mockHandleClearButton).toHaveBeenCalled();
  });
});
