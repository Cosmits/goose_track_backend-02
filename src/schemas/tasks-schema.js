import Joi from "joi";
import { categoryList, priorityList, timeRegex } from "../models/Task.js";

const taskSchemaValidation = Joi.object({
	title: Joi.string().min(1).max(250).required(),

	start: Joi.string().regex(timeRegex).error(new Error(" Is not valid time format")).required(),
	end: Joi.string().regex(timeRegex).error(new Error(" Is not valid time format")).required(),
	priority: Joi.string()
		.valid(...priorityList)
		.default("medium")
		.required(),
	date: Joi.string().required(),
	category: Joi.string()
		.valid(...categoryList)
		.default("to-do")
		.required(),
}).custom((time, helpers) => {
	const { start, end } = time;
	const startTime = parseTime(start);
	const endTime = parseTime(end);
	if (startTime > endTime) {
		return helpers.error("End time must be greater than start time");
	}
	return time;
});

function parseTime(timeString) {
	const [hours, minutes] = timeString.split(":").map(Number);
	return hours * 60 + minutes;
}

const updateTaskSchemaValidation = Joi.object({
	title: Joi.string().min(1).max(250),
	start: Joi.string().regex(timeRegex).error(new Error(" Is not valid time format")),
	end: Joi.string().regex(timeRegex).error(new Error(" Is not valid time format")),
	priority: Joi.string().valid(...priorityList),
	date: Joi.string(),
	category: Joi.string().valid(...categoryList),
});

export default { taskSchemaValidation, updateTaskSchemaValidation };
