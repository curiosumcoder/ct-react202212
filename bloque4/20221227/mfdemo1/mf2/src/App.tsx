import React from "react";
import ReactDOM from "react-dom";
import ProductIndex from "./components/product/ProductIndex";

import "./index.css";

const App = () => (
  <>
    <ProductIndex/>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
