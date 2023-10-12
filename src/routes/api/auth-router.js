import { Router } from 'express';

import userController from '../../controllers/users-controller.js';
import authenticate from '../../middleware/authenticate.js';
import usersValidation from '../../middleware/validation/users-validation.js';
import upload from '../../middleware/upload.js';

const usersRouter = Router();

usersRouter.post('/register', usersValidation.userValidate, userController.register);

usersRouter.post('/login', usersValidation.userValidate, userController.login);

usersRouter.get('/current', authenticate, userController.getCurrent);

usersRouter.post('/logout', authenticate, userController.logout);

usersRouter.patch('/avatars', authenticate, upload.single('avatar'), userController.updateAvatarUser)

// usersRouter.get("/verify/:verificationToken", userController.verify);

// usersRouter.post("/verify", usersValidation.userEmailValidate, userController.resendVerifyEmail);




// роутер для редагування полів в user-profile----------------

usersRouter.patch("/edit", authenticate, usersValidation.userProfileValidate, userController.updateUserProfile)

// роутер для запису додавання  юзера в user-profile
// usersRouter.post("/user", authenticate, usersValidation.userProfileValidate, userController.addUserProfile)

export default usersRouter;