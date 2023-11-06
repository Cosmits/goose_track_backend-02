import { register } from "./register.js";
import { login } from "./logIn.js";
import { current } from "./current.js";
import { logout } from "./logOut.js";
import { edit } from "./edit.js";
import { verify } from "./verify.js";
import { verifyEmail } from "./verifyEmail.js";
import { editPassword } from "./editPassword.js";
import { remove } from "./delete.js";
import { google } from "./google.js";

export default {
  "/users/register": register,
  "/users/login": login,
  "/users/current": current,
  "/users/logout": logout,
  "/users/edit": edit,
  "/users/edit/password": editPassword,
  "/users/verify": verify,
  "/users/verify/{verificationToken}": verifyEmail,
  "/users/delete": remove,
  "/users/google": google,
};
