import { Router } from "express";
import { serveFiles, setup } from "swagger-ui-express";
import swaggerDocument from "../../docs/index.js"
const docRouter = Router();

// console.log(swaggerDocument) 

const options = {
  explorer: true,
  swaggerOptions: {
    url: `${process.env.BASE_URL_BACK}/api-docs/swagger.json`,
    url: `http://localhost:5000/api-docs/swagger.json`,
  },
};
docRouter.get("/docs/swagger.json", (req, res) => res.json(swaggerDocument));

docRouter.use("/docs", serveFiles(swaggerDocument, options));
docRouter.get("/docs", setup(swaggerDocument, options));

export default docRouter;
