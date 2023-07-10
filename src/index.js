import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Table from "./Table";
import store from "./component/store/index";
import { Provider } from "react-redux";

ReactDOM.render(
  <>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Table" element={<Table />} />
        </Routes>
      </Router>
    </Provider>
  </>,
  document.getElementById("root")
);
