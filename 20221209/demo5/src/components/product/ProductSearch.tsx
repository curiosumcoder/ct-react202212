import React, { useState, useRef, SyntheticEvent } from "react";
import IProduct from "../../model/IProduct";

function ProductSearch({ onResults=f=>f}) {
  const [products, setProducts] = useState(Array<IProduct>());
  const iFilter = useRef();

  const searchAsync = async (event: SyntheticEvent) => {
    event.preventDefault();

    const filter = iFilter.current.value;

    if (filter) {
      console.log(`Searching REST service for ${filter} ...`);

      let url = `http://localhost:3000/products?productName_like=${filter}`;
      // GET http://localhost:3000/products?productName_like=queso
      let response = await fetch(url);

      let filtered = null;
      if (response.ok) {
        filtered = await response.json();
        //console.log(filtered)
        onResults(filtered);
      }
    }
  };

  return (
    <div className="mb-3">
      <h6>Product Search</h6>
      <form className="row g-3" onSubmit={(event) => searchAsync(event)}>
        <input
          type="search"
          className="form-control"
          placeholder="Search here ..."
          ref={iFilter}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
}

export default ProductSearch;
