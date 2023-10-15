import { Router } from 'express';

import userController from '../../controllers/users-controller.js';
import authenticate from '../../middleware/authenticate.js';
import usersValidation from '../../middleware/validation/users-validation.js';
// import upload from '../../middleware/upload.js';

const authRouter = Router();

authRouter.post('/register', usersValidation.userValidate, userController.register);

authRouter.post('/login', usersValidation.userValidate, userController.login);

authRouter.get('/current', authenticate, userController.getCurrent);

authRouter.post('/logout', authenticate, userController.logout);

// authRouter.patch('/avatars', authenticate, upload.single('avatar'), userController.updateAvatarUser)

authRouter.get("/verify/:verificationToken", userController.verify);

authRouter.post("/verify", usersValidation.userEmailValidate, userController.resendVerifyEmail);



// роутер для редагування полів в user-profile----------------

authRouter.patch("/edit", authenticate, usersValidation.userProfileValidate, userController.updateUserProfile)

// роутер для запису додавання  юзера в user-profile
// authRouter.post("/user", authenticate, usersValidation.userProfileValidate, userController.addUserProfile)

export default authRouter;