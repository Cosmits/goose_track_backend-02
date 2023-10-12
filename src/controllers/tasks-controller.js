// import { ctrlWrapper } from "../decorators/index.js";
// import { HttpError } from "../helpers/index.js";

// import Task from "../models/Task.js";

const getAllTasks = async (req, res) => {
	console.log("getAllTasks");
	// const result = await Task.find();
	// res.status(200).json(result);
};

const addTask = async (req, res) => {
	console.log("addTask");
	// const { _id: owner } = req.user;
	// const result = await Task.create({ ...req.body, owner });
	// res.status(201).json(result);
};

// const getTaskById = async (req, res) => {
// 	const contactId = req.params.contactId;
// 	const result = await Contact.findById(contactId);
// 	if (!result) {
// 		throw HttpError(404, `Contact id=${contactId} is not found`);
// 	}
// 	res.status(200).json(result);
// };

const updateTask = async (req, res) => {
	console.log("updateTask");
	// const contactId = req.params.contactId;
	// const result = await Task.findByIdAndUpdate(contactId, req.body, { new: true });
	// if (!result) {
	// 	throw HttpError(404, `Contact id=${contactId} not found`);
	// }
	// res.status(200).json(result);
};

const deleteTask = async (req, res) => {
	console.log("deleteTask");
	// const contactId = req.params.contactId;
	// const result = await Task.findByIdAndDelete(taskId);
	// if (!result) {
	// 	throw HttpError(404, "Not found!");
	// }
	// res.status(200).json({ message: "Contact removed" });
};

export default {
	getAllTasks,
	addTask,
	updateTask,
	deleteTask,

	// getAllTasks: ctrlWrapper(getAllTasks),
	// addTask: ctrlWrapper(addTask),
	// updateTask: ctrlWrapper(updateTask),
	// deleteTask: ctrlWrapper(deleteTask),
};
