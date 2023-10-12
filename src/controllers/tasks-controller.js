import { ctrlWrapper } from "../decorators/index.js";
import { HttpError } from "../helpers/index.js";

import Task from "../models/Task.js";

const getAllTasks = async (req, res) => {
	const { _id: owner } = req.user;
	// const { page = 1, limit = 10 } = req.query;
	// const skip = (page - 1) * limit;
	const result = await Task.find({ owner });
	res.json(result);
};

const addTask = async (req, res) => {
	const { _id: owner } = req.user;
	const result = await Task.create({ ...req.body, owner });
	res.status(201).json(result);
};

const updateTask = async (req, res) => {
	console.log("updateTask", req.params);

	const taskId = req.params.taskId;
	const result = await Task.findByIdAndUpdate(taskId, req.body, { new: true });
	if (!result) {
		throw HttpError(404, `Task with id=${taskId} not found`);
	}
	res.status(200).json(result);
};

const deleteTask = async (req, res) => {
	console.log("deleteTask");
	const taskId = req.params.taskId;
	const result = await Task.findByIdAndDelete(taskId);
	if (!result) {
		throw HttpError(404, "Not found!");
	}
	res.status(200).json({ message: "Task has been removed" });
};

export default {
	getAllTasks: ctrlWrapper(getAllTasks),
	addTask: ctrlWrapper(addTask),
	updateTask: ctrlWrapper(updateTask),
	deleteTask: ctrlWrapper(deleteTask),
};
