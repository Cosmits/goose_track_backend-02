import Joi from "joi";

const reviewsSchema = Joi.object({
  rating: Joi.number().required().messages({
    "any.required": "missing required rating field",
  }),
  comment: Joi.string().required().messages({
    "any.required": "missing required comment field",
  }),
  owner: Joi.string().required().messages({
    "any.required": "missing required _id field",
  }),
});

// const contactsFavoriteFieldSchema = Joi.object({
//   favorite: Joi.boolean().required().messages({
//     "any.required": "missing required favorite field",
//   }),
// });

export default { reviewsSchema };
