import { register } from "./register.js";
import { login } from "./logIn.js";
import { current } from "./current.js";
import { logout } from "./logOut.js";
import { edit } from "./edit.js";
import { verify } from "./verify.js";
import { verifyEmail } from "./verifyEmail.js";

export default {
  "/users/register": register,
  "/users/login": login,
  "/users/current": current,
  "/users/logout": logout,
  "/users/edit": edit,
  "/users/verify": verify,
  "/users/verify/{verificationToken}": verifyEmail,
};
