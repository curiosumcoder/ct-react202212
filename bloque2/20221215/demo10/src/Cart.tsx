import React from 'react'

 // Redux/Redux Toolkit
 import { useDispatch, useSelector } from "react-redux";
 import cartSlice from "./data/cartSlice";

function Cart() {

      // Redux/Redux Toolkit
  // Read from state on global store
  const { items } = useSelector((state:any) => state.cart)
  // Update state in global store
  const { clearCart, removeFromCart } = cartSlice.actions;
  // To execute actions on store
  const dispatch = useDispatch<any>()

  return (
    <>
        <h3>Cart</h3>
        {items?.length > 0 && (<>
            <ul>
                {items.map((i:number) => (
                    <li key={i}>
                        {i}
                        <button onClick={() => dispatch(removeFromCart(i))}>
                            Remove from Cart</button>
                    </li>
                ))}
            </ul>
            <button onClick={()=> dispatch(clearCart())}>Clear cart</button>
        </>)}
        {items?.length === 0 && <p>Cart is empty!</p>}
    </>
  )
}

export default Cart