import Joi from 'joi'

const emailRegexp = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9_-]+).([a-zA-Z]{2,5})$/;
const passwordRegexp = /^(?=.*\d)[A-Za-z\d]{6,}$/;
const phoneRegexp = /^\d{2}\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}$/;
const birthdayRegexp = /^\d{2}\/\d{2}\/\d{4}$/;

const userSignupValidation = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    "any.required": "missing required email field",
  }),
  password: Joi.string().min(6).pattern(passwordRegexp).required().messages({
    "any.required": "missing required password field",
  }),
 
});



const userEmailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    "any.required": "missing required email field",
  })
})

const userProfileSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "missing required name field",
  }),
  phone: Joi.string().pattern(phoneRegexp).required().messages({
    "any.required": "missing required phone field",
  }),
  birthday: Joi.string().regex(birthdayRegexp).required().messages({
    'string.pattern.base': 'Invalid birthday format (DD/MM/YYYY)',
    'any.required': 'Birthday is required',
  }),
  email: Joi.string().pattern(emailRegexp).required().messages({
    "any.required": "missing required email field",
  }),
  skype: Joi.string(),

});



export default { 
  userSignupValidation,
  userProfileSchema,
  //  usersSubscriptionFieldSchema,
    userEmailSchema };