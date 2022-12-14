import React, { useRef, SyntheticEvent } from "react";
import products from "../../data/products.json";

function ProductSearch({ onResults=f=>f}) {
  const iFilter = useRef();

  // Para cuando el JSON se incluye directamente
  const search = (event: SyntheticEvent) => {
    event.preventDefault();

    const filter = iFilter.current.value;

    if (filter) {
      console.log(`Searching for ${filter} ...`);
      const filtered = products.filter((p) =>
        p.productName.toLowerCase().includes(filter)
      );
      //console.log(filtered)
      onResults(filtered);
    }
  };

  return (
    <div className="mb-3">
      <h6>Product Search</h6>
      <form className="row g-3" onSubmit={(event) => search(event)}>
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
