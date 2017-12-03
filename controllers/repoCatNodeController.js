const db = require("../models");

module.exports = {
  getRepoCatNode: function(req, res) {
    const repoCatId = req.params.id;
    db.RepoCatNode
      .find({_id: repoCatId})
      .then(ret => res.json(ret))
      .catch(err => res.status(422).json(err));
  },
  setRepoOwner: function(req, res) {
    const obj = {
      repo_id:  req.params.id,
      owner_id: req.body.owner
    }
    db.RepoOwner
      .findOneAndUpdate({ repo_id: obj.repo_id }, obj, { upsert: true })
      .catch(err => res.status(422).json(err));
      res.end();
  },
  addRepoOwner: function(req, res) {
    const obj = {
      repo_id:  req.params.id,
      owner_id: req.body.owner
    }
    db.RepoOwner
      .findOneAndUpdate({ repo_id: obj.repo_id }, obj, { upsert: true })
      .catch(err => res.status(422).json(err));
      res.end();
  }
}
