import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalSyled } from "./GlobalStyled";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalSyled />
    <App />
  </React.StrictMode>
);
