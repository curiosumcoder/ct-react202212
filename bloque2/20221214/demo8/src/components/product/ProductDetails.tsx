import { useState, useEffect, MouseEventHandler } from "react";
import IProduct from "../../model/IProduct";
import ProductService from "../../services/ProductService";

function ProductDetails({ id, onClose }: { id: number; onClose: Function }) {
  const ps = new ProductService();

  const [product, setProduct] = useState<IProduct|null>();

  useEffect(() => {
    (async () => {
      setProduct(await ps.get(id));
    })();
  }, [id]);

  return (
    <>
      {product && (
        <>
          <h6>Product Details</h6>
          <div className="row justify-content-end">
            <button type="button" className="btn-close ale" onClick={() => onClose()}></button>
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
