import { Router } from "express";

const taskRouter = Router;

taskRouter.get("/tasks");
taskRouter.post("/tasks");
taskRouter.patch("/tasks/:taskId");
taskRouter.delete("/tasks/:taskId");

export default taskRouter;
