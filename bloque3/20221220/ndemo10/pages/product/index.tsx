import Head from "next/head";
import Link from "next/link";
import React from "react";

function Index() {
    const title = 'Product - Index'
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
    </>
  );
}

export default Index;
