import { Schema, model } from "mongoose";
import { handleMongooseError, runValidateAtUpdate } from "../schemas/mongoose-hooks.js";

import { globalRegex } from "../helpers/index.js";
const { priorityList, categoryList, timeRegex, dateRegex } = globalRegex;

const taskSchema = new Schema(
	{
		owner: {
			type: Schema.Types.ObjectId,
			ref: "user", required: true
		},
		title: {
			type: String,
			required: [true, "Set title for your task, *(any string)"]
		},

		start: {
			type: String,
			match: [timeRegex, "Is not valid Time format, *(09:12)"], required: true
		},
		end: {
			type: String,
			match: [timeRegex, "Is not valid Time format, *(17:33)"], required: true
		},

		priority: { type: String, enum: priorityList, required: true },

		date: { type: String, match: [dateRegex, "Is not valid Date format, *(2023-10-20)"], required: true },
		category: { type: String, enum: categoryList, required: true },
	},
	{ versionKey: false, timestamps: false }
);

taskSchema.post("save", handleMongooseError);

taskSchema.pre("findOneAndUpdate", runValidateAtUpdate);

taskSchema.post("findOneAndUpdate", handleMongooseError);

const Task = model("tasks", taskSchema);

export default Task;
