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
	date: Joi.date().iso().error(new Error(" Is not valid date format")).required(),
	category: Joi.string()
		.valid(...categoryList)
		.default("to-do")
		.required(),
});
// .custom((doc, helpers) => {
// 	if (doc.end > doc.start) {
// 		throw helpers.error("Start time should be lower than End time!");
// 	}
// 	return doc;
// });

const updateTaskSchemaValidation = Joi.object({
	title: Joi.string().min(1).max(250),
	start: Joi.string(),
	end: Joi.string(),
	priority: Joi.string().valid(...priorityList),
	date: Joi.date(),
	category: Joi.string().valid(...categoryList),
});

export default { taskSchemaValidation, updateTaskSchemaValidation };
