const profiles = require("./api/profiles");

function setupRoutes(app) {
  app.use("/api/profiles", profiles);

}

module.exports = setupRoutes;
