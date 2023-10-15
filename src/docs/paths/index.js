import auth from "./auth";
import tasks from './tasks';
import reviews from './reviews';

export const paths = {
  ...auth,
  ...tasks,
  ...reviews,
};
