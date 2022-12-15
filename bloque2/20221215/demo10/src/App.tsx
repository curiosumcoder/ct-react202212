import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
 // Redux/Redux Toolkit
import { useDispatch, useSelector } from "react-redux";
import cartSlice from "./data/cartSlice";
import Cart from "./Cart";
import Product from "./Product";

function App() {
  const products = [1,2,3,4,5,6,7,8,9,10]

  // Redux/Redux Toolkit
  // Read from state on global store
  const { items } = useSelector((state:any) => state.cart)
  // Update state in global store
  const { addToCart, removeFromCart } = cartSlice.actions;
  // To execute actions on store
  const dispatch = useDispatch<any>()

  return <>
    <Product/>
    <hr/>
    <Cart/>
    <hr/>
    {<p>Items on Cart: <strong>{items.length}</strong></p>}
    <ul>
    {products.map(p => (
      <li key={p}>
        <p><strong>Product: {p}</strong><br/>
        {!items.includes(p) && (
          <button onClick={() => dispatch(addToCart(p))}>Add to Cart</button>
        )}
        <br/>
        {items.includes(p) && (
          <button onClick={() => dispatch(removeFromCart(p))}>Remove from Cart</button>
        )}
        </p>
      </li>
    ))}
    </ul>
  </>;
}

export default App;
