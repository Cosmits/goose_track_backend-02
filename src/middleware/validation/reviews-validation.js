import validateBody from "../../decorators/validateBody.js";
import reviewsSchemas from "../../schemas/reviews-schemas.js";

const addReviewValidate = validateBody(reviewsSchemas.reviewsSchema);
// const updateContactValidate = validateBody(contactsSchemas.schemaValidation);
// const updateContactValidateFavoriteField = validateBody(
//   contactsSchemas.updateFavoriteSchema
// );

export default {
  addReviewValidate,
  //   updateContactValidate,
  //   updateContactValidateFavoriteField,
};
