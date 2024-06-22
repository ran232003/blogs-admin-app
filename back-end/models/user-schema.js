const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  type: String,
  resetPasswordToken: String,
  resetPasswordExp: Date,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
