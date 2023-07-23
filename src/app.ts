import express, { Request, Response } from "express";
import routes from "../routes";
import Sender from "./Sender";

const app = express();
const port = 3000;

const sender = new Sender();

app.use(express.json());
app.use(routes);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.post("/send", async (req: Request, res: Response) => {
  await sender.sendMessage("553192310461@c.us", `Olá! isto é apenas um teste!`);
});
