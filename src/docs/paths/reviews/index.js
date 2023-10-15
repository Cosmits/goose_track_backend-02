const getAllRev = require("./getAllRev");
const getOwnRev = require("./getOwnRev");
const postOwnRev = require("./postOwnRev");
const patchOwnRev = require("./patchOwnRev");
const deleteOwnRev = require("./deleteOwnRev");

module.exports = {
  "/reviews": { ...getAllRev },
  "/reviews/own": {
    ...getOwnRev,
    ...postOwnRev,
    ...patchOwnRev,
    ...deleteOwnRev,
  },
};
