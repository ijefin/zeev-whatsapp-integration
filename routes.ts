import { Router } from "express";
import cors from "cors";

const routes = Router();

var corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

//allowing cors origin
routes.use(cors(corsOptions));

routes.get("/all-tasks");
routes.post("/new-task");
routes.put("/update-task/:id");
routes.delete("/delete-task/:id");

export default routes;