import React from "react";
import "@testing-library/jest-dom";
//import { act, fireEvent, render, screen } from "@testing-library/react";
import { getQuote } from "./getFunction";
jest.mock("./getFunction");
describe("Quotes are fetched from API", () => {
  test("Quote is fetched", async () => {
    const quote = [{ text: "test quote" }];
    (getQuote as jest.Mock).mockResolvedValue({ quote });
  });
});
