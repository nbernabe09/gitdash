var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var RepoSchema = new Schema({
  repo_id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  owner: {
    type: Schema.Types.User,
    required: true
  },
  html_url: {
    type: String,
    required: true
  },
  forks: {
    type: Number,
    required: true
  },
  open_issues: {
    type: Number,
    required: true
  },
  watchers_count: {
    type: Number,
    required: true
  },
  clone_url: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true,
  },
  updated_update: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  stargazers_count: {
    type: String,
    required: true
  }
});

var Repo = mongoose.model("Repo", RepoSchema);

module.exports = Repo;
