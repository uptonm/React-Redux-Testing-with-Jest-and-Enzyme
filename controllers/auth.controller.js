const mongoose = require("mongoose");
const jwt = require("jwt-simple");
const User = mongoose.model("users");

const token = user => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.TOKENSECRET);
};

exports.signup = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res
      .status(422)
      .send({ error: "You must provide an email address and a password" });
  }
  // See if a user with a given email exists
  const exists = await User.findOne({ email: req.body.email });
  if (exists) {
    // If they exist return an error 422
    return res.status(422).send({ error: "User already exists" });
  }
  // If they dont create a user record
  const user = await new User({
    email: req.body.email,
    password: req.body.password
  }).save();
  // Return a status that the user was created
  return res.status(200).send({ token: token(user) });
};

exports.signin = async (req, res) => {
  // User has already had email and password authenticated
  // Give them a token
  res.send({ token: token(req.user) });
};
