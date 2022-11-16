import React from "react";
import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

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
    const quoteText = screen.getByText(
      /Genius is one percent inspiration and ninety-nine percent perspiration./i
    );
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
    });
  });

  //eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug();
});
