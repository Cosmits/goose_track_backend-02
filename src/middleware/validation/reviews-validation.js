import validateBody from "../../decorators/validateBody.js";
import reviewsSchemas from "../../schemas/reviews-schemas.js";

const addReviewValidate = validateBody(reviewsSchemas.reviewsSchema);

export default {
  addReviewValidate,
};
