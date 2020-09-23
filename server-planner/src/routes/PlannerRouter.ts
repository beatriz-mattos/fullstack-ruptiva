import express from "express";
import { PlannerController } from '../controller/PlannerController';

export const plannerRouter = express.Router();

const plannerController = new PlannerController();

plannerRouter.get("/", plannerController.getTasks);
plannerRouter.post("/create". plannerController.createTask);
// plannerRouter.put("/edit", plannerController.editTask);
// plannerRouter.delete("/delete", plannerController.deleteTask);