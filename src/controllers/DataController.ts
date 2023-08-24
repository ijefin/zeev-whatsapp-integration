import { Request, Response } from "express";
import WhatsappService from "../services/WhatsappService";

class MessageController {
  private sender: WhatsappService;

  constructor(sender: WhatsappService) {
    this.sender = sender;
  }

  newMessage = async (req: Request, res: Response) => {
    try {
      const {
        fornecedor,
        obra,
        cnpj,
        dataEntrega,
        dataPagamento,
        valor,
        numeroDaCompra,
        empresa,
      } = req.body;

      const message = `Um novo pedido de adiantamento financeiro para *COMPRA DE MATERIAIS* foi criado.
   
*Fornecedor:* ${fornecedor};
*CNPJ:* ${cnpj};
*Obra destino:* ${obra};
*Data de entrega:* ${dataEntrega};
*Data de pagamento:* ${dataPagamento};
*Valor*: ${valor};
*N da compra:* ${numeroDaCompra};
*Empresa:* ${empresa}`;

      await this.sender.sendText("5531988239681@c.us", message);

      return res.status(200).json({ message: "Enviado com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: "error", message: error });
    }
  };
}

export default MessageController;
