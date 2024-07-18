import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("render test", async () => {
  render(<div id="test">Page 01</div>);
  const element = await screen.findByText("Page 01");
  expect(element).toBeInTheDocument();
});

test("render test", async () => {
  render(<App />);
  const element = await screen.findByText("Page 01");
  console.log("element", element);
  expect(element).toBeInTheDocument();
});
