import { openapi } from "./openapi.js";
import { servers } from "./servers.js";
import { tags } from "./tags.js";

import { paths } from "./paths/index.js";
import { components } from "./components/index.js";

const swaggerDocument = {
  ...openapi,
  ...servers,
  ...components,
  ...tags,
  ...paths,
};

export default swaggerDocument