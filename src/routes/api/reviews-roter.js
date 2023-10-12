import { Router } from "express";

import reviewsController from "../../controllers/reviews-controller.js";
// import authenticate from "../../middleware/authenticate.js";
import reviewsValidation from "../../middleware/validation/reviews-validation.js";
// import upload from "../../middleware/upload.js";

const reviewsRouter = Router();

reviewsRouter.get("/", reviewsController.getAllReviews);
reviewsRouter.get("/own", reviewsController.getOneReview);

reviewsRouter.post(
  "/own",
  reviewsValidation.addReviewValidate,
  reviewsController.addOneReview
);

reviewsRouter.patch("/own", reviewsController.updateOneReview);

reviewsRouter.delete("/own", reviewsController.removeOneReview);

export default reviewsRouter;
