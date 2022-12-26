import type { NextApiRequest, NextApiResponse } from 'next';
import IProduct from '../../model/product/IProduct';
import sqlite3 from 'sqlite3';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<IProduct>>
) {
  const {method, body} = req;

  switch (method) {
    case 'POST':
      // Save data on database
      console.log('Saving data ', body)
      res.status(200).end();
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
