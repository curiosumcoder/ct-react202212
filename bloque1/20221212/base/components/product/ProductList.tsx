import React from "react";
import IProduct from "../../model/IProduct";

function ProductList({products,onSelected}: {products: Array<IProduct>;onSelected?: Function;}) {

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
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.productName}</td>
                <td>{p.unitPrice}</td>
                <td>{p.category?.categoryName ?? ""}</td>
                <td>
                  <i
                    className="bi bi-plus-circle-fill"
                    style={{ color: "green", cursor: "pointer" }}
                    onClick={() => onSelected?.(p) }
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  } else {
    return <p className="alert alert-info ">No data to show!</p>;
  }
}

export default ProductList;
