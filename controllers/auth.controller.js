const mongoose = require("mongoose");
const User = mongoose.model("users");

exports.signup = async (req, res) => {
  // See if a user with a given email exists
  const exists = await User.findOne({ email: req.body.email });
  if (exists) {
    return res.status(422).send({ error: "User already exists" });
  }
  const user = await new User({
    email: req.body.email,
    password: req.body.password
  }).save();
  return res.status(200).send(user);
};
