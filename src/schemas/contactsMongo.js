import { Schema, model } from 'mongoose'
import { handleMongooseError, runValidateAtUpdate } from './mongooseHooks.js';

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
  },
  email: {
    type: String,
    unique: true,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
}, { versionKey: false, timestamps: false })

contactSchema.post("save", handleMongooseError);

contactSchema.pre("findOneAndUpdate", runValidateAtUpdate);
contactSchema.post("findOneAndUpdate", handleMongooseError);

const Contact = model('contacts', contactSchema)

export default Contact;
