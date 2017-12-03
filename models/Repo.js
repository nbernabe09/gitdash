const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RepoSchema = new Schema({
  repo_id: {
    type: Number,
    required: true
  },
  language: {
    type: Schema.Types.ObjectId,
    ref: "RepoLanguage",
    required: true
  },
  owner_id: {
    type: Schema.Types.ObjectId,
    ref: "RepoOwner",
    required: true
  },
});

const Repo = mongoose.model("Repo", RepoSchema);

module.exports = Repo;
