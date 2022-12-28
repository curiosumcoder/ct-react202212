import React, { useEffect } from 'react';
import cart from 'ns_cart/cart';
import { Outlet } from 'react-router-dom';
import renderMFE from './renderMFE';
import { Link, NavLink } from 'react-router-dom';
import Header from './Header';

function Home({ emitter }) {
  useEffect(() => {
    const unbind = emitter.on('addToCart', (product) => {
      console.log('App.addToCart: ', product);
      if (cart) {
        cart.addToCart(product);
      }
    });
    return () => {
      unbind();
    };
  }, []);

  return (
    <main className="d-flex flex-nowrap">
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light"
        style={{ width: '280px' }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <i className="bi bi-lightbulb-fill" style={{color:"darkgray", fontSize:"xx-large"}}></i>
          <span className="fs-4">Northwind</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <NavLink to={'/'} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} aria-current="page" end>
                <i className="bi bi-house"></i> Home
            </NavLink>
          </li>
          <li>
          <NavLink to={'/product'} className="nav-link link-dark">
              <i className="bi bi-cart"></i> Products
            </NavLink>
          </li>
          <li>
            <NavLink to={'/cart'} className="nav-link link-dark">
              <i className="bi bi-cart"></i> Cart
            </NavLink>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to={'/login'}>
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="d-flex flex-column flex-shrink-0 p-3"
        style={{ width: '50%' }}
      >
        <Header/>
        <Outlet />
      </div>

    </main>
  );
}

export default Home;
