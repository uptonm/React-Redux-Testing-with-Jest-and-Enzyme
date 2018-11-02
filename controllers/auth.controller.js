const mongoose = require("mongoose");
const User = mongoose.model("users");

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
  return res.status(200).send({ success: true });
};
