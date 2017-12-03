const db = require("../models");

module.exports = {
  get: function(req, res) {
    db.RepoCollection
      .find({ _id: req.params.id })
      .then(ret => res.json(ret))
      .catch(err => res.status(422).json(err));
  },
  add: function (req, res) {
    db.RepoCollection
      .findOneAndUpdate({ _id: req.params.id }, { $push: { repos: req.body.repo_id } }, { upsert: false })
      .catch(err => res.status(422).json(err));
    res.end();
  },
  remove: function (req, body) {
    db.RepoCollection
      .findOneAndUpdate({ _id: req.params.id }, { $pull: { repos: req.body.repo_id } }, { upsert: false })
      .catch(err => res.status(422).json(err));
    res.end();
  }
}
