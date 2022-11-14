import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Testing App", () => {
  test("Page text displays", () => {
    render(<App />);
    const pageTitle = screen.getByText(/Quote of the day/i);
    expect(pageTitle).toBeInTheDocument();
  });
});
