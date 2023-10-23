import nodemailer from "nodemailer";

import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const { UKR_NET_EMAIL_FROM, UKR_NET_EMAIL_PASSWORD } = process.env;
const BASE_URL_FRONT = process.env.BASE_URL_FRONT


const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465, // 25, 465, 2525, 587
  secure: true,
  auth: {
    user: UKR_NET_EMAIL_FROM,
    pass: UKR_NET_EMAIL_PASSWORD,
  }
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = (verificationToken, email, name) => {
  
  const verifyEmail = {
    from: UKR_NET_EMAIL_FROM,
    to: email,
    subject: "Activate your GooseTrack02 account",
    html: `<div style="font-family: Arial, sans-serif; width: 100%; background-color: #dcebf7; padding: 20px;">
      <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 10px;">
        <h1 style="text-align: center; color:#3e85f3; font-size: 32px;"><b>Hello from GooseTrack02!</b></h1>
        <h3 style="text-align: center; color:#171820; font-size: 18px;">We're glad you're here, ${name}</h3>
        <div style="margin: 0 auto; text-align: center;">
        <a target="_blank" style="display: inline-block; margin: 0 auto; font-size: 18px; background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;" href="${BASE_URL_FRONT}/send-verify-email/${verificationToken}">Activate your Account</a>
        </div>
        <br>
        <p style="text-align: center; color: #171820; font-size: 18px;">If you didn't register for an account, you can ignore this email.</p>
        <p style="text-align: center; color: #171820; font-size: 18px;">Best regards GooseTrack02</p>
      </div>
    </div>`,
  };

  const letter = { ...verifyEmail };
  return transport.sendMail(letter)
}

export default sendEmail;