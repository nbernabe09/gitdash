const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  github_id: {
    type: Number,
    required: true,
    unique: true,
    set: e => {
      return this.github_id = this.github_id || e;
    }
  },
  repo_collection: {
    type: Schema.Types.ObjectId,
    unique: true,
    ref: "RepoCollection",
    required: true,
    set: e => {
      return this.repo_collection = this.repo_collection || e;
    }
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
