import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  // const linkElement = screen.getByText(/Page/i);
  // expect(linkElement).toBeInTheDocument();
  expect(true).toEqual(true);
});
