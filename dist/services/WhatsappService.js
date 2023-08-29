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

// src/services/WhatsappService.ts
var WhatsappService_exports = {};
__export(WhatsappService_exports, {
  default: () => WhatsappService
});
module.exports = __toCommonJS(WhatsappService_exports);
var import_venom_bot = require("venom-bot");
var WhatsappService = class {
  client;
  constructor() {
    this.initialize();
  }
  async sendText(to, body) {
    await this.client.sendText(to, body);
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
    (0, import_venom_bot.create)("Zeev Notificator", qr, status).then((client) => start(client)).catch((err) => {
      console.log(err);
      return;
    });
  }
};
