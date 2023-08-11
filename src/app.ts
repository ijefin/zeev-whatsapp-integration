import express from "express";
import WhatsappService from "./services/WhatsappService";
import DataController from "./controllers/DataController";

const sender = new WhatsappService();

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const messageController = new DataController(sender);

app.get("/status", (req, res) => {});

app.post("/new-message", messageController.newMessage);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
