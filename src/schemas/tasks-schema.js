import Joi from "joi";
import { categoryList, priorityList } from "../models/Task.js";

const taskSchemaValidation = Joi.object({
	title: Joi.string().min(1).max(250).required(),

	// start: Joi.date().timestamp().required(),
	// end: Joi.date().timestamp().min(Joi.ref('start_time')).required(),

	start: Joi.string().required(),
	end: Joi.string().required(),
	priority: Joi.string()
		.valid(...priorityList)
		.required(),
	date: Joi.date().min("now").required(),
	category: Joi.string()
		.valid(...categoryList)
		.required(),
});

export default { taskSchemaValidation };
