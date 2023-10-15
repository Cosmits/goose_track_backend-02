import { getAllTasks } from "./getAllTasks.js";
import { addTask } from "./addTask.js";
import { updateTask } from "./updateTask.js";
import { deleteTask } from "./deleteTask.js";

export default {
  "/tasks": { ...getAllTasks, ...addTask },
  "/tasks/{id}": { ...updateTask , ...deleteTask },
};

