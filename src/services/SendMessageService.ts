import express, { Request, Response } from "express";
import Sender from "../Sender";

export class SendMessage {
  async execute(title: string, userId: number) {
    const app = express();
    const sender = new Sender();

    const message = app.post("/send", async (req: Request, res: Response) => {
      await sender
        .sendMessage(
          "553192310461@c.us",
          `Olá! ${title} é apenas um ${userId}!`
        )
        .then(() => console.log("Enviado com sucesso!"))
        .catch((err) => console.error(err));
    });

    return message;
  }
}
