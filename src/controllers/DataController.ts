import { Request, Response } from "express";
import WhatsappService from "../services/WhatsappService";

var currentDate = new Date();
var day: string | number = currentDate.getDate();
var month: string | number = currentDate.getMonth() + 1; // Os meses são indexados a partir de 0
var year: string | number = currentDate.getFullYear();
var hours: string | number = currentDate.getHours();
var minutes: string | number = currentDate.getMinutes();
var seconds: string | number = currentDate.getSeconds();

if (day < 10) {
  day = "0" + day;
}
if (month < 10) {
  month = "0" + month;
}
if (hours < 10) {
  hours = "0" + hours;
}
if (minutes < 10) {
  minutes = "0" + minutes;
}
if (seconds < 10) {
  seconds = "0" + seconds;
}

var formattedDateTime = `Solicitação gerada em: ${day}/${month}/${year} às ${hours}:${minutes}:${seconds}`;

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

${formattedDateTime}
`;

      await this.sender.sendText("5531988239681@c.us", message);
      await this.sender.sendText("5531993678691@c.us", message);

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

      const message = `🔴 *SOLICITAÇÃO DE APROVAÇÃO DE ADIANTAMENTO FINANCEIRO PARA COMPRA DE MATERIAL*.

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
      await this.sender.sendText("5531993678691@c.us", message);

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

      const message = `🟢 *O PAGAMENTO DA OC DE NUMERO ${numeroOc} FOI REALIZADO COM SUCESSO!*.

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
      await this.sender.sendText("5531993678691@c.us", message);

      return res.status(200).json({ message: "Enviado com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: "error", message: error });
    }
  };
}

export default MessageController;
