import { Request, Response } from "express";
import WhatsappService from "../services/WhatsappService";

class MessageController {
  private sender: WhatsappService;

  constructor(sender: WhatsappService) {
    this.sender = sender;
  }

  newMessage = async (req: Request, res: Response) => {
    try {
      const { title, userId } = req.body;
      const message = `${title} *${userId}*`;

      await this.sender.sendText("553192310461@c.us", message);

      return res.status(200).json({ message: "Enviado com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: "error", message: error });
    }
  };
}

export default MessageController;
