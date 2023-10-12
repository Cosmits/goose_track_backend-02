import { Router } from "express";
import taskController from "../../controllers/tasks-controller.js";

const tasksRouter = Router;

tasksRouter.get("/tasks", taskController.getAllTasks);
tasksRouter.post("/tasks", taskController.addTask);
tasksRouter.patch("/tasks/:taskId", taskController.updateTask);
tasksRouter.delete("/tasks/:taskId", taskController.deleteTask);

export default tasksRouter;
