import Joi from "joi";

const reviewsSchema = Joi.object({
  rating: Joi.number().min(1).max(5).required().messages({
    "any.required": "missing required rating field",
  }),
  comment: Joi.string().required().messages({
    "any.required": "missing required comment field",
  }),
});

// const contactsFavoriteFieldSchema = Joi.object({
//   favorite: Joi.boolean().required().messages({
//     "any.required": "missing required favorite field",
//   }),
// });

export default { reviewsSchema };
