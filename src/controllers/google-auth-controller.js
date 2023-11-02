import queryString from 'queryString'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import axios from 'axios';

import User from '../models/User.js';
import { ctrlWrapper } from '../decorators/index.js';

import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const googleAuth = async (req, res) => {
  const stringifiedParams = queryString.stringify({
    client_id: process.env.GOOGLE_CLIENT_ID,
    redirect_uri: `${process.env.BASE_URL_BACK}/users/google-redirect`,
    scope: [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
    ].join(' '),
    response_type: 'code',
    access_type: 'offline',
    prompt: 'consent',
  });

  return res.redirect(
    `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`
  );
};

const googleRedirect = async (req, res) => {
  const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  console.log("🚀 ~ file: google-auth-controller.js:36 ~ googleRedirect ~ fullUrl:", fullUrl)
  const urlObj = URL.parse(fullUrl, true);
  console.log("🚀 ~ file: google-auth-controller.js:37 ~ googleRedirect ~ urlObj:", urlObj)

  const urlParams = urlObj.query;
  console.log("🚀 ~ file: google-auth-controller.js:40 ~ googleRedirect ~ urlParams:", urlParams)

  const code = urlParams.code;
  console.log("🚀 ~ file: google-auth-controller.js:43 ~ googleRedirect ~ code:", code)

  const tokenData = await axios({
    url: `https://oauth2.googleapis.com/token`,
    method: 'post',
    data: {
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: `${process.env.BASE_URL_BACK}/users/google-redirect`,
      grant_type: 'authorization_code',
      code,
    },
  });

  const userData = await axios({
    url: 'https://www.googleapis.com/oauth2/v2/userinfo',
    method: 'get',
    headers: {
      Authorization: `Bearer ${tokenData.data.access_token}`,
    },
  });

  const user = await User.findOne({ email: userData.data.email });
  if (user) {
    const payload = {
      id: user._id,
    };

    const refreshToken = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '23h',
    });

    await User.findByIdAndUpdate(user._id, {
      refreshToken,
      isGoogleAuth: true,
    });

    return res.redirect(`${process.env.FRONTEND_URL}?token=${refreshToken}`);
  }

  const hashedPassword = await bcrypt.hash(userData.data.email, 10);

  const userBody = {
    email: userData.data.email,
    userName: userData.data.name,
    avatarURL: userData.data.picture,
    password: hashedPassword,
  };

  const newUser = await User.create(userBody);

  const payload = {
    id: newUser._id,
  };
  const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '23h',
  });

  await User.findByIdAndUpdate(newUser._id, {
    token: accessToken,
  });

  return res.redirect(`${process.env.BASE_URL_FRONT}?token=${accessToken}`);
};



export default {
  googleAuth: ctrlWrapper(googleAuth),
  googleRedirect: ctrlWrapper(googleRedirect),
}