import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Error from './Error';
import ProductMaintenance from './components/product/ProductMaintenance';
import ProductCreate from './components/product/ProductCreate';
import ProductDetails from './components/product/ProductDetails';
import ProductEdit from './components/product/ProductEdit';
import ProductDelete from './components/product/ProductDelete';
import ProductIndex from './components/product/ProductIndex';
import { productLoader } from './loaders/productLoader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error/>,
    children: [
      {
        path: "product",
        element: <ProductMaintenance />,        
        children: [
          { index: true, element: <ProductIndex /> },
          {
            path: "create",
            element: <ProductCreate />,
          },
          {
            path: ":id",
            element: <ProductDetails />,
            loader: productLoader,
          },
          {
            path: "edit/:id",
            element: <ProductEdit />,
            loader: productLoader,
          },    
          {
            path: "delete/:id",
            element: <ProductDelete />,
            loader: productLoader,
          },                   
        ]
      },
    ]
  },
  {
    path: "/about",
    element: <><h1>About</h1></>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
