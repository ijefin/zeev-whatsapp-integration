import { Router } from "express";
import cors from "cors";
import DataController from "./src/controllers/DataController";

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

routes.post("/new-zeev", new DataController().sendZeev);
// routes.post("/new-task");
// routes.put("/update-task/:id");
// routes.delete("/delete-task/:id");

export default routes;
