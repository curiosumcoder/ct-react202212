import Head from 'next/head';
import React from 'react';

function ProductEdit() {
  const title = 'Product - Edit';
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>{title}</h2>
    </>
  );
}

export default ProductEdit;