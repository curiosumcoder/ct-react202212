import React, { useEffect, useState } from 'react';
import cart, { cartItems } from '../../state/cart';
import IProduct from 'ns-model';

function CartIndex() {
  const [items, setItems] = useState<Array<IProduct>>();

  useEffect(() => {
    cartItems.subscribe((value) => setItems(value ?? []));
  }, []);

  return (
    <>
      {items && items?.length > 0 && (
        <>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Line Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((p: IProduct) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.productName}</td>
                  <td>{p.unitPrice}</td>
                  <td>
                    {p?.quantity ?? 1}
                    <i
                      className="bi bi-plus-circle-fill"
                      style={{ color: 'blue', cursor: 'pointer' }}
                    ></i>
                    <i
                      className="bi bi-dash-circle-fill"
                      style={{ color: 'red', cursor: 'pointer' }}
                    ></i>
                  </td>
                  <td>{p.unitPrice * (p?.quantity ?? 1)}</td>
                  <td>
                    <i
                      className="bi bi-dash-circle"
                      style={{ color: 'red', cursor: 'pointer' }}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan={3}></th>
                <th>Total</th>
                <td colSpan={3}>
                  {items.reduce(
                    (a: number, p: IProduct) =>
                      a + p.unitPrice * (p?.quantity ?? 1),
                    0
                  )}
                </td>
              </tr>
            </tfoot>
          </table>
          <button className="btn btn-primary" onClick={()=> cart.clearCart()}>Clear cart</button>
        </>
      )}
      {items?.length === 0 && <p>Cart is empty!</p>}
    </>
  );
}

export default CartIndex;
