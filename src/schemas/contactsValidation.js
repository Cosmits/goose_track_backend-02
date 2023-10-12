import Joi from "joi";
import JoiPhoneNumber from "joi-phone-number";

const myJoi = Joi.extend(JoiPhoneNumber);

const schemaValidation = myJoi.object({
	name: Joi.string().min(3).max(255).required(),
	email: Joi.string().email({ minDomainSegments: 2 }).required(),
	phone: myJoi.string().phoneNumber().required(),
	favorite: Joi.boolean().default(false),
});

const updateFavoriteSchema = Joi.object({
	favorite: Joi.boolean().messages({ "any.required": `Missing field favorite` }),
});

export default {
	schemaValidation,
	updateFavoriteSchema,
};
