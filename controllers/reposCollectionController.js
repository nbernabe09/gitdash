const db = require("../models");

function gatherUnique() {
  let m = new Set
}

module.exports = {
  get: function(req, res) {
    db.RepoCollection
      .find({ _id: req.params.id })
      .then(ret => res.json(ret))
      .catch(err => res.status(422).json(err));
  },
  add: function (req, res) {
    db.RepoCollection
      .findByIdAndUpdate({ _id: req.params.id },
                         { $push: { repos: req.body.catnode_id } },
                         { upsert: false })
      .catch(err => res.status(422).json(err));
    res.end();
  },
  remove: function (req, body) {
    db.RepoCollection
      .findByIdAndUpdate({ _id: req.params.id },
                         { $pull: { repos: req.body.catnode_id } },
                         { upsert: false })
      .catch(err => res.status(422).json(err));
    res.end();
  },
  categories: function(req, res) {
    db.RepoCollection
      .findById(req.params.id)
      .populate("repos")
      .then(resp => {
        let out = resp.repos.reduce((a, c) => a.add(c.category), new Set());
        res.json(Array.from(out));
      })
      .catch(err => console.log(err));
  }
}
