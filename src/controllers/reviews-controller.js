import Review from "../models/Review.js";

import { ctrlWrapper } from "../decorators/index.js";
import { HttpError } from "../helpers/index.js";

const getAllReviews = async (req, res) => {
  const reviews = await Review.find({}, "-_id").populate(
    "owner",
    "avatarURL userName"
  );
  res.json(reviews);
};

const getOneReview = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Review.findOne({ owner });
  if (!result) {
    throw HttpError(404, `contact with id=${owner} hasn't left a review`);
  }
  res.json(result);
};

const addOneReview = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Review.create({ ...req.body, owner });
  res.status(201).json(result);
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
  res.json(result);
};

const removeOneReview = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Review.findOneAndDelete({ owner });
  if (!result) {
    throw HttpError(404, `contact with id=${owner} hasn't left a review`);
  }
  res.json({
    message: "Delete success",
  });
};

export default {
  getAllReviews: ctrlWrapper(getAllReviews),
  getOneReview: ctrlWrapper(getOneReview),
  addOneReview: ctrlWrapper(addOneReview),
  updateOneReview: ctrlWrapper(updateOneReview),
  removeOneReview: ctrlWrapper(removeOneReview),
};
