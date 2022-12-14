import React, { SyntheticEvent } from 'react'
import useInput, { IInput } from '../../hooks/useInput';
import useProductSearch from '../../hooks/useProductSearch';
import Actions from '../../model/Actions';
import IProduct from '../../model/IProduct';

function ProductIndex({onSetAction}:{onSetAction:Function}) {
    const [filterProps, setFilter] = useInput("");
    const [{ data, isProcessing, isError }, doSearch] = useProductSearch();
    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        doSearch((filterProps as IInput<string>)?.value);
      };    

  return (
    <>
    <div className="col-auto">
      <button
        className="btn btn-primary mb-3"
        onClick={() => onSetAction(Actions.Create)}>
        Create
      </button>
    </div>
    <div className="mb-3">
      <h6>Product Search</h6>
      <form className="row g-3" onSubmit={handleSubmit}>
        <input
          type="search"
          className="form-control"
          placeholder="Type filter here ..."
          {...filterProps}
        />
      </form>
    </div>
    {isProcessing && (
      <div className="alert alert-secondary">Processing 👾...</div>
    )}
    {isError && (
      <div className="alert alert-warning">
        Something went wrong 😮... Is <strong>live-server</strong>{" "}
        running?
      </div>
    )}

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
                  <i
                    className="bi bi-x-lg"
                    title="Delete"
                    onClick={() => {                      
                      onSetAction(Actions.Delete, p.id);
                    }}
                  ></i>
                </td>
                <td>
                  <i
                    className="bi bi-file-text-fill"
                    title="Edit"
                    onClick={() => {
                      onSetAction(Actions.Edit, p.id)
                    }}
                  ></i>
                </td>
                <td>
                  <i
                    className="bi bi-arrow-left-circle-fill"
                    title="Detail"
                    onClick={() => {
                      onSetAction(Actions.Detail, p.id);
                    }}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
    {(data as Array<IProduct>) && data.length === 0 && (
      <p className="alert alert-info ">No data to show!</p>
    )}
  </>
  )
}

export default ProductIndex