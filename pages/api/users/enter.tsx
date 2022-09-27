import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@libs/server/windHandler";
import client from "@libs/server/client";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email } = req.body;
  const payload = phone ? { phone: +phone } : { email };

  const user = await client.user.upsert({
    where: {
      ...payload,
    },
    create: {
      name: "Anonymous",
      ...payload,
    },
    update: {},
  });

  /*
  if (email) {
    user = await client.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      console.log("Found User.", user);
    }

    if (!user) {
      console.log("Cannot find User. Create New User");

      user = await client.user.create({
        data: {
          name: "Anonymous",
          email,
        },
      });
    }
  } else if (phone) {
    user = await client.user.findUnique({
      where: {
        phone: +phone,
      },
    });

    if (user) {
      console.log("Found User.", user);
    }

    if (!user) {
      console.log("Cannot find User. Create New User");

      user = await client.user.create({
        data: {
          name: "Anonymous",
          phone: +phone,
        },
      });
    }
  }
  */

  console.log(payload);
  return res.status(200).end();
}

export default withHandler("POST", handler);
