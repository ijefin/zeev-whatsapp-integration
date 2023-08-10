import { Request, Response } from "express";
import { ReceiveZeevDataService } from "../services/ReceiveZeevDataService";

export default class DataController {
  sendZeevData = async (req: Request, res: Response) => {
    const service = new ReceiveZeevDataService();

    const { title, userId } = req.body;

    const data = await service.execute(title, userId);

    try {
      return res.status(201).json({ message: "Enviado com sucesso!" });
    } catch {
      console.log(res.status(501).json({ message: data }));
    }
  };
}
