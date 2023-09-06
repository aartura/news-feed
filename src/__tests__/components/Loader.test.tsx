import React from "react";
import { render, screen } from "@testing-library/react";
import Loader from "./../../components/Loader/Loader";

describe("Loader Component", () => {
  it("renders without errors", () => {
    render(<Loader />);
    const loaderElement = screen.getByTestId("loader");
    expect(loaderElement).toBeInTheDocument();
  });

  it("renders a CircularProgress component", () => {
    render(<Loader />);
    const circularProgressElement = screen.getByRole("progressbar");
    expect(circularProgressElement).toBeInTheDocument();
  });
});
