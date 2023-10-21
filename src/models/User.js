import { Schema, model } from "mongoose";
import { handleMongooseError, runValidateAtUpdate } from '../schemas/mongoose-hooks.js';

import { globalRegex } from "../helpers/index.js";
const { emailRegexp, phoneRegexp, birthdayRegexp } = globalRegex;


const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: [true, "Need set username, *(User)"],
    },
    password: {
      type: String,
      minLength: 6,
      required: [true, "Need set a password for user, *(min length 6 characters, may use symbols A-Za-z0-9)"],
    },
    email: {
      type: String,
      match: emailRegexp,
      unique: true,
      required: [true, "Need set an Email, *(any@mail.com) "],
    },
    phone: {
      type: String,
      match: [phoneRegexp, "Invalid phone number format, *(12 (345) 678 90 12)"],
      default: "",
    },
    birthday: {
      type: String,
      match: birthdayRegexp,
      required: [false, "'Invalid birthday format, *(DD/MM/YYYY)"],
      default: "",
    },
    skype: {
      type: String,
      default: "",
    },
    token: {
      type: String,
      default: '',
    },
    avatarURL: {
      type: String,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, 'Verify token is required, *(98234082-3123-324234-1234143)'],
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);
userSchema.pre("findOneAndUpdate", runValidateAtUpdate);
userSchema.post("findOneAndUpdate", handleMongooseError);

const User = model("user", userSchema);

export default User;