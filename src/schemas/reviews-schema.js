import Joi from "joi";

const reviewsSchema = Joi.object({
  
  rating: Joi.number()
    .required()
    .min(1)
    .max(5)
    .messages({ "any.required": "missing required rating field, *(0-5)", }),
  
  comment: Joi.string()
    .required()
    .messages({ "any.required": "missing required comment field, *(any string)", }),
});

export default { reviewsSchema };
