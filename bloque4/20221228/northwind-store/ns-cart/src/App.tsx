import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import CartIndex from './components/cart/CartIndex';
import IProduct from 'ns-model';

import './index.css';
import cart, { cartItems } from './state/cart';
import CartMini from './components/cart/CartIcon';

const App = () => {
  useEffect(() => {
    cartItems.subscribe((value) => console.log('cart: ', value));
  }, []);
  return (
    <div className="container">
      <CartIndex />
      <button
        onClick={() => {
          const p: IProduct = {
            id: 1,
            productName: 'Chai',
            supplierID: 1,
            categoryID: 1,
            quantityPerUnit: '10 boxes x 20 bags',
            unitPrice: 18,
            unitsInStock: 39,
            unitsOnOrder: 0,
            reorderLevel: 10,
            discontinued: false,
          };

          cart.addToCart(p);
        }}
      >
        Add to Cart
      </button>

      <button onClick={() => cart.clearCart()}>Clear Cart</button>

      <CartMini/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
