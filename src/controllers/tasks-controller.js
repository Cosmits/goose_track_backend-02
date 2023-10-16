import { ctrlWrapper } from "../decorators/index.js";
import { HttpError } from "../helpers/index.js";

import Task from "../models/Task.js";

//GET
const getAllTasks = async (req, res) => {
	const { _id: owner } = req.user;
	const { date } = req.query;
	if (!date) throw HttpError(404, `You did something wrong :()`);

	const result = await Task.find(
		{
			owner,
			date: { $regex: date, $options: "i" },
		}
		// "-owner"
	);

	res.status(200).json({
		status: "OK",
		code: 200,
		data: result,
	});
};

//ADD
const addTask = async (req, res) => {
	const { _id: owner } = req.user;

	const result = await Task.create({ ...req.body, owner });

	res.status(201).json({
		status: "OK",
		code: 201,
		data: result,
	});
};

//UPDATE
const updateTask = async (req, res) => {
	const { _id: owner } = req.user;
	const { taskId: _id } = req.params;

	const result = await Task.findOneAndUpdate({ owner, _id }, req.body, { new: true });
	if (!result) throw HttpError(404, `Task with id=${_id} not found`);

	res.status(200).json({
		status: "OK",
		code: 200,
		data: result,
	});
};

//DELETE
const deleteTask = async (req, res) => {
	const { _id: owner } = req.user;
	const { taskId: _id } = req.params;

	const ownTask = await Task.findOne({ _id, owner });
	if (!ownTask) throw HttpError(404, "This is not your own task");

	const result = await Task.findByIdAndDelete({ _id });
	if (!result) throw HttpError(404, "Not found!");

	res.status(200).json({
		status: "OK",
		code: 200,
		data: result,
		message: "Task has been removed",
	});
};

export default {
	getAllTasks: ctrlWrapper(getAllTasks),
	addTask: ctrlWrapper(addTask),
	updateTask: ctrlWrapper(updateTask),
	deleteTask: ctrlWrapper(deleteTask),
};
