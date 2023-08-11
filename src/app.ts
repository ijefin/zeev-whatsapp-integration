import express, { Request, Response } from "express";
import routes from "../routes";
import WhatsappService from "./services/WhatsappService";

const sender = new WhatsappService();

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(routes);

app.get("/status", (req: Request, res: Response) => {});

app.post("/new-message", async (req: Request, res: Response) => {
  const { title, userId } = req.body;
  const message = `${title} *${userId}*`;

  await sender.sendText("553188253228@c.us", message).then(() => {
    console.log("Enviado com sucesso!");
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
