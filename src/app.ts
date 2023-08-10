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
  try {
    const { title, userId } = req.body;
    const message = `${title} *${userId}*`;

    await sender.sendText("553188253228@c.us", message);

    return res.status(200).json("Done!");

  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: error });
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
