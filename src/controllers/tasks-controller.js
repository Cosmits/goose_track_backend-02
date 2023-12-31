import { ctrlWrapper } from "../decorators/index.js";
import { HttpError } from "../helpers/index.js";

import Task from "../models/Task.js";

const getAllTasks = async (req, res) => {
  const { _id: owner } = req.user;
  const { date } = req.query;

  if (!date) throw HttpError(404, `The query param "date" must be use`);

  const result = await Task.find(
    {
      owner,
      date: { $regex: date, $options: "i" },
    },
    "-owner"
  );

  res.status(200).json({
    status: "OK",
    code: 200,
    data: result,
  });
};

const addTask = async (req, res) => {
  const { _id: owner } = req.user;

  const result = await Task.create({ ...req.body, owner });

  res.status(201).json({
    status: "OK",
    code: 201,
    data: result,
  });
};

const updateTask = async (req, res) => {
  const { _id: owner } = req.user;
  const { id: _id } = req.params;

  const result = await Task.findOneAndUpdate({ owner, _id }, req.body, {
    new: true,
  });
  if (!result) throw HttpError(404, `Task with id=${_id} not found`);

  res.status(200).json({
    status: "OK",
    code: 200,
    data: result,
  });
};

const deleteTask = async (req, res) => {
  const { _id: owner } = req.user;
  const { id: _id } = req.params;

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
