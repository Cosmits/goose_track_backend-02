import validateBody from "../../decorators/validateBody.js";
import usersSchemas from "../../schemas/userValidation.js";

const userValidate = validateBody(usersSchemas.userSignupValidation);


const userEmailValidate = validateBody(usersSchemas.userEmailSchema);

const userProfileValidate = validateBody(usersSchemas.userProfileSchema);

export default { userValidate, userEmailValidate, userProfileValidate };