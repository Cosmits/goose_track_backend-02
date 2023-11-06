import express from "express";
import logger from "morgan";
import cors from "cors";

import authRouter from "./src/routes/api/auth-router.js";
import tasksRouter from "./src/routes/api/tasks-router.js";
import reviewsRouter from "./src/routes/api/reviews-router.js";
import docRouter from "./src/routes/api/docs-router.js";

const app = express();
app.use(express.urlencoded({ extended: true }));

const formatsLogger = app.get("env") === "development" ? "dev" : "short";
app.use(logger(formatsLogger));

app.use(cors());

app.use(express.json());
app.use(express.static("public"));

app.use("/users", authRouter);
app.use("/tasks", tasksRouter);
app.use("/reviews", reviewsRouter);
app.use("/docs", docRouter);
app.use("/", docRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

export default app;
