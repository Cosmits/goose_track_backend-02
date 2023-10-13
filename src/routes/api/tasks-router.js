import { Router } from "express";
import tasksController from "../../controllers/tasks-controller.js";
import authenticate from "../../middleware/authenticate.js";
import validateBody from "../../decorators/validateBody.js";
import tasksSchema from "../../schemas/tasks-schema.js";
import isValidId from "../../middleware/validation/isValidId.js";

const tasksRouter = Router();

tasksRouter.use(authenticate);
const taskAddValidator = validateBody(tasksSchema.taskSchemaValidation);
const taskUpdateValidator = validateBody(tasksSchema.taskUpdateValidator);

tasksRouter.get("/", tasksController.getAllTasks);
tasksRouter.post("/", taskAddValidator, tasksController.addTask);
tasksRouter.patch("/:taskId", isValidId, taskUpdateValidator, tasksController.updateTask);
tasksRouter.delete("/:taskId", tasksController.deleteTask);

export default tasksRouter;
