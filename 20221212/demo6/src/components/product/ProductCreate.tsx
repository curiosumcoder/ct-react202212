import React, { useRef, useState, SyntheticEvent } from "react";
import IProduct from "../../model/IProduct";
import ProductService from "../../services/ProductService";

// type productCreateProps = { onCreated: Function}
// function ProductCreate({onCreated}:productCreateProps) {
function ProductCreate({onCreated}:{ onCreated?: Function}) {    
  const iName = useRef<HTMLInputElement>(null);
  const iUnitPrice = useRef<HTMLInputElement>(null);
  const iQuantityPerUnit = useRef<HTMLInputElement>(null);
  const [isValid, setIsValid] = useState(false);
  let form = useRef<HTMLFormElement>(null);;

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const ps = new ProductService();
    const product: IProduct = {
      id: 0,
      productName: iName.current?.value ?? "",
      unitPrice: iUnitPrice.current?.valueAsNumber ?? 0,
      quantityPerUnit: iQuantityPerUnit.current?.value ?? '',
    };

    await ps.save(product);
    onCreated?.();
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
      }
    }
  };

  return (
    <>
      <h5>Product - Create</h5>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="mb-3">
          <label htmlFor="iName" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="iName"
            placeholder="Name" required minLength={2} ref={iName} 
            onChange={(event)=> checkValidation(event)}/>
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </>
  );
}

export default ProductCreate;
