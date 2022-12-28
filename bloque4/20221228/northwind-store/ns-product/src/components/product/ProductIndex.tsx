import React, { useState } from 'react';
import IProduct from 'ns-model';
import ProductService from '../../services/ProductService';

function ProductIndex({ emitter }) {
  const [data, setData] = useState<Array<IProduct>>();
  console.log('ProductIndex.emitter: ', emitter);
  return (
    <>
      <input
        className="form-control"
        type="search"
        placeholder="Type here ..."
        onChange={async (event) => {
          const ps = new ProductService();
          const result = await ps.search(event.target.value ?? '');
          console.log(result);
          setData(result);
        }}
      />
      {data && (data as Array<IProduct>) && data.length > 0 && (
        <ul className="list-group list-group-flush">
          {data.map((p: IProduct) => (
            <li className="list-group-item" key={p.id}>
              <p>
                <strong>
                  Id: {p.id}, {p.productName}, {p.unitPrice}
                </strong>
                <br />
                {p.category?.categoryName}
                <br />
                {emitter && (
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => emitter.emit('addToCart', p)}
                  >
                    Add to Cart
                  </button>
                )}
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ProductIndex;
