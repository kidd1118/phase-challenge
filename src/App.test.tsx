import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("render test", async () => {
  render(<div id="test">Page 01</div>);
  const element = await screen.findByText("Page 01");
  expect(element).toBeInTheDocument();
});
