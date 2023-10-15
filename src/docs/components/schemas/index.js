import { User } from "./User.js";
import { UserEdit } from "./UserEdit.js";
import { Task } from "./Task.js";
import { Review } from "./Review.js";
export const schemas = {
  schemas: {
    ...User,
    ...UserEdit,
    ...Task,
    ...Review,
  }
};
