import parameters from "./parameters";
import schemas from "./schemas";
import securitySchemes from "./securitySchemes";

export const components = {
  ...parameters,
  ...schemas,
  ...securitySchemes,
};
