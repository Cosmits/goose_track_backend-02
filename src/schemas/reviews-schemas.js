import Joi from "joi";

const reviewsSchema = Joi.object({
  
  rating: Joi.number()
    .required()
    .min(1)
    .max(5)
    .messages({ "any.required": "missing required rating field", }),
  
  comment: Joi.string()
    .required()
    .messages({ "any.required": "missing required comment field", }),
});

export default { reviewsSchema };
