import { Router } from "express";
import { serveFiles, setup } from "swagger-ui-express";
import swaggerDocument from "../../docs";
const docRouter = Router();

const options = {
  explorer: true,
  swaggerOptions: {
    url: `${process.env.BASE_URL_BACK}/api-docs/swagger.json`,
  },
};
docRouter.get("/swagger.json", (req, res) => res.json(swaggerDocument));

docRouter.use("/", serveFiles(null, options));
docRouter.get("/", setup(null, options));

export default docRouter;
