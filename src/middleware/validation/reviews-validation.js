import validateBody from "../../decorators/validateBody.js";
import reviewsSchemas from "../../schemas/reviews-schemas.js";

const addReviewValidate = validateBody(reviewsSchemas.reviewsSchema);
const updateReviewValidate = validateBody(reviewsSchemas.reviewsSchema);

export default {
  addReviewValidate,
  updateReviewValidate,
};
