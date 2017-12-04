const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RepoCatNodeSchema = new Schema({
  repo: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Repo"
  },
  category: {
    type: String,
    required: true,
    default: "Unsorted"
  },
  tags: [{
    type: String
  }]
});

const RepoCatNode = mongoose.model("RepoCatNode", RepoCatNodeSchema);

module.exports = RepoCatNode;
