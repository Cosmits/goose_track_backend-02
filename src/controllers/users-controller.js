import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Jimp from 'jimp';
import gravatar from 'gravatar';

import User from '../schemas/usersMongo.js';
import HttpError from '../helpers/HttpError.js';
import ctrlWrapper from '../decorators/ctrlWrapper.js';
import sendEmail from '../helpers/sendEmail.js';

import path from 'path'
import fs from 'fs/promises';
import { v1 as uuidv1 } from 'uuid'

import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const JWT_SECRET = process.env.JWT_SECRET
const BASE_URL_BACK = process.env.BASE_URL_BACK
const PORT = process.env.PORT

const register = async (req, res) => {
  const { email, password, userName, phone, skype, birthDay } = req.body;
  const user = await User.findOne({ email });
  if (user) throw HttpError(409, 'Email in use');

  const hashPassword = await bcrypt.hash(password, 7);
  const avatarURL = gravatar.url(email, { protocol: 'https' })
  const verificationToken = uuidv1();

  const newUser = await User.create({ ...req.body, password: hashPassword, avatarURL, verificationToken, userName, phone, skype, birthDay });

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL_BACK}:${PORT}/users/verify/${verificationToken}">Click to verify email</a>`
  };
  await sendEmail(verifyEmail);

  res.status(201).json({
    status: 'OK',
    code: 201,
    user: {
      _id: newUser._id,
      userName: newUser.userName,
      email: newUser.email,
      phone: newUser.phone,
      skype: newUser.skype,
      birthDay: newUser.birthday,
      avatarURL,
    }

  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  const passwordCompare = await bcrypt.compare(password, user.password)

  // if (!user.verify) throw HttpError(401, "Email not verify"); // throw HttpError(401, "Email or password invalid");

  if (!user || !passwordCompare) throw HttpError(401, 'Email or password is wrong')

  const { _id: id, userName, phone, skype, birthDay, avatarURL } = user
  const payload = { id }

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '23h' })

  await User.findByIdAndUpdate(id, { token })

  res.json({
    status: 'OK',
    code: 200,
    token,
    user: {
      _id: id,
      userName,
      email,
      phone,
      skype,
      birthDay,
      avatarURL,
    },
  })
}

const getCurrent = async (req, res) => {
  const { _id, email, userName, phone, skype, birthDay, avatarURL } = req.user

  res.json({
    user: {
      _id: _id,
      userName,
      email,
      phone,
      skype,
      birthDay,
      avatarURL,
    },
  })
}

const logout = async (req, res) => {
  const { _id } = req.user
  await User.findByIdAndUpdate(_id, { token: '' })

  res.status(204).json({
    code: 204,
    message: 'No Content',
  })
}



const avatarsDir = path.join('public', 'avatars')

const updateAvatarUser = async (req, res) => {
  const { _id } = req.user
  const { path: tempUpload, originalname } = req.file

  const filename = `${_id}_${originalname}`
  const resultUpload = path.join(avatarsDir, filename)

  await fs.rename(tempUpload, resultUpload)

  const resizeFile = await Jimp.read(resultUpload)
  await resizeFile.resize(250, 250).write(resultUpload)

  const avatarURL = path.join('avatars', filename)

  await User.findByIdAndUpdate(_id, { avatarURL })

  res.status(200).json({
    status: 'Update avatar',
    code: 200,
    avatarURL,
  })

}

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) throw HttpError(404, "Email not found")

  if (user.verify) throw HttpError(400, "Email already verify")

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL_BACK}:${PORT}/users/verify/${user.verificationToken}">Click to verify email</a>`
  };
  await sendEmail(verifyEmail);

  res.status(200).json({
    status: 'Verify email resend success',
    code: 200,
    message: "Verify email resend success"
  })
}

const verify = async (req, res) => {
  const { verificationToken } = req.params;

  const user = await User.findOne({ verificationToken });

  if (!user) throw HttpError(404);

  await User.findByIdAndUpdate(user._id, { verify: true, verificationToken: "Verify" });

  res.status(200).json({
    status: 'Verification successful',
    code: 200,
    message: "Email verification successful"
  })
}



// ------ Update user profile  controller--------------
const updateUserProfile = async (req, res) => {

  if (!req.user) {
    throw HttpError(401, "Missing header with authorization token")

  }
  const { _id } = req.user;
  const body = req.body;
  const updatedUser = await User.findByIdAndUpdate(_id, body, { new: true });
  if (!updatedUser) {
    throw HttpError(404, "User not found")

  }
  res.status(200).json({
    data: updatedUser,
  })
}


export default {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  updateAvatarUser: ctrlWrapper(updateAvatarUser),
  verify: ctrlWrapper(verify),
  resendVerifyEmail: ctrlWrapper(resendVerifyEmail),
  updateUserProfile: ctrlWrapper(updateUserProfile),
};