import React from "react";

// Redux/Redux Toolkit
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "./data/productSlice";
import IProduct from "./model/IProduct";

function Product() {
  // Redux/Redux Toolkit
  // Read from state on global store
  const { data, fetchStatus } = useSelector((state: any) => state.products);
  // Update state in global store
  // To execute actions on store
  const dispatch = useDispatch<any>();

  return <>
    <h3>Product</h3>
    <input type="search" placeholder="Type here ..." 
    onChange={(event) => dispatch(searchProducts(event.target.value))} />
    <ul>
        {data.length > 0 && data.map((p:IProduct) => <li>{p.productName}</li> ) }
    </ul>
  </>;
}

export default Product;
