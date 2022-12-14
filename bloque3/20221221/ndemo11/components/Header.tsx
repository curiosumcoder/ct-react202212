import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

// Redux/Redux Toolkit
import { useSelector } from "react-redux";

function Header() {
  const router = useRouter();

        // Redux/Redux Toolkit
  // Read from state on global store
  const { items } = useSelector((state: any) => state.cart);

  const isActive = (path:string) => router.pathname === path
  
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" href="/">
              <i className="bi bi-house"></i>App
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Admin
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link href="/product" className={ isActive("/product") ? "dropdown-item active": "dropdown-item"}>
                        Product
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <Link className="navbar-brand" href="/cart">
              <i className="bi bi-cart"></i> {items.length}
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
