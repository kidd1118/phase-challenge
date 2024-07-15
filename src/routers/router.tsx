import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";

const { hostname } = window.location;

export default createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
  ],
  {
    basename: hostname.includes("localhost") ? "" : "/phase-challenge",
  }
);
