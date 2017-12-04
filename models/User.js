const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  github_id: {
    type: Number,
    required: true,
    unique: true
  },
  repo_collection: {
    type: Schema.Types.ObjectId,
    unique: true,
    ref: "RepoCollection",
    required: true
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
