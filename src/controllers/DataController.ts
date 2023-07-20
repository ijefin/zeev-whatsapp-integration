import { Request, Response } from "express";
import { ReceiveNewZeev } from "../services/SendZeevService";

export default class DataController {
  sendZeev = async (req: Request, res: Response) => {
    interface data {
      title: string;
      userId: number;
    }

    const service = new ReceiveNewZeev();

    const { title, userId }: data = req.body;

    const sendZeev = await service.execute(title, userId);

    // return res
    //   .status(201)
    //   .json({ message: "Zeev enviado com sucesso!", sendZeev });
    return console.log(sendZeev);
  };
}
