import { Schema, model } from "mongoose";
// import { handleSaveError, runValidateAtUpdate } from "./hooks.js";

const reviewSchema = new Schema(
  {
    rating: {
      type: Number,
      required: [true, "Set rating for review"],
    },
    comment: {
      type: String,
      required: [true, "Set comment for review"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: false }
);

// contactSchema.post("save", handleSaveError);

// contactSchema.pre("findOneAndUpdate", runValidateAtUpdate);

// contactSchema.post("findOneAndUpdate", handleSaveError);

const Review = model("review", reviewSchema);

export default Review;
