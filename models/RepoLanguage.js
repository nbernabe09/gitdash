const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RepoLanguageSchema = new Schema({
  repo_id: {
    type: Number,
    unique: true,
    required: true
  },
  language: {
    type: String,
    required: true,
    default: "Unsorted"
  }
});

const RepoLanguage = mongoose.model("RepoLanguage", RepoLanguageSchema);

module.exports = RepoLanguage;
