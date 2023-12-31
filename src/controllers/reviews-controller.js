import Review from "../models/Review.js";

import { ctrlWrapper } from "../decorators/index.js";
import { HttpError } from "../helpers/index.js";

const getAllReviews = async (req, res) => {
  const reviews = await Review.find({}, "-_id").populate(
    "owner",
    "avatarURL userName"
  );
  res.status(200).json({
    status: "OK",
    code: 200,
    data: reviews,
  });
};

const getOneReview = async (req, res) => {
  const { _id: owner, userName } = req.user;
  const result = await Review.findOne({ owner });
  if (!result) {
    throw HttpError(404, `user '${userName}' hasn't left a review`);
  }
  res.status(200).json({
    status: "OK",
    code: 200,
    data: result,
  });
};

const addOneReview = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Review.create({ ...req.body, owner });
  res.status(201).json({
    status: "OK",
    code: 201,
    data: result,
  });
};

const updateOneReview = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Review.findOneAndUpdate(
    { owner },
    { ...req.body },
    {
      new: true,
    }
  );
  res.status(200).json({
    status: "OK",
    code: 200,
    data: result,
  });
};

const removeOneReview = async (req, res) => {
  const { _id: owner, userName } = req.user;
  const result = await Review.findOneAndDelete({ owner });
  if (!result) {
    throw HttpError(404, `user '${userName}' hasn't left a review`);
  }
  res.status(200).json({
    status: "OK",
    code: 200,
    data: result,
  });
};

export default {
  getAllReviews: ctrlWrapper(getAllReviews),
  getOneReview: ctrlWrapper(getOneReview),
  addOneReview: ctrlWrapper(addOneReview),
  updateOneReview: ctrlWrapper(updateOneReview),
  removeOneReview: ctrlWrapper(removeOneReview),
};
