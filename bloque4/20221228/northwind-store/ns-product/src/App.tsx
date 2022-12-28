import React from "react";
import ReactDOM from "react-dom";
import ProductIndex from "./components/product/ProductIndex";

import "./index.css";

const App = () => (
  <div className="container">
    <ProductIndex/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
