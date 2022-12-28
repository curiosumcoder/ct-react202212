import React, { useEffect } from 'react';
import { createNanoEvents } from 'nanoevents';

import './index.css';

const App0 = () => {
  const emitter = createNanoEvents();

  useEffect(()=>{
    const unbind = emitter.on('addToCart', product => {
      console.log('App.addToCart: ',product);   
      if (cart) {
        cart.addToCart(product)
      }   
    })
    return () => {
      unbind()
    }
  }, [])

  return (
    <>
    <h1>READY</h1>
      {/* <div className="container">
        <h1>Northwind Store</h1>
        {renderMFE(CartIcon)}
        {renderMFE(ProductIndex, {emitter})}
        {renderMFE(CartIndex)}
      </div> */}
    </>
  );
};

//ReactDOM.render(<App />, document.getElementById('app'));

