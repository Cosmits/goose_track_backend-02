import { Router } from "express";

const tasksRouter = Router;

tasksRouter.get("/tasks");
tasksRouter.post("/tasks");
tasksRouter.patch("/tasks/:taskId");
tasksRouter.delete("/tasks/:taskId");

export default tasksRouter;
