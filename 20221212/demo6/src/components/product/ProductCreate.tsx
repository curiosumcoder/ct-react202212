import React, { useRef } from "react";

function ProductCreate() {
  const iName = useRef<HTMLInputElement>(null);

  return (
    <>
      <h5>Product - Create</h5>
      <form>
        <label htmlFor="iName" className="form-label">
          Name
        </label>
        <input type="text" className="form-control"id="iName"
          placeholder="Name" required minLength={2} ref={iName} />
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </>
  );
}

export default ProductCreate;
