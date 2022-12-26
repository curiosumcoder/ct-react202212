import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import ProductService from '../../services/ProductService';
import IProduct from '../../model/product/IProduct';

export const getServerSideProps: GetServerSideProps<{ data: {} }> = async (
  context
) => {
  console.log('Executing Product.Index.getServerSideProps ...');

  const ps = new ProductService();
  let data = []
  try {
    data = await ps.search('');    
  } catch (error) {
    console.error('Error al llamar al servicio en json-server')
    return { notFound: true };
  }

  return { props: { data } };
};

function ProductIndex({ data }: any) {
  const title = 'Product - Index';
  console.log(data);

  const __html = "DEMO"

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>{title}</h2>
      <div className="col-auto">
        <Link className="btn btn-primary mb-3" href="/product/create">
          Create
        </Link>
      </div>
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
                    <Link href={`/product/${p.id}`}>
                        <i className="bi bi-x-lg" title="Delete"></i>
                    </Link>
                  </td>
                  <td>
                    <Link href={`/product/edit/${p.id}`}>
                      <i className="bi bi-file-text-fill" title="Edit"></i>
                    </Link>
                  </td>
                  <td>
                    <Link href={`/product/${p.id}`}>
                      <i
                        className="bi bi-arrow-left-circle-fill"
                        title="Detail"
                      ></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default ProductIndex;
