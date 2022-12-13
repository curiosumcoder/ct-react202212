import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FormInputs from './components/FormInputs'
import ProductCreate from './components/product/ProductCreate'
import ProductSearch from './components/product/ProductSearch'
import ProductList from './components/product/ProductList'
import ProductDetails from './components/product/ProductDetails'
import IProduct from './model/IProduct'

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState(Array<IProduct>());
  const [productId, setProductId] = useState<number>(0);

  useEffect(() => {
    console.log(import.meta.env);
    console.log(import.meta.env.VITE_API_URL)
    console.log("App: After render component ...");
    return () => {
      console.log("App: Clean-up component ...");
    };
  }, []);

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
        <h1>demo6</h1>
        {/* <FormInputs/> */}
        <ProductCreate/>
        {productId > 0 && <ProductDetails id={productId} onDeleted={() => setProductId(0)}/> }
        <ProductSearch onResults={(results:Array<IProduct>) =>setProducts(results)}/>
        <ProductList products={products} onSelected={(p:IProduct) => setProductId(p.id)} />
      </div>
    </>
  )
}

export default App
