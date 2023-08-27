import express from "express";
import routes from "../routes";
import puppeteer from "puppeteer";

const app = express();
const port = 3000;

const browser = puppeteer.launch({
  executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes); // Use as rotas definidas no arquivo routes.ts

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
