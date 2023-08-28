import express from "express";
import routes from "../routes";
import { join } from "path";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes); // Use as rotas definidas no arquivo routes.ts

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
