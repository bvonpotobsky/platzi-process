import {NextApiRequest, NextApiResponse} from "next";

import DB from "@database";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const db = new DB();

  const allAvos = await db.getAll();

  res.status(200).json(allAvos);
}
