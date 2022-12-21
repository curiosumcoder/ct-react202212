
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  data: string;
};

// https://nodejs.org/api/http.html#class-httpincomingmessage
export default async function handler(req: NextApiRequest,res: NextApiResponse<ResponseData>) {
  const body = req.body;
  //console.log("req: ", req);
  console.log(new Date());
  console.log("body: ", body);

  res.redirect('/product')
}