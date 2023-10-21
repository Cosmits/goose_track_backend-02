import validateBody from "../../decorators/validateBody.js";
import usersSchemas from "../../schemas/users-schema.js";

const userRegisterValidate = validateBody(usersSchemas.userRegisterValidation);

const userLoginValidate = validateBody(usersSchemas.userLoginValidation);

const userEmailValidate = validateBody(usersSchemas.userEmailSchema);

const userProfileValidate = validateBody(usersSchemas.userProfileSchema);

export default { userRegisterValidate, userLoginValidate, userEmailValidate, userProfileValidate };