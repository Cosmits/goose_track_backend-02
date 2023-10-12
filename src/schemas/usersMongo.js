import { Schema, model } from "mongoose";
import { handleMongooseError, runValidateAtUpdate } from './mongooseHooks.js';
// import { number } from "joi";

const emailRegexp = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9_-]+).([a-zA-Z]{2,5})$/;
const phoneRegexp = /^\d{2}\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}$/;
const birthdayRegexp = /^\d{2}\/\d{2}\/\d{4}$/;
// const passwordRegexp = /^(?=.*\d)[A-Za-z\d]{6,}$/;

const userSchema = new Schema(
  {
    name: {
      type: String,
       
    },
    password: {
      type: String,
      minLength: 6,
      required: [true, "Need set a password for user"],
    },
    email: {
      type: String,
      match: emailRegexp,
      unique: true,
      required: [true, "Need set an Email "],
    },
    phone: {
      type: String,
      match: [phoneRegexp, "Invalid phone number format."],
      default: "",
    },

    birthday: {
      type: String,
      match: birthdayRegexp,
     
    },
    skype: {
      type: String,
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
      required: [true, 'Verify token is required'],
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);
userSchema.pre("findOneAndUpdate", runValidateAtUpdate);
userSchema.post("findOneAndUpdate", handleMongooseError);

const User = model("user", userSchema);

export default User;