const actions = require("../controllers/user.controller");

module.exports = app => {
  app.get("/", actions.get);
};
