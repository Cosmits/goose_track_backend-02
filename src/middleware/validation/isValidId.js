import { isValidObjectId } from "mongoose";

import { HttpError } from "../../helpers/index.js";

const isValidId = (req, res, next) => {
	const { taskId } = req.params;
	if (!isValidObjectId(taskId)) {
		return next(HttpError(404, `${taskId} not valid id`));
	}
	next();
};

export default isValidId;
