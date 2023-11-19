import { isValidObjectId } from "mongoose";

import { HttpError } from "../../helpers/index.js";

const isValidUserId = (req, res, next) => {
  const id  = req.user._id;
  if (!isValidObjectId(id)) {
    return next(HttpError(404, `${id} not valid User ID`));
  }
  next();
};

export default isValidUserId;