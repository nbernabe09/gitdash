const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OwnerSchema = new Schema({
  owner_id: {
    type: Number,
    required: true
  },
  login: {
    type: String,
    required: true
  },
  avatar_url: {
    type: String,
    required: true
  },
  html_url: {
    type: String,
    required: true
  }
});

const Owner = mongoose.model("Owner", OwnerSchema);

module.exports = Owner;
