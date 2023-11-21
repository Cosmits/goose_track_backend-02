import mongoose from "mongoose";
import app from "./app.js";
import normalizePort from "./src/helpers/normalizePort.js";

import dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const PORT = normalizePort(process.env.PORT || "5005");
const DB_HOST = process.env.DB_HOST;

mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, () => console.log(`Server start on --> ${process.env.BASE_URL_BACK}:${PORT}`));
    
  })
  .catch((error) => {
    console.log(`Server not running. Error message: ${error.message}`);
    process.exit(1);
  });
