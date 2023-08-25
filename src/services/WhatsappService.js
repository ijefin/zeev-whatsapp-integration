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
const venom_bot_1 = require("venom-bot");
class WhatsappService {
    constructor() {
        this.initialize();
    }
    sendText(to, body) {
        return __awaiter(this, void 0, void 0, function* () {
            //553192310461@c.us
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
            // this.sendText( "553192310461@c.us",
            // "Olá Roberto! O código de confirmação é: *512455*")
        };
        (0, venom_bot_1.create)("Zeev Notificator", qr, status)
            .then((client) => start(client))
            .catch((err) => console.error(err));
    }
}
exports.default = WhatsappService;
