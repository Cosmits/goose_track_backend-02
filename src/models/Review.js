import { Schema, model } from "mongoose";
import {
  handleMongooseError,
  runValidateAtUpdate,
} from "../schemas/mongooseHooks.js";

const reviewSchema = new Schema(
  {
    rating: {
      type: Number,
      min: [0, "too few rating"],
      max: [5, "too high rating"],
      required: [true, "Set rating for review"],
    },
    comment: {
      type: String,
      required: [true, "Set comment for review"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: [true, "Set owner for review"],
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
