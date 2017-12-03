const db = require("../models");

module.exports = {
  get: function(req, res) {
    db.RepoOwner
      .find({ repo_id: req.params.id })
      .then(owner => res.json(owner))
      .catch(err => res.status(422).json(err));
  },
  set: function(req, res) {
    const obj = {
      repo_id:  req.params.id,
      owner_id: req.body.owner
    }
    db.RepoOwner
      .findOneAndUpdate({ repo_id: obj.repo_id }, obj, { upsert: true })
      .catch(err => res.status(422).json(err));
      res.end();
  },
  add: function(id, owner) {
    const obj = {
      repo_id: req.params.id,
      owner_id: req.body.owner
    }
    db.RepoOwner
      .findOneAndUpdate({ repo_id: obj.repo_id }, obj, { upsert: true })
      .catch(err => res.status(422).json(err));
      res.end();
  }
}
