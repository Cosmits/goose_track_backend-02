import { Schema, model } from "mongoose";
import { handleMongooseError, runValidateAtUpdate } from "./mongooseHooks.js";

const taskSchema = new Schema(
	{
		title: { type: String, required: [true, "Set title for your task"] },
		start: { type: String, required: true },
		end: { type: String, required: true },
		priority: { type: String, required: true },
		date: { type: String, required: true },
		category: { type: String, required: true },
	},
	{ versionKey: false, timestamps: false }
);

taskSchema.post("save", handleMongooseError);

taskSchema.pre("findOneAndUpdate", runValidateAtUpdate);

taskSchema.post("findOneAndUpdate", handleMongooseError);

const Task = model("tasks", taskSchema);

export default Task;
