const db = require("../models");

module.exports = {
  getRepoOwner: function(req, res) {
    const repo_id = req.params.id;
    db.RepoOwner
      .find({repo_id: repo_id})
      .then(dbRepoLang => res.json(dbRepoLang))
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
