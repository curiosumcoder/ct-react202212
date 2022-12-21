import type { NextApiRequest, NextApiResponse } from 'next';
import IProduct from '../../../model/product/IProduct';
import sqlite3 from 'sqlite3';
import { constants } from 'zlib';

const queryDB = (filter: string) =>
  new Promise<Array<IProduct>>((resolve, reject) => {
    let result = Array<IProduct>();

    let db = new sqlite3.Database('./data/Northwind.db');

    let sql = `SELECT ProductID, ProductName, SupplierID, CategoryID, QuantityPerUnit, UnitPrice, UnitsInStock, UnitsOnOrder, ReorderLevel, Discontinued
FROM Products WHERE ProductName LIKE ?;`;

    filter = `%${filter}%`;
    console.log(`Quering with filter ${filter} ...`);
    db.all(sql, [filter], (err: any, rows: any) => {
      if (err) {
        reject(err);
      }

      rows.forEach((row: any) => {
        const {
          ProductID: id,
          ProductName: productName,
          UnitPrice: unitPrice,
          QuantityPerUnit: quantityPerUnit,
        } = row;
        const p = { id, productName, unitPrice, quantityPerUnit, quantity: 1 };
        result = [p, ...result];
      });

      resolve(result);
    });

    // close the database connection
    db.close();
  });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<IProduct>>
) {
  // let {
  //   query: { filter },
  //   method,
  // } = req;

  let {query: { filter }} = req;
  const {method} = req;

  filter = filter as string;

  switch (method) {
    case 'GET':
      // Get data from your database
      if (filter) {
        console.log(`Searching for ${filter} ...`);
        const data = await queryDB(filter);
        console.log(data);
        if (data.length > 0) {
          res.status(200).json(data);
        } else {
          res.status(404).end();
        }
      } else {
        res.status(200);
      }
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
