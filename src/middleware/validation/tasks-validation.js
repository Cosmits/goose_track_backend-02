import { validateBody } from "../../decorators/validateBody.js";
import tasksSchema from "../../schemas/tasks-schema.js";

const taskAddValidator = validateBody(tasksSchema.taskSchemaValidation);
const taskUpdateValidator = validateBody(tasksSchema.updateTaskSchemaValidation);

export default { taskAddValidator, taskUpdateValidator };
