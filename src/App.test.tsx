import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders refresh the image link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Refresh the image/i);
  expect(linkElement).toBeInTheDocument();
});
