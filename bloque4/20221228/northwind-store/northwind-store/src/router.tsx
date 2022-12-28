import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter } from 'react-router-dom';
import { createNanoEvents } from 'nanoevents';

import Error from './Error';
import Home from './Home';
import Dashboard from './Dashboard';
import renderMFE from './renderMFE';

//import ProductIndex from 'ns_product/ProductIndex';
// import CartIcon from 'ns_cart/CartIcon';
//import CartIndex from 'ns_cart/CartIndex';

const ProductIndex = React.lazy(() => import("ns_product/ProductIndex"));
const CartIndex = React.lazy(() => import("ns_cart/CartIndex"));
const Login = React.lazy(() => import("ns_auth/Login"));

const emitter = createNanoEvents();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home emitter={emitter}/>,
    errorElement: <Error />,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: "product",
        element: (renderMFE(ProductIndex, {emitter}))
      },
      {
        path: "cart",
        element: (renderMFE(CartIndex))
      }
    ]
  },
  {
    path: '/login',
    element: (renderMFE(Login)),
  },
]);

export default router;
