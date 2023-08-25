"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cors_1 = __importDefault(require("cors"));
const DataController_1 = __importDefault(require("./src/controllers/DataController"));
const WhatsappService_1 = __importDefault(require("./src/services/WhatsappService"));
const sender = new WhatsappService_1.default();
const routes = (0, express_1.Router)();
const allowedOrigins = [
    "https://terrasabpms.zeev.it",
    "https://localhost:3000",
];
var corsOptions = {
    origin: allowedOrigins,
    optionsSuccessStatus: 200,
};
//allowing cors origin
routes.use((0, cors_1.default)(corsOptions));
const messageController = new DataController_1.default(sender);
routes.post("/new-message", messageController.aberturaAdiantamento);
routes.post("/approval-message", messageController.aprovacaoAdiantamento);
routes.post("/notify-approve", messageController.notificarAprovacao);
routes.get("/test", (req, res) => {
    res.send("This is a req test message");
});
// routes.post("/new-task");
// routes.put("/update-task/:id");
// routes.delete("/delete-task/:id");
exports.default = routes;
