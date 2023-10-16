import { Router } from 'express';

import userController from '../../controllers/users-controller.js';
import authenticate from '../../middleware/authenticate.js';
import usersValidation from '../../middleware/validation/users-validation.js';
// import upload from '../../middleware/upload.js';

const authRouter = Router();

authRouter.post('/register', usersValidation.userRegisterValidate, userController.register);

authRouter.post('/login', usersValidation.userLoginValidate, userController.login);

authRouter.get('/current', authenticate, userController.getCurrent);

authRouter.post('/logout', authenticate, userController.logout);

// authRouter.patch('/avatars', authenticate, upload.single('avatar'), userController.updateAvatarUser)

authRouter.post("/verify", authenticate, usersValidation.userEmailValidate, userController.resendVerifyEmail);

authRouter.get("/verify/:verificationToken", userController.verify);




// роутер для редагування полів в user-profile----------------

authRouter.patch("/edit", authenticate, usersValidation.userProfileValidate, userController.updateUserProfile)

// роутер для запису додавання  юзера в user-profile
// authRouter.post("/user", authenticate, usersValidation.userProfileValidate, userController.addUserProfile)

export default authRouter;