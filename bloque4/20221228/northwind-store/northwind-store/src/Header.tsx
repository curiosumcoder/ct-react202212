import React from 'react';
const CartIcon = React.lazy(() => import('ns_cart/CartIcon'));
import renderMFE from './renderMFE';

function Header() {
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
        <a className="navbar-brand" href="#"></a>
          <div className="d-flex">{renderMFE(CartIcon)}</div>
        </div>
      </nav>
    </>
  );
}

export default Header;
