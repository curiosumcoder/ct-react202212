import React, { useState, useRef, SyntheticEvent, useEffect } from "react";
import IProduct from "../../model/IProduct";
import ProductService from "../../services/ProductService";

function ProductSearch({ onResults }: { onResults: Function }) {
  const [products, setProducts] = useState(Array<IProduct>());
  const iFilter = useRef<HTMLInputElement>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isError, setIsError] = useState(false);

  const searchAsync = async (event: SyntheticEvent) => {
    event.preventDefault();

    const filter = iFilter.current?.value ?? "";

    if (filter) {
      console.log(`Searching REST service for ${filter} ...`);

      const ps = new ProductService();

      setIsProcessing(true);
      setIsError(false);

      try {
        let filtered = await ps.search(filter);
        onResults(filtered);        
      } catch (error) {
        setIsError(true);
      }
      setIsProcessing(false);
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
        <button type="submit" className="btn btn-primary btn-sm">
          Search
        </button>
      </form>
      {isProcessing && <div className="alert alert-secondary">Processing 👾...</div>}
      {isError && <div className="alert alert-warning">Something went wrong 😮...</div>}
    </div>
  );
}

export default ProductSearch;
