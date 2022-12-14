import { useState, useEffect, MouseEventHandler } from "react";
import IProduct from "../../model/IProduct";
import ProductService from "../../services/ProductService";
import { useNavigate, useLoaderData, useParams } from "react-router-dom";

function ProductDetails() {
  const ps = new ProductService();
  const p = useLoaderData() as IProduct // Se debe contar con el loader correspondiente
  const [product, setProduct] = useState<IProduct|null>(p);  
  const navigate = useNavigate(); 
  
  let parametros = useParams();
  let {id} = useParams()

  return (
    <>
      {JSON.stringify(parametros)}
      {product && (
        <>
          <h6>Product Details</h6>
          <div className="row justify-content-end">
            <button type="button" className="btn-close ale" onClick={() => navigate(-1)}></button>
          </div>
          <dl>
            <dt>Id</dt>
            <dd>{product?.id}</dd>
            <dt>Name</dt>
            <dd>{product?.productName}</dd>
            <dt>Unit Price</dt>
            <dd>{product?.unitPrice}</dd>
            <dt>Quantity Per Unit</dt>
            <dd>{product?.quantityPerUnit}</dd>
          </dl>
        </>
      )}
      {!product && (
        <p className="alert alert-info ">No product details to show!</p>
      )}
    </>
  );
}

export default ProductDetails;
