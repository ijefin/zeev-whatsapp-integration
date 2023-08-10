import express, { Request, Response } from "express";
import Sender from "../Sender";

export class ReceiveNewZeev {
  async execute(title: string, userId: number) {
    const teste = { title, userId };

    const app = express();
    const sender = new Sender();

    app.post("/send", async (req: Request, res: Response) => {
      await sender.sendMessage(
        "553192310461@c.us",
        `Olá! ${title} é apenas um ${userId}!`
      );
    });

    return teste;
  }
}
