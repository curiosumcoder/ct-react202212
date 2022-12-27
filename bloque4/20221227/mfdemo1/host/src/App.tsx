import React from "react";
import ReactDOM from "react-dom";
import Counter from "mf1/Counter";
import "./index.css";
import ProductIndex from "mf2/ProductIndex";

const App = () => (
  <div className="container">
    <Counter/>
    <ProductIndex/>

    <div>Name: host</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
