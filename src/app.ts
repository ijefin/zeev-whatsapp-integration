import express from "express";
import routes from "../routes";
import WhatsappService from "./services/WhatsappService";

const sender = new WhatsappService();

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
