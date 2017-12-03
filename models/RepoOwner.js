const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RepoOwnerSchema = new Schema({
  repo_id: {
    type: Number,
    required: true,
    set: e => this.repo
  },
  owner_id: {
    type: Number,
    required: true
  }
});

const RepoOwner = mongoose.model("RepoOwner", RepoOwnerSchema);

module.exports = RepoOwner;
