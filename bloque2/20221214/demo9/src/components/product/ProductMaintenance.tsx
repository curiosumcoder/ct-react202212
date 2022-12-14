import React, { SyntheticEvent, useState } from "react";
import useInput, { IInput } from "../../hooks/useInput";
import useProductSearch from "../../hooks/useProductSearch";
import Actions from "../../model/Actions";
import IProduct from "../../model/IProduct";
import ProductCreate from "./ProductCreate";
import ProductDelete from "./ProductDelete";
import ProductDetails from "./ProductDetails";
import ProductEdit from "./ProductEdit";
import ProductIndex from "./ProductIndex";
import "./ProductMaintenance.css";

function ProductMaintenance() {
  const [productId, setProductId] = useState<number>(0);
  const [action, setAction] = useState<Actions>(Actions.Search);
 
  let currentComponent = <></>;

  switch (action) {
    case Actions.Search:
      currentComponent = <ProductIndex onSetAction={(a:Actions,b:number) => { setAction(a); setProductId(b)}}/>
      break;
    case Actions.Detail:
      currentComponent = (
        <ProductDetails
          id={productId}
          onClose={() => setAction(Actions.Search)}
        />
      );
      break;
    case Actions.Delete:
      currentComponent = (
        <ProductDelete
          id={productId}
          onDeleted={() => {
            setProductId(0);
            setAction(Actions.Search);
          }}
          onClose={() => setAction(Actions.Search)}
        />
      );
      break;
    case Actions.Create:
      currentComponent = (
        <ProductCreate
          onCreated={() => {
            setAction(Actions.Search);
          }}
          onClose={() => setAction(Actions.Search)}
        />
      );
      break;
    case Actions.Edit:
      currentComponent = (
        <ProductEdit
          id={productId}
          onEdited={() => {
            setAction(Actions.Search);
          }}
          onClose={() => setAction(Actions.Search)}
        />
      );
      break;
    default:
      currentComponent = <p>Action type not supported!</p>;
      break;
  }

  return (
    <>
      <h1>Product Maintenance</h1>
      {action}

      {currentComponent}
    </>
  );
}

export default ProductMaintenance;
