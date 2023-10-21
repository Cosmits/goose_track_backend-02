import { Router } from "express";
import tasksController from "../../controllers/tasks-controller.js";
import authenticate from "../../middleware/authenticate.js";
import tasksValidation from "../../middleware/validation/tasks-validation.js";
import isValidId from "../../middleware/validation/isValidId.js";
import isValidTime from "../../middleware/validation/isValidTime.js";

const tasksRouter = Router();

tasksRouter.use(authenticate);

tasksRouter.get("/",
  tasksController.getAllTasks);

tasksRouter.post("/",
  isValidTime,
  tasksValidation.taskAddValidator,
  tasksController.addTask);

tasksRouter.patch("/:id",
  isValidId, isValidTime,
  tasksValidation.taskUpdateValidator,
  tasksController.updateTask);

tasksRouter.delete("/:id",
  tasksController.deleteTask);

export default tasksRouter;
