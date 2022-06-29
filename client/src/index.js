import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import StartPage from "./pages/StartPage.js";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StartPage />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
