import { Schema, model } from "mongoose";
import { handleMongooseError, runValidateAtUpdate } from "../schemas/mongooseHooks.js";

export const priorityList = ["low", "medium", "high"];
export const categoryList = ["to-do", "in-progress", "done"];
export const timeRegex = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;

const taskSchema = new Schema(
	{
		owner: { type: Schema.Types.ObjectId, ref: "user", required: true },
		title: { type: String, required: [true, "Set title for your task"] },

		start: { type: String, match: [timeRegex, "Is not valid Time format"], required: true },
		end: { type: String, match: [timeRegex, "Is not valid Time format"], required: true },

		priority: { type: String, enum: priorityList, required: true },

		date: { type: String, required: true },
		category: { type: String, enum: categoryList, required: true },
	},
	{ versionKey: false, timestamps: false }
);

taskSchema.post("save", handleMongooseError);

taskSchema.pre("findOneAndUpdate", runValidateAtUpdate);

taskSchema.post("findOneAndUpdate", handleMongooseError);

const Task = model("tasks", taskSchema);

export default Task;
