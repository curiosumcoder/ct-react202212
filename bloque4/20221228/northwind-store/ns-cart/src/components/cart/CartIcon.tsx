import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import cart, { cartItems } from '../../state/cart';
import IProduct from 'ns-model';

function CartIcon() {
  const navigate = useNavigate();
  const [items, setItems] = useState<Array<IProduct>>();

  useEffect(() => {
    cartItems.subscribe((value) => setItems(value ?? []));
  }, []);

  return (
    <>
      <Link to={'/cart'}>
        <i className="bi bi-cart" style={{fontSize: '2rem',color: 'cornflowerblue',cursor: 'pointer',}}>
          </i> {items?.length ?? 0}
      </Link>
    </>
  );
}

export default CartIcon;
