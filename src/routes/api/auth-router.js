import { Router } from 'express';

import userController from '../../controllers/users-controller.js';
import authenticate from '../../middleware/authenticate.js';
import usersValidation from '../../middleware/validation/users-validation.js';
import googleAuthController from '../../controllers/google-auth-controller.js';
import upload from '../../middleware/upload.js';

const authRouter = Router();

authRouter.post('/register',
  usersValidation.userRegisterValidate,
  userController.register);

authRouter.post('/login',
  usersValidation.userLoginValidate,
  userController.login);

authRouter.get('/current',
  authenticate,
  userController.getCurrent);

authRouter.post('/logout',
  authenticate,
  userController.logout);

authRouter.patch("/edit",
  authenticate,
  usersValidation.userProfileValidate,
  upload.single('avatarURL'),
  userController.updateUserProfile);

authRouter.patch("/edit/password",
  authenticate,
  usersValidation.changePasswordValidate,
  userController.changePassword);

authRouter.post("/verify",
  usersValidation.userEmailValidate,
  userController.resendVerifyEmail);

authRouter.get("/verify/:verificationToken",
  userController.verify);

authRouter.delete('/delete',
  authenticate,
  usersValidation.userEmailValidate,
  userController.removeUserProfile);

authRouter.get('/google',
  googleAuthController.googleAuth);

authRouter.get('/google-redirect',
  googleAuthController.googleRedirect);

export default authRouter;