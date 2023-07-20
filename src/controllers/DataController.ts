import { Request, Response } from "express";

export default class DataController {
  sendZeev = async (req: Request, res: Response) => {
    interface data {
      title: string;
      userId: number;
    }

    const { title, userId }: data = req.body;

    const sendZeev = {};

    return res
      .status(201)
      .json({ message: "Zeev enviado com sucesso!", sendZeev });
  };
}
