import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import LoginContainer from "./containers/LoginContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoginContainer />
  </React.StrictMode>
);
