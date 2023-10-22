import { Schema, model } from "mongoose";
import {
  handleMongooseError,
  runValidateAtUpdate,
} from "../schemas/mongoose-hooks.js";

const reviewSchema = new Schema(
  {
    rating: {
      type: Number,
      min: [1, "too few rating"],
      max: [5, "too high rating"],
      required: [true, "Set rating for review, *(1-5)"],
    },
    comment: {
      type: String,
      required: [true, "Set comment for review, *(any string)"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: [true, "Set owner for review, *(User ID)"],
      unique: true,
    },
  },
  { versionKey: false }
);

reviewSchema.post("save", handleMongooseError);

reviewSchema.pre("findOneAndUpdate", runValidateAtUpdate);

reviewSchema.post("findOneAndUpdate", handleMongooseError);

const Review = model("review", reviewSchema);

export default Review;
