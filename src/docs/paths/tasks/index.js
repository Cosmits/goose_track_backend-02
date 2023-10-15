const getMonthTasks = require("./getMonthTasks");
const postTask = require("./postTask");
const patchTask = require("./patchTask");
const deleteTask = require("./deleteTask");


module.exports = {
  "/tasks": { ...getMonthTasks, ...postTask },
  "/tasks/{id}": { ...patchTask, ...deleteTask },
};
