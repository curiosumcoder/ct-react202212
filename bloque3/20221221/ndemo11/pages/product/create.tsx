import Head from 'next/head';
import Link from 'next/link';
import React, {SyntheticEvent, useRef, useState} from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getBody } from '../../model/tools';
import productSchema from '../../model/product/productSchema';
import * as Yup from 'yup';
import ProductService from '../../services/ProductService';
import IProduct from '../../model/product/IProduct';
import { useRouter } from 'next/router';

export const getServerSideProps: GetServerSideProps<{ data: {} }> = async (
  context
) => {
  console.log('Executing Product.Create.getServerSideProps ...');
  const { req, res } = context;

  if (req.method === 'POST') {
    await getBody(req, res);
    
    const body: IProduct = (req as any).body;
    console.log(`${req.method} ${JSON.stringify(body)}`);

    console.log(`Validating data ...`);
    const isValid = await productSchema.isValid(body);
    if (isValid) {
      console.log(`Saving data ...`);

      const ps = new ProductService();
      await ps.save(body);
    
      // Redirect
      return { redirect: { permanent: false, destination: '/product' } };
    } else {
      console.log(`Getting validating messages ...`);
      let validationMessage = '';
      try {
        const parsedProduct = await productSchema.validate(body);
      } catch (error) {
        const { path, errors } = error as Yup.ValidationError;
        validationMessage = `${path} : ${errors.reduce((a, e) => a + e, '')}`;
      }

      // Ok
      return { props: { validationMessage, data: body } };
    }
  }

  return { props: { data: {} } };
};

function ProductCreate(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const title = 'Product - Create';
  //console.log('Create:', props);
  const {validationMessage, data} = props as any;
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const [isValid, setIsValid] = useState(false);
  let form = useRef<HTMLFormElement>(null);

  const router = useRouter()

  const checkValidation = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    if (target) {
      setIsValid(form.current?.checkValidity() ?? false);
      console.log(target.validity);
      if (!target.validity.valid) {
        target.classList.add("is-invalid");
      } else {
        target.classList.remove("is-invalid");
        target.classList.add("is-valid");

        // Si el input es válido se actualiza la propiedad en el objeto
        setProduct({...product, ...{[target.name]:target.value}})       
      }
    }
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>{title}</h2>
      {validationMessage && <p className='alert alert-warning'>{validationMessage}</p>}
      <div className="col-auto">
        <button className="btn btn-primary mb-3" onClick={()=> router.back()}>
          Back
        </button>
      </div>
      <form method="post" ref={form}>
        <div className="mb-3">
          <label htmlFor="iName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="iName"
            placeholder="Name"
            required
            minLength={2}
            maxLength={32}
            name="productName"
            defaultValue={data.productName}
            onChange={(event) => checkValidation(event)}
          />
          <span id="iNameValidation"></span>
          <label htmlFor="iUnitPrice" className="form-label">
            Unit Price
          </label>
          <input
            type="number"
            className="form-control"
            id="iUnitPrice"
            placeholder="Unit Price"
            required
            min={1}
            name="unitPrice"
            defaultValue={data.unitPrice}
            onChange={(event) => checkValidation(event)}
          />
          <label htmlFor="iQuantityPerUnit" className="form-label">
            Quantity Per Unit
          </label>
          <input
            type="text"
            className="form-control"
            id="iQuantityPerUnit"
            placeholder="Quantity Per Unit"
            required
            minLength={2}
            name="quantityPerUnit"
            defaultValue={data.quantityPerUnit}
            onChange={(event) => checkValidation(event)}
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={!isValid}>
          Save
        </button>
      </form>
    </>
  );
}

export default ProductCreate;
