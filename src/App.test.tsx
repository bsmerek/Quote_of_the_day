import React from "react";
import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { getQuote } from "./components/getFunction";

jest.mock("./components/getFunction");

describe("Text in app displays for all components", () => {
  test("Page text displays", () => {
    render(<App />);
    const pageTitle = screen.getByText(/Quote of the day/i);
    expect(pageTitle).toBeInTheDocument();
  });

  test("Button text displays", () => {
    render(<App />);
    const buttonText = screen.getByText(/Click for a quote/i);
    expect(buttonText).toBeInTheDocument();
  });

  test("Quote text displays", () => {
    render(<App />);
    const quoteText = screen.getByText(/Click button to get quote/i);
    expect(quoteText).toBeInTheDocument();
  });
});

describe("New quote is generated at button click", () => {
  describe("getQuote", () => {
    test("Button click fetches quote", async () => {
      render(<App />);
      const button = screen.getByTestId("newQuote");
      // eslint-disable-next-line testing-library/no-unnecessary-act
      act(() => {
        fireEvent.click(button);
      });
      const quote = [{ text: "test quote" }];
      (getQuote as jest.Mock).mockResolvedValue({ quote });
    });
  });

  //eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug();
});
