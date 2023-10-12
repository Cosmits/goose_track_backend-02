import Review from "../models/Review.js";

import { ctrlWrapper } from "../decorators/index.js";
import { HttpError } from "../helpers/index.js";

const getAllReviews = async (req, res) => {
  const result = await Review.find();
  res.json(result);
};

const getOneReview = async (req, res) => {
  console.log("getOneReview");
};

const addOneReview = async (req, res) => {
  console.log("addOneReview");
};

const updateOneReview = async (req, res) => {
  console.log("updateOneReview");
};

const removeOneReview = async (req, res) => {
  console.log("removeOneReview");
};

export default {
  getAllReviews: ctrlWrapper(getAllReviews),
  getOneReview: ctrlWrapper(getOneReview),
  addOneReview: ctrlWrapper(addOneReview),
  updateOneReview: ctrlWrapper(updateOneReview),
  removeOneReview: ctrlWrapper(removeOneReview),
};
