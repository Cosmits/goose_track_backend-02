import { getAllReviews } from "./getAllReviews.js";
import { getOneReview } from "./getOneReview.js";
import { addOneReview } from "./addOneReview.js";
import { updateOneReview } from "./updateOneReview.js";
import { deleteOwnReview } from "./deleteOwnReview.js";

export default {
  "/reviews": getAllReviews, 
  "/reviews/own": {
    ...getOneReview,
    ...addOneReview,
    ...updateOneReview,
    ...deleteOwnReview,
  },
}
