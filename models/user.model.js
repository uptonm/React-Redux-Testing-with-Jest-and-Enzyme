const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  first: String,
  last: String,
  email: { type: String, lowercase: true },
  password: String
});

const User = mongoose.model("users", userSchema);
module.exports = User;
