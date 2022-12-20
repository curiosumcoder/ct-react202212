import Head from 'next/head';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ProductService from '../../services/ProductService';
import IProduct from '../../model/product/IProduct';

export const getServerSideProps = async (context:any) => {
  console.log('Executing Product.Index.getServerSideProps ...');

  const id:any = context.params?.id;

  if (id) {
    const ps = new ProductService();
    const data = await ps.get(id);
    return { props: { data } };
  }

  return { notFound: true };
};

function Details({data}:any) {
  const title = 'Product - Details';
  const router = useRouter()
  const [product, setProduct] = useState<IProduct | null>(data);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>{title}</h2>
      {product && (
        <>
          <h6>Product Details</h6>
          <div className="row justify-content-end">
            <button
              type="button"
              className="btn-close"
              onClick={() => router.back()}
            ></button>
          </div>
          <dl>
            <dt>Id</dt>
            <dd>{product?.id}</dd>
            <dt>Name</dt>
            <dd>{product?.productName}</dd>
            <dt>Unit Price</dt>
            <dd>{product?.unitPrice}</dd>
            <dt>Quantity Per Unit</dt>
            <dd>{product?.quantityPerUnit}</dd>
          </dl>
        </>
      )}
      {!product && (
        <p className="alert alert-info ">No product details to show!</p>
      )}
    </>
  );
}

export default Details;
