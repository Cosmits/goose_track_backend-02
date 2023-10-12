import { Schema, model } from "mongoose";
import { handleMongooseError, runValidateAtUpdate } from "./mongooseHooks.js";

export const priorityList = ["low", "medium", "high"];
export const categoryList = ["to-do", "in-progress", "done"];

const taskSchema = new Schema(
	{
		owner: { type: Schema.Types.ObjectId, ref: "user", required: true },
		title: { type: String, required: [true, "Set title for your task"] },
		start: { type: String, required: true },
		end: { type: String, required: true },
		priority: { type: String, enum: priorityList, required: true },

		//can we use [default : "medium"]?

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
