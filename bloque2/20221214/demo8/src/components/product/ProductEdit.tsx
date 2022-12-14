import React, { SyntheticEvent, useState, useRef, useEffect } from "react";
import IProduct from "../../model/IProduct";
import ProductService from "../../services/ProductService";

function ProductEdit({
  id,
  onEdited,
  onClose,
}: {
  id: number;
  onEdited: Function;
  onClose: Function;
}) {
  const ps = new ProductService();
  const [product, setProduct] = useState<IProduct | null>({} as IProduct);
  const [isValid, setIsValid] = useState(false);
  let form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    (async () => {
      setProduct(await ps.get(id));
    })();
  }, [id]);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    if (product) {
      await ps.edit(product?.id, product);
      onEdited();
    }
  };

  const checkValidation = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    if (target) {
      setIsValid(form.current?.checkValidity() ?? false);
      console.log(target.validity);
      if (!target.validity.valid) {
        target.classList.add("is-invalid");
      } else {
        target.classList.remove("is-invalid");
        target.classList.add("is-valid");

        // Si el input es válido se actualiza la propiedad en el objeto
        if (product) {
          setProduct({ ...product, ...{ [target.name]: target.value } });
        }
      }
    }
  };

  return (
    <>
      <h6>Product Create</h6>
      {/* {JSON.stringify(product)} */}
      <div className="row justify-content-end">
        <button
          type="button"
          className="btn-close ale"
          onClick={() => onClose()}
        ></button>
      </div>
      <form onSubmit={(event) => handleSubmit(event)} ref={form}>
        <div className="mb-3">
          <label htmlFor="iName" className="form-label">
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
            placeholder="Name"
            required
            minLength={2}
            maxLength={32}
            name="productName"
            value={product?.productName}
            onChange={(event) => checkValidation(event)}
          />
          <span id="iNameValidation"></span>
          <label htmlFor="iUnitPrice" className="form-label">
            Unit Price
          </label>
          <input
            type="number"
            className="form-control"
            id="iUnitPrice"
            placeholder="Unit Price"
            required
            min={1}
            name="unitPrice"
            value={product?.unitPrice}
            onChange={(event) => checkValidation(event)}
          />
          <label htmlFor="iQuantityPerUnit" className="form-label">
            Quantity Per Unit
          </label>
          <input
            type="text"
            className="form-control"
            id="iQuantityPerUnit"
            placeholder="Quantity Per Unit"
            required
            minLength={2}
            name="quantityPerUnit"
            value={product?.quantityPerUnit}
            onChange={(event) => checkValidation(event)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </>
  );
}

export default ProductEdit;
