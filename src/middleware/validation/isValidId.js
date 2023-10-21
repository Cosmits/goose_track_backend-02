import { isValidObjectId } from "mongoose";

import { HttpError } from "../../helpers/index.js";

const isValidId = (req, res, next) => {
	const { id } = req.params;
	if (!isValidObjectId(taskId)) {
		return next(HttpError(404, `${id} not valid id`));
	}
	next();
};

export default isValidId;
