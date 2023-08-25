import { Request, Response } from "express";
import WhatsappService from "../services/WhatsappService";

class MessageController {
  private sender: WhatsappService;

  constructor(sender: WhatsappService) {
    this.sender = sender;
  }

  aberturaAdiantamento = async (req: Request, res: Response) => {
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
        descricaoCompra,
        motivoDaCompra,
      } = req.body;

      const message = `🟡 *UM NOVO PEDIDO DE ADIANTAMENTO FINANCEIRO PARA COMPRA DE MATERIAIS FOI CRIADO NO ZEEV* 🟡.

ℹ️ Motivo da Compra: ${motivoDaCompra}
🚛 *Fornecedor:* ${fornecedor}
🏬 *CNPJ:* ${cnpj}
🚜 *Obra destino:* ${obra}
📆 *Data de entrega:* ${dataEntrega}
🗓️ *Data de pagamento:* ${dataPagamento}
💰 *Valor*: ${valor}
🆔 *N da requisição de compra:* ${numeroDaCompra}
🏬 *Empresa:* ${empresa}
ℹ️ *Descrição da compra:* ${descricaoCompra}

Em instantes, você sera notificado para realizar a *APROVAÇÃO*
`;

      await this.sender.sendText("5531988239681@c.us", message);
      await this.sender.sendText("5531985527877@c.us", message);

      return res.status(200).json({ message: "Enviado com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: "error", message: error });
    }
  };

  aprovacaoAdiantamento = async (req: Request, res: Response) => {
    try {
      const {
        fornecedor,
        obra,
        cnpj,
        dataEntrega,
        dataPagamento,
        valor,
        empresa,
        descricaoCompra,
        numeroOc,
        motivoDaCompra,
      } = req.body;

      const message = `🔴*SOLICITAÇÃO DE APROVAÇÃO DE ADIANTAMENTO FINACEIRO PARA COMPRA DE MATERIAL*.🔴

ℹ️ *Motivo da Compra:* ${motivoDaCompra}
🚛 *Fornecedor:* ${fornecedor}
🏬 *CNPJ:* ${cnpj}
🚜 *Obra destino:* ${obra}
📆 *Data de entrega:* ${dataEntrega}
🗓️ *Data de pagamento:* ${dataPagamento}
💰 *Valor*: ${valor}
🏬 *Empresa:* ${empresa}
ℹ️ *Descrição da compra:* ${descricaoCompra}

⚠️ *ESTA SOLICITAÇÃO ESTÁ PENDENTE DE APROVAÇÃO. FAVOR REALIZA-LA O MAIS BREVE POSSÍVEL* 

*🆔 NUMERO DA OC: _${numeroOc}_*
`;

      await this.sender.sendText("5531988239681@c.us", message);
      await this.sender.sendText("5531985527877@c.us", message);

      return res.status(200).json({ message: "Enviado com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: "error", message: error });
    }
  };

  notificarAprovacao = async (req: Request, res: Response) => {
    try {
      const {
        fornecedor,
        obra,
        cnpj,
        dataEntrega,
        dataPagamento,
        valor,
        empresa,
        descricaoCompra,
        numeroOc,
      } = req.body;

      const message = `🟢*O PAGAMENTO DA OC DE NUMERO ${numeroOc} FOI REALIZADO COM SUCESSO!*🟢.

🚛 *Fornecedor:* ${fornecedor}
🏬 *CNPJ:* ${cnpj}
🚜 *Obra destino:* ${obra}
📆 *Data de entrega:* ${dataEntrega}
🗓️ *Data de pagamento:* ${dataPagamento}
💰 *Valor*: ${valor}
🏬 *Empresa:* ${empresa}
ℹ️ *Descrição da compra:* ${descricaoCompra}
`;

      await this.sender.sendText("5531988239681@c.us", message);
      await this.sender.sendText("5531985527877@c.us", message);

      return res.status(200).json({ message: "Enviado com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: "error", message: error });
    }
  };
}

export default MessageController;
