import React, {useState} from 'react'
import IProduct from '../../model/product/IProduct'
import ProductService from "../../services/ProductService";

function ProductIndex() {
    const [data, setData] = useState<Array<IProduct>>()
  return (
    <>
          <input
        className="form-control"
        type="search"
        placeholder="Type here ..."
        onChange={async (event) => {
            const ps = new ProductService()
            const result = await ps.search(event.target.value ?? '')
            console.log(result)
            setData(result)
        }}
      />
      {(data as Array<IProduct>) && data.length > 0 && (
        <div className="mb-3">
          <h6>Product List</h6>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Unit Price</th>
                <th>Quantity Per Unit</th>
                <th>Category</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((p: IProduct) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.productName}</td>
                  <td>{p.unitPrice}</td>
                  <td>{p.quantityPerUnit}</td>
                  <td>{p.category?.categoryName ?? ""}</td>
                  <td>
                    <a href={`/product/${p.id}`}>
                        <i className="bi bi-x-lg" title="Delete"></i>
                    </a>
                  </td>
                  <td>
                    <a href={`/product/edit/${p.id}`}>
                      <i className="bi bi-file-text-fill" title="Edit"></i>
                    </a>
                  </td>
                  <td>
                    <a href={`/product/${p.id}`}>
                      <i
                        className="bi bi-arrow-left-circle-fill"
                        title="Detail"
                      ></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  )
}

export default ProductIndex