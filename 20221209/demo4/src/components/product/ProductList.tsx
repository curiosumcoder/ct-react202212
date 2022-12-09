import React, { useEffect } from "react";
import IProduct from "../../model/IProduct";

function ProductList({ products, onSelected = (f) => f }) {
  useEffect(() => {
    console.log("After render component ...");
    console.log("ProductList:", (products as [])?.length ?? 0);
    return () => {
      console.log("Clean-up component ...");
    };
  },['products']);

  useEffect(() => {
    console.log("After render component ...");
    // console.log("ProductList", JSON.stringify(products));
    return () => {
      console.log("Clean-up component ...");
    };
  },[]);

  // Conditional Rendering

  if ((products as Array<IProduct>) && products.length > 0) {
    return (
      <>
        <h6>Product List</h6>
        <table className="table table-hover">
          <thead>
            <tr>
            <th>Id</th>
              <th>Name</th>
              <th>Unit Price</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((p: IProduct) => (
              <tr key={p.productID}>
                <td>{p.productID}</td>
                <td>{p.productName}</td>
                <td>{p.unitPrice}</td>
                <td>{p.category?.categoryName ?? ''}</td>
                <td><i className="bi bi-plus-circle-fill" 
                style={{color:"green", cursor:"pointer"}} 
                onClick={()=> onSelected(p)}></i></td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  } else {
    return <p className="alert alert-info">No data to show!</p>;
  }
}

export default ProductList;
