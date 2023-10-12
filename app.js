import express from "express";
import logger from "morgan";
import cors from "cors";
import path from "path";

import authRouter from "./src/routes/api/auth-router.js";
import tasksRouter from "./src/routes/api/tasks-router.js";
import reviewsRouter from "./src/routes/api/reviews-roter.js";

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use("/public", express.static(path.join("./public")));

app.use("/users", authRouter);
app.use("/tasks", tasksRouter);
app.use("/reviews", reviewsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

export default app;
