import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Jimp from 'jimp';
import gravatar from 'gravatar';

import path from 'path'
import fs from 'fs/promises';
import { v1 as uuidv1 } from 'uuid'

import User from '../models/User.js';
import { ctrlWrapper} from '../decorators/index.js';
import { HttpError, sendEmail, clearSecretUserField } from '../helpers/index.js';

import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const JWT_SECRET = process.env.JWT_SECRET
const BASE_URL_BACK = process.env.BASE_URL_BACK

const register = async (req, res) => {
  const { email, password, userName } = req.body;

  const user = await User.findOne({ email });
  if (user) throw HttpError(409, 'Email in used');

  const hashPassword = await bcrypt.hash(password, 7);
  const avatarURL = gravatar.url(email, { protocol: 'https' })
  const verificationToken = uuidv1();

  const currentUser = await User.create({
    userName, email, password: hashPassword,
    avatarURL, verificationToken
  });
  if (!currentUser) throw HttpError(500, 'User not created in the database');

  await sendEmail(verificationToken, email, userName);

  const sendUserData = clearSecretUserField(currentUser);

  res.status(201).json({
    status: 'OK',
    code: 201,
    user: sendUserData
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  const passwordCompare = await bcrypt.compare(password, user.password)

  // if (!user.verify) throw HttpError(401, "Email not verify"); // throw HttpError(401, "Email or password invalid");

  if (!user || !passwordCompare) throw HttpError(401, 'Email or password is wrong')

  const payload = { id: user._id }

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '23h' })

  const currentUser = await User.findByIdAndUpdate(user._id, { token }, { new: true })
  if (!currentUser) throw HttpError(500, 'User not created in the database');

  const sendUserData = clearSecretUserField(currentUser);

  res.json({
    status: 'OK',
    code: 200,
    token,
    user: sendUserData,
  })
}

const getCurrent = async (req, res) => {
  const sendUserData = clearSecretUserField(req.user);

  res.json({
    status: 'OK',
    code: 200,
    user: sendUserData,
  })
}

const logout = async (req, res) => {
  const { _id } = req.user
  await User.findByIdAndUpdate(_id, { token: '' })

  res.status(204).json({
    status: 'OK',
    code: 204,
    message: 'No Content',
  })
}


const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) throw HttpError(404, "Email not found")

  if (user.verify) throw HttpError(400, "Email already verify")

  if (user.email !== req.user.email) throw HttpError(401, "Email not found in this user")

  await sendEmail(user.verificationToken, email, user.userName);

  res.status(200).json({
    status: 'OK',
    code: 200,
    message: "Verify email resend success",
    email
  })
}

const verify = async (req, res) => {
  const { verificationToken } = req.params;

  const user = await User.findOne({ verificationToken });

  if (!user) throw HttpError(404);

  await User.findByIdAndUpdate(user._id, { verify: true, verificationToken: "Verify" });

  res.status(200).json({
    status: 'OK',
    code: 200,
    message: "Email verification successful"
  })
}


const avatarsDir = path.join('public', 'avatars')

const updateUserProfile = async (req, res) => {

  const { _id } = req.user;
  const body = req.body;

  if (req.file) {
    const { path: tempUpload, originalname } = req.file
    const filename = `${_id}_${originalname}`
    const resultUpload = path.join(avatarsDir, filename)
    
    await fs.rename(tempUpload, resultUpload)
 
    const resizeFile = await Jimp.read(resultUpload)
    await resizeFile.resize(250, 250).write(resultUpload)
    
    const avatarURL = path.join('avatars', filename)
    body.avatarURL = `${BASE_URL_BACK}/${avatarURL.replace("\\", "/")}`;
  }

  const updatedUser = await User.findByIdAndUpdate(_id, body, { new: true });
  if (!updatedUser) throw HttpError(404, "User not found")

  const sendUserData = clearSecretUserField(updatedUser);

  res.status(200).json({
    status: 'OK',
    code: 200,
    user: sendUserData,
  })
}


export default {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  verify: ctrlWrapper(verify),
  resendVerifyEmail: ctrlWrapper(resendVerifyEmail),
  updateUserProfile: ctrlWrapper(updateUserProfile),
};