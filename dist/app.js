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
  sender;
  constructor(sender2) {
    this.sender = sender2;
  }
  aberturaAdiantamento = async (req, res) => {
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
      await this.sender.sendText("5531988239681@c.us", message);
      return res.status(200).json({ message: "Enviado com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: "error", message: error });
    }
  };
  aprovacaoAdiantamento = async (req, res) => {
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
      await this.sender.sendText("5531988239681@c.us", message);
      return res.status(200).json({ message: "Enviado com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: "error", message: error });
    }
  };
  notificarAprovacao = async (req, res) => {
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
      await this.sender.sendText("5531988239681@c.us", message);
      return res.status(200).json({ message: "Enviado com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: "error", message: error });
    }
  };
};
var DataController_default = MessageController;

// src/services/WhatsappService.ts
var import_puppeteer = __toESM(require("puppeteer"));
var import_venom_bot = require("venom-bot");
var WhatsappService = class {
  client;
  browser;
  constructor() {
    this.initialize();
  }
  async sendText(to, body) {
    await this.client.sendText(to, body);
  }
  async initialize() {
    try {
      this.browser = await import_puppeteer.default.launch({
        // executablePath: "/usr/local/bin/chromium-browser", // Atualize com o caminho correto
        args: ["--no-sandbox", "--disable-setuid-sandbox"]
      });
      const qr = (base64QrImg) => {
      };
      const status = (statusSession) => {
        return statusSession;
      };
      const start = (client) => {
        this.client = client;
      };
      (0, import_venom_bot.create)("Zeev Notificator", qr, status, {
        browser: this.browser
        // Passa o navegador Puppeteer
      }).then((client) => start(client)).catch((err) => console.log(err));
    } catch (error) {
      console.error("Ocorreu um erro ao iniciar o bot:", error);
    }
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
