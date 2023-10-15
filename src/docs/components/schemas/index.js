import { User } from "./User.js";
import { UserEdit } from "./UserEdit.js";
// import Task from "./Task";
// import Review from "./Review";
export const schemas = {
  schemas: {
    ...User,
    ...UserEdit,
    // ...Task,
    // ...Review,
  }
};
