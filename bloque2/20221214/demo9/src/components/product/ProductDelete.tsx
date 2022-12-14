import React, { SyntheticEvent, useState, useEffect } from "react";
import useInput, { IInput } from "../../hooks/useInput";
import IProduct from "../../model/IProduct";
import ProductService from "../../services/ProductService";

function ProductDelete({id,onDeleted,onClose,}: {id: number;onDeleted: Function;onClose: Function;}) {
  const ps = new ProductService();

  const [product, setProduct] = useState<IProduct|null>();

  useEffect(() => {
    (async () => {
      setProduct(await ps.get(id));
    })();
  }, [id]);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    if (confirm("¿Desea proceder con la eliminación?")) {
      await ps.delete(id);
      onDeleted();
    }
  };

  return (
    <>
      {product && (
        <>
          <h6>Product Delete</h6>
          <div className="row justify-content-end">
            <button
              type="button"
              className="btn-close ale"
              onClick={() => onClose()}
            ></button>
          </div>
          <form onSubmit={(event) => handleSubmit(event)}>
            <div className="mb-3">
              <label htmlFor="iId" className="form-label">
                Id
              </label>
              <input
                type="text"
                className="form-control"
                id="iId"
                readOnly
                value={product?.id}
              />
              <label htmlFor="iName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="iName"
                readOnly
                value={product?.productName}
              />
              <label htmlFor="iUnitPrice" className="form-label">
                Unit Price
              </label>
              <input
                type="number"
                className="form-control"
                id="iUnitPrice"
                readOnly
                value={product?.unitPrice}
              />
              <label htmlFor="iQuantityPerUnit" className="form-label">
                Quantity Per Unit
              </label>
              <input
                type="text"
                className="form-control"
                id="iQuantityPerUnit"
                readOnly
                value={product?.quantityPerUnit}
              />
            </div>
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </form>
        </>
      )}
      {!product && (
        <p className="alert alert-info">No product details to show!</p>
      )}
    </>
  );
}

export default ProductDelete;
