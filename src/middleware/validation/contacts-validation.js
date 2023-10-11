import validateBody from "../../decorators/validateBody.js";
import contactsSchemas from "../../schemas/contactsValidation.js";


const addContactValidate = validateBody(contactsSchemas.schemaValidation);
const updateContactValidate = validateBody(contactsSchemas.schemaValidation);
const updateContactValidateFavoriteField = validateBody(
  contactsSchemas.updateFavoriteSchema
);

export default {
  addContactValidate,
  updateContactValidate,
  updateContactValidateFavoriteField,
};