import Joi from "joi";

import { globalRegex } from "../helpers/index.js";
const { priorityList, categoryList, timeRegex, dateRegex } = globalRegex;

const taskSchemaValidation = Joi.object({
	title: Joi.string()
		.min(1)
		.max(250)
		.required()
		.error(new Error("Set title for your task, *(any string)")),
	start: Joi.string()
		.required()
		.regex(timeRegex )
		.error(new Error("Is not valid time format, *(09:12)")),
	end: Joi.string()
		.required()
		.regex(timeRegex)
		.error(new Error("Is not valid time format, *(17:33)")),
	priority: Joi.string()
		.required()
		.valid(...priorityList )
		.default("medium"),
	date: Joi.string()
		.required()
		.regex(dateRegex)
		.error(new Error("Is not valid date format, *(2023-10-20)")),
	category: Joi.string()
		.required()
		.valid(...categoryList)
		.default("to-do"),
});

const updateTaskSchemaValidation = Joi.object({
	title: Joi.string()
		.min(1)
		.max(250)
		.error(new Error("Set title for your task, *(any string)")),
	start: Joi.string()
		.regex(timeRegex)
		.error(new Error("Is not valid time format, *(09:12)")),
	end: Joi.string()
		.regex(timeRegex)
		.error(new Error("Is not valid time format, *(17:33)")),
	priority: Joi.string()
		.valid(...priorityList),
	category: Joi.string()
		.valid(...categoryList),
});

export default { taskSchemaValidation, updateTaskSchemaValidation };
