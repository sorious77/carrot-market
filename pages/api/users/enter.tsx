import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import twilio from "twilio";
import smtpTransport from "../email";

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : email ? { email } : null;

  if (!user) {
    return res.status(400).json({ ok: false });
  }

  const payload = Math.floor(100000 + Math.random() * 900000) + "";

  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });

  if (phone) {
    await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MSID,
      to: process.env.MY_PHONE!,
      body: `Your Login token is ${payload}`,
    });
  } else if (email) {
    const mailOptions = {
      from: process.env.MAIL_ID,
      to: email,
      subject: "Carrot Market Authentication Mail",
      text: `Authentication Code : ${payload}`,
    };

    console.log(mailOptions);

    const result = await smtpTransport.sendMail(
      mailOptions,
      (error, response) => {
        if (error) {
          console.log(error);
          return null;
        } else {
          console.log(response);
          return null;
        }
      }
    );

    smtpTransport.close();
    console.log(result);
  }

  return res.json({ ok: true });
}

export default withHandler("POST", handler);
