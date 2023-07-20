import express, { Request, Response } from "express";
import Sender from "./Sender";
import routes from "../routes";

// const sender = new Sender();

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// app.post("/send", async (req: Request, res: Response) => {
//   try {
//     sender.sendMessage("5531993678691@c.us", "Olá, isto é um teste!");
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ status: "error", message: error });
//   }
// });
