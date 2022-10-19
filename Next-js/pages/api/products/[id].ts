import {NextApiRequest, NextApiResponse} from "next";

import DB from "@database";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {id} = req.query;

  const db = new DB();
  const product = await db.getById(id as string);

  if (!product) {
    res.status(404).json({message: "Product not found"});
    return;
  }

  res.status(200).json(product);
}
