import { Router } from "express";
import tasksController from "../../controllers/tasks-controller.js";
import authenticate from "../../middleware/authenticate.js";
import validateBody from "../../decorators/validateBody.js";
import tasksSchema from "../../schemas/tasks-schema.js";
import isValidId from "../../middleware/validation/isValidId.js";

const tasksRouter = Router();

tasksRouter.use(authenticate);
const taskAddValidator = validateBody(tasksSchema.taskSchemaValidation);

tasksRouter.get("/", tasksController.getAllTasks);
tasksRouter.post("/", taskAddValidator, tasksController.addTask);
tasksRouter.patch("/:taskId", isValidId, taskAddValidator, tasksController.updateTask);
tasksRouter.delete("/:taskId", tasksController.deleteTask);

export default tasksRouter;
