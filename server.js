import mongoose from "mongoose";
import app from "./app.js";
import normalizePort from "./src/helpers/normalizePort.js";

// import "dotenv/config";
import dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const PORT = normalizePort(process.env.PORT || "5005");
const DB_HOST =
  process.env.DB_HOST ||
  "mongodb+srv://goose_track:F2V6jKCtaeYpXc98@cluster-goit.ohovvhs.mongodb.net/goose_track?retryWrites=true&w=majority";
// console.log("🚀 ~ file: server.js:8 ~ DB_HOST:", DB_HOST);
// console.log("🚀 ~ file: server.js:9 ~ process.env.NODE_ENV:", `.env.${process.env.NODE_ENV}`)

mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, () => console.log(`Server start on PORT = ${PORT}`));
  })
  .catch((error) => {
    console.log(`Server not running. Error message: ${error.message}`);
    process.exit(1);
  });
