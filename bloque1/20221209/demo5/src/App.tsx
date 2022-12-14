import { useState, useReducer } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ProductList from "./components/product/ProductList";
import OrderList from "./components/product/OrderList";
import ProductSearch from "./components/product/ProductSearch";
import IProduct from "./model/IProduct";

function App() {
  const [products, setProducts] = useState(Array<IProduct>());

  const [ordered, setOrdered] = useReducer(
    (ordered: Array<IProduct>, p: IProduct) => {
      if (ordered.findIndex((o) => o.id == p.id) === -1) {
        return [...ordered, p];
      } else {
        return ordered;
      }
    },
    Array<IProduct>()
  );

  return (
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            App
          </a>
        </div>
      </nav>
      <div className="container" style={{ marginTop: "1em" }}>
        <h1>App</h1>
        <OrderList products={ordered} />
        <ProductSearch onResults={(results) => setProducts(results)} />
        <ProductList products={products} onSelected={(p)=> setOrdered(p)}/>
      </div>
    </>
  );
}

export default App;
