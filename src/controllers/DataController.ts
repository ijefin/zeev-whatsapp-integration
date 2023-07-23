import { Request, Response } from "express";
import { ReceiveNewZeev } from "../services/SendZeevService";
import Sender from "../Sender";

export default class DataController {
  sendZeev = async (req: Request, res: Response) => {
    interface data {
      title: string;
      userId: number;
    }
    const sender = new Sender();

    const service = new ReceiveNewZeev();

    const { title, userId }: data = req.body;

    const zeevData = await service.execute(title, userId);

    return res
      .status(201)
      .json({ message: "Zeev enviado com sucesso!", zeevData });
  };
}
