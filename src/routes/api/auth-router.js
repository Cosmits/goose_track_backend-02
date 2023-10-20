import { Router } from 'express';

import userController from '../../controllers/users-controller.js';
import authenticate from '../../middleware/authenticate.js';
import usersValidation from '../../middleware/validation/users-validation.js';
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

authRouter.post("/verify",
  authenticate,
  usersValidation.userEmailValidate,
  userController.resendVerifyEmail);

authRouter.get("/verify/:verificationToken",
  userController.verify);

authRouter.patch("/edit",
  authenticate,
  usersValidation.userProfileValidate,
  upload.single('avatar'),
  userController.updateUserProfile)


export default authRouter;