import { month } from "./month.js";
import { verificationToken } from "./verificationToken.js";

export const parameters = {
  parameters: {
    ...month,
    ...verificationToken
  }
};
