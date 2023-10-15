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
});

const updateTaskSchemaValidation = Joi.object({
	title: Joi.string().min(1).max(250),
	start: Joi.string().regex(timeRegex).error(new Error(" Is not valid time format")),
	end: Joi.string().regex(timeRegex).error(new Error(" Is not valid time format")),
	priority: Joi.string().valid(...priorityList),
	date: Joi.string(),
	category: Joi.string().valid(...categoryList),
});

export default { taskSchemaValidation, updateTaskSchemaValidation };
