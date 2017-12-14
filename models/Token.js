const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  github_id: {
    type: Number,
    required: true,
    unique: true
  },
  token: {
    type: String,
    unique: true,
    required: true
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
