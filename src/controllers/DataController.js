"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1; // Os meses são indexados a partir de 0
var year = currentDate.getFullYear();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();
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
    constructor(sender) {
        this.aberturaAdiantamento = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { fornecedor, obra, cnpj, dataEntrega, dataPagamento, valor, numeroDaCompra, empresa, descricaoCompra, motivoDaCompra, } = req.body;
                const message = `🟡 *UM NOVO PEDIDO DE ADIANTAMENTO FINANCEIRO PARA COMPRA DE MATERIAIS FOI CRIADO NO ZEEV*.

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
                yield this.sender.sendText("5531988239681@c.us", message);
                yield this.sender.sendText("5531985527877@c.us", message);
                return res.status(200).json({ message: "Enviado com sucesso!" });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ status: "error", message: error });
            }
        });
        this.aprovacaoAdiantamento = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { fornecedor, obra, cnpj, dataEntrega, dataPagamento, valor, empresa, descricaoCompra, numeroOc, motivoDaCompra, } = req.body;
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
                yield this.sender.sendText("5531992961540@c.us", message);
                yield this.sender.sendText("5531988239681@c.us", message);
                yield this.sender.sendText("5531993619411@c.us", message);
                return res.status(200).json({ message: "Enviado com sucesso!" });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ status: "error", message: error });
            }
        });
        this.notificarAprovacao = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { fornecedor, obra, cnpj, dataEntrega, dataPagamento, valor, empresa, descricaoCompra, numeroOc, } = req.body;
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
                yield this.sender.sendText("5531992961540@c.us", message);
                yield this.sender.sendText("5531988239681@c.us", message);
                yield this.sender.sendText("5531993619411@c.us", message);
                return res.status(200).json({ message: "Enviado com sucesso!" });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ status: "error", message: error });
            }
        });
        this.sender = sender;
    }
}
exports.default = MessageController;
