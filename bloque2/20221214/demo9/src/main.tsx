import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
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
import ProductService from './services/ProductService';

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
          {
            path: "delete2/:id",
            action: async ({params, request}: any) => {
              console.log(params)
              //console.log(request)
              const {id} = params
              console.log(id)

              if (id) {
                if (confirm("¿Desea proceder con la eliminación?")) {
                    const ps = new ProductService()
                    await ps.delete(id);
                }
              }
              return null
            },
            element: <Navigate to="/product" />
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
