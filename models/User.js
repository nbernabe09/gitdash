var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var RepoSchema = new Schema({
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

var Repo = mongoose.model("Repo", RepoSchema);

module.exports = Repo;
