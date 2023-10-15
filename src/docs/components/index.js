import { parameters } from "./parameters/index.js";
import { schemas } from "./schemas/index.js";
import { securitySchemes } from "./securitySchemes/index.js";

export const components = {
  components: {
    ...parameters,
    ...schemas,
    ...securitySchemes,
  }
};
