import Joi from 'joi'

import { globalRegex } from "../helpers/index.js";
const { emailRegexp, passwordRegexp, phoneRegexp, birthdayRegexp } = globalRegex;

const userRegisterValidation = Joi.object({
  userName: Joi.string()
    .min(3)
    .max(40)
    .required()
    .messages({ "any.required": "missing required userName field, *(User)" }),
  email: Joi.string()
    .required()
    .pattern(emailRegexp)
    .messages({ "any.required": "missing required email field, *(any@mail.com)", }),
  password: Joi.string()
    .required()
    .min(6)
    .pattern(passwordRegexp)
    .messages({ "any.required": "missing required password field, *(min length 6 characters, may use symbols A-Za-z0-9)", }),
});

const userLoginValidation = Joi.object({
  email: Joi.string()
    .pattern(emailRegexp)
    .required()
    .messages({ "any.required": "missing required email field, *(any@mail.com)", }),
  password: Joi.string()
    .min(6)
    .pattern(passwordRegexp)
    .required()
    .messages({ "any.required": "missing required password field, *(min length 6 characters, may use symbols A-Za-z0-9)", }),
});

const userEmailSchema = Joi.object({
  email: Joi.string()
    .required()
    .pattern(emailRegexp)
    .messages({ "any.required": "missing required email field, *(any@mail.com)", })
})

const userProfileSchema = Joi.object({
  userName: Joi.string()
    .messages({ "any.required": "missing required name field, *(User)", }),
  phone: Joi.string()
    .pattern(phoneRegexp)
    .messages({ "any.required": "missing required phone field, *(12 (345) 678 90 12)", }),
  birthday: Joi.string()
    .regex(birthdayRegexp)
    .messages({
      'string.pattern.base': 'Invalid birthday format, *(DD/MM/YYYY)',
      'any.required': 'Birthday is required',
    }),  
  email: Joi.string()
    .pattern(emailRegexp)
    .messages({
      "any.required": "missing required email field, *(any@mail.com)",
    }),
  skype: Joi.string(),
});


export default {
  userRegisterValidation,
  userLoginValidation,
  userProfileSchema,
  userEmailSchema
};