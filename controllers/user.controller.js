const mongoose = require("mongoose");
const User = mongoose.model("users");

exports.get = async (req, res) => {
  res.send("Route working");
};
