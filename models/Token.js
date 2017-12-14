const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TokenSchema = new Schema({
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

const Token = mongoose.model("Token", TokenSchema);

module.exports = Token;
