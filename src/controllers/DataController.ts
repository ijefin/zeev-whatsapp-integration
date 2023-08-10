import { Request, Response } from "express";
import { ReceiveZeevDataService } from "../services/ReceiveZeevDataService";
import { SendMessage } from "../services/SendMessageService";

export default class DataController {
  sendZeev = async (req: Request, res: Response) => {
    interface data {
      title: string;
      userId: number;
    }

    const service = new ReceiveZeevDataService();
    const sendService = new SendMessage();

    const { title, userId }: data = req.body;

    const zeevData = await service.execute(title, userId);

    try {
      sendService.execute(title, userId);
    } catch (error) {
      console.log("Consegui não..");
    }

    return res
      .status(201)
      .json({ message: "Zeev Data enviado com sucesso!", zeevData });
  };
}
