"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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

// src/app.ts
var import_express2 = __toESM(require("express"));

// routes.ts
var import_express = require("express");
var import_cors = __toESM(require("cors"));

// src/controllers/DataController.ts
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
  constructor(sender2) {
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
    this.sender = sender2;
  }
};
var DataController_default = MessageController;

// src/services/WhatsappService.ts
var import_venom_bot = require("venom-bot");
var WhatsappService = class {
  constructor() {
    this.initialize();
  }
  sendText(to, body) {
    return __async(this, null, function* () {
      yield this.client.sendText(to, body);
    });
  }
  initialize() {
    const qr = (base64QrImg) => {
      base64QrImg;
    };
    const status = (statusSession) => {
      return statusSession;
    };
    const start = (client) => {
      this.client = client;
    };
    (0, import_venom_bot.create)("Zeev Notificator", qr, status).then((client) => start(client)).catch((err) => console.error(err));
  }
};

// routes.ts
var sender = new WhatsappService();
var routes = (0, import_express.Router)();
var allowedOrigins = [
  "https://terrasabpms.zeev.it",
  "https://localhost:3000"
];
var corsOptions = {
  origin: allowedOrigins,
  optionsSuccessStatus: 200
};
routes.use((0, import_cors.default)(corsOptions));
var messageController = new DataController_default(sender);
routes.post("/new-message", messageController.aberturaAdiantamento);
routes.post("/approval-message", messageController.aprovacaoAdiantamento);
routes.post("/notify-approve", messageController.notificarAprovacao);
routes.get("/test", (req, res) => {
  res.send("This is a req test message");
});
var routes_default = routes;

// src/app.ts
var app = (0, import_express2.default)();
var port = 3e3;
app.use(import_express2.default.json());
app.use(import_express2.default.urlencoded({ extended: false }));
app.use(routes_default);
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});