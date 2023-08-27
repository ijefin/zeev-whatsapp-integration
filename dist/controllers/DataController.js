"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/controllers/DataController.ts
var DataController_exports = {};
__export(DataController_exports, {
  default: () => DataController_default
});
module.exports = __toCommonJS(DataController_exports);
var currentDate = /* @__PURE__ */ new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
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
var formattedDateTime = `Solicita\xE7\xE3o gerada em: ${day}/${month}/${year} \xE0s ${hours}:${minutes}:${seconds}`;
var MessageController = class {
  constructor(sender) {
    this.aberturaAdiantamento = (req, res) => __async(this, null, function* () {
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
          motivoDaCompra
        } = req.body;
        const message = `\u{1F7E1} *UM NOVO PEDIDO DE ADIANTAMENTO FINANCEIRO PARA COMPRA DE MATERIAIS FOI CRIADO NO ZEEV*.

\u2139\uFE0F Motivo da Compra: ${motivoDaCompra}
\u{1F69B} *Fornecedor:* ${fornecedor}
\u{1F3EC} *CNPJ:* ${cnpj}
\u{1F69C} *Obra destino:* ${obra}
\u{1F4C6} *Data de entrega:* ${dataEntrega}
\u{1F5D3}\uFE0F *Data de pagamento:* ${dataPagamento}
\u{1F4B0} *Valor*: ${valor}
\u{1F194} *N da requisi\xE7\xE3o de compra:* ${numeroDaCompra}
\u{1F3EC} *Empresa:* ${empresa}
\u2139\uFE0F *Descri\xE7\xE3o da compra:* ${descricaoCompra}

Em instantes, voc\xEA sera notificado para realizar a *APROVA\xC7\xC3O*

${formattedDateTime}
`;
        yield this.sender.sendText("5531988239681@c.us", message);
        yield this.sender.sendText("5531985527877@c.us", message);
        return res.status(200).json({ message: "Enviado com sucesso!" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: error });
      }
    });
    this.aprovacaoAdiantamento = (req, res) => __async(this, null, function* () {
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
          motivoDaCompra
        } = req.body;
        const message = `\u{1F534} *SOLICITA\xC7\xC3O DE APROVA\xC7\xC3O DE ADIANTAMENTO FINANCEIRO PARA COMPRA DE MATERIAL*.

\u2139\uFE0F *Motivo da Compra:* ${motivoDaCompra}
\u{1F69B} *Fornecedor:* ${fornecedor}
\u{1F3EC} *CNPJ:* ${cnpj}
\u{1F69C} *Obra destino:* ${obra}
\u{1F4C6} *Data de entrega:* ${dataEntrega}
\u{1F5D3}\uFE0F *Data de pagamento:* ${dataPagamento}
\u{1F4B0} *Valor*: ${valor}
\u{1F3EC} *Empresa:* ${empresa}
\u2139\uFE0F *Descri\xE7\xE3o da compra:* ${descricaoCompra}

\u26A0\uFE0F *ESTA SOLICITA\xC7\xC3O EST\xC1 PENDENTE DE APROVA\xC7\xC3O. FAVOR REALIZA-LA O MAIS BREVE POSS\xCDVEL* 

*\u{1F194} NUMERO DA OC: _${numeroOc}_*
`;
        yield this.sender.sendText("5531992961540@c.us", message);
        yield this.sender.sendText("5531988239681@c.us", message);
        yield this.sender.sendText("5531993619411@c.us", message);
        return res.status(200).json({ message: "Enviado com sucesso!" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: error });
      }
    });
    this.notificarAprovacao = (req, res) => __async(this, null, function* () {
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
          numeroOc
        } = req.body;
        const message = `\u{1F7E2} *O PAGAMENTO DA OC DE NUMERO ${numeroOc} FOI REALIZADO COM SUCESSO!*.

\u{1F69B} *Fornecedor:* ${fornecedor}
\u{1F3EC} *CNPJ:* ${cnpj}
\u{1F69C} *Obra destino:* ${obra}
\u{1F4C6} *Data de entrega:* ${dataEntrega}
\u{1F5D3}\uFE0F *Data de pagamento:* ${dataPagamento}
\u{1F4B0} *Valor*: ${valor}
\u{1F3EC} *Empresa:* ${empresa}
\u2139\uFE0F *Descri\xE7\xE3o da compra:* ${descricaoCompra}
`;
        yield this.sender.sendText("5531992961540@c.us", message);
        yield this.sender.sendText("5531988239681@c.us", message);
        yield this.sender.sendText("5531993619411@c.us", message);
        return res.status(200).json({ message: "Enviado com sucesso!" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: error });
      }
    });
    this.sender = sender;
  }
};
var DataController_default = MessageController;
