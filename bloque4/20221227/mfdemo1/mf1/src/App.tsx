import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter";

import "./index.css";

const App = () => (
  <div className="container">
    <Counter/>
    <div>Name: mf1</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
