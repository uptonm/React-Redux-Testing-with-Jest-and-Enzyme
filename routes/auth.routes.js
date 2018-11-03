const authentication = require("../controllers/auth.controller");
const passportService = require("../services/passport");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireLogin = passport.authenticate("local", { session: false });

module.exports = app => {
  app.get("/", requireAuth, (req, res) => {
    res.send("authenticated");
  });
  app.post("/sign-in", requireLogin, authentication.signin);
  app.post("/sign-up", authentication.signup);
};
