import { Router } from "express";
import cors from "cors";
import DataController from "./src/controllers/DataController";

const routes = Router();

// var corsOptions = {
//   origin: "http://localhost:3000",
//   optionsSuccessStatus: 200,
// };

// //allowing cors origin
// routes.use(cors(corsOptions));

routes.post("/new-zeev", new DataController().sendZeev);
// routes.post("/new-task");
// routes.put("/update-task/:id");
// routes.delete("/delete-task/:id");

export default routes;
