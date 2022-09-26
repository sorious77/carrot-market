import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../libs/server/windHandler";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.json({ ok: true });
  console.log(req.body);
  return res.status(200).end();
}

export default withHandler("POST", handler);
