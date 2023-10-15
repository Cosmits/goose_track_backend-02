import auth from "./auth/index.js";
import tasks from "./tasks/index.js";
import reviews from "./reviews/index.js";

export const paths = {
  paths: {
    ...auth,
    ...tasks,
    ...reviews,
  }
};
