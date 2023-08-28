import { Router } from "express";
import cors from "cors";
import DataController from "./src/controllers/DataController";
import WhatsappService from "./src/services/WhatsappService";

const sender = new WhatsappService();

const routes = Router();

const allowedOrigins = [
  "https://terrasabpms.zeev.it",
  "https://localhost:3000",
];

var corsOptions = {
  origin: allowedOrigins,
  optionsSuccessStatus: 200,
};

//allowing cors origin
routes.use(cors(corsOptions));

const messageController = new DataController(sender);

routes.post("/new-message", messageController.aberturaAdiantamento);
routes.post("/approval-message", messageController.aprovacaoAdiantamento);
routes.post("/notify-approve", messageController.notificarAprovacao);

routes.get("/test", (req, res) => {
  res.send("This is a req test message");
});
// routes.post("/new-task");
// routes.put("/update-task/:id");
// routes.delete("/delete-task/:id");

export default routes;
