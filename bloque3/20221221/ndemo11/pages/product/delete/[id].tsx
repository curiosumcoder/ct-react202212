import React from 'react';
import { getBody } from '../../../model/tools';
import ProductService from '../../../services/ProductService';

export const getServerSideProps = async (context: any) => {
  console.log('Executing Product.Delete.getServerSideProps ...');

  const id: any = context.params?.id;
  console.log('id: ', id);

  const { req, res } = context;
  await getBody(req, res);
  const body: any = (req as any).body;

  if (req.method === 'POST' && id && id === body.id) {
    console.log(`${req.method} ${JSON.stringify(body)}`);

    const ps = new ProductService();
    if (await ps.delete(id)) {
      return {
        redirect: {
          destination: '/product',
          permanent: false,
        },
      };
    }
  }

  return { notFound: true };
};

function ProductDelete() {
  return <></>;
}

export default ProductDelete;
