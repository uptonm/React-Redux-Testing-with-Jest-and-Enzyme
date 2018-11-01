const authentication = require("../controllers/auth.controller");

module.exports = app => {
  app.post("/signup", authentication.signup);
};
