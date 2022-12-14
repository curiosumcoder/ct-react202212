import React from "react";
import IProduct from "../../model/IProduct";

function OrderList({products}) {
    
  if ((products as Array<IProduct>) && products.length > 0) {
    return (
      <>
        <h3>Order</h3>
        <table className="table table-sm table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Unit Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p: IProduct) => (
              <tr key={p.productID}>
                <td>{p.productID}</td>
                <td>{p.productName}</td>
                <td>{p.unitPrice}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="2">Total</th>
              <td>
                {products.reduce(
                  (accumulator: number, current: IProduct) =>
                    accumulator + current.unitPrice,
                  0
                )}
              </td>
            </tr>
          </tfoot>
        </table>
      </>
    );
  } else {
    return (
      <>
        <h6>Order</h6>
        <p className="alert alert-info">No products on order!</p>
      </>
    );
  }
}

export default OrderList;
