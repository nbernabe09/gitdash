const db = require("../models");

module.exports = {
  get: function(req, res) {
    db.RepoLanguage
      .find({repo_id: req.params.id})
      .then(lang => res.json(lang))
      .catch(err => res.status(422).json(err));
  },
  set: function(req, res) {
    const obj = {
      repo_id:  req.params.id,
      language: language
    }
    db.RepoLanguage
      .findOneAndUpdate({ repo_id: obj.repo_id }, obj, { upsert: true })
      .catch(err => res.json(err))
      res.end();
  },
  add: function(req, res) {
    const obj = {
      repo_id: req.params.id,
      language: language
    }
    db.RepoLanguage
      .findOneAndUpdate({ repo_id: obj.repo_id }, obj, { upsert: true })
      .catch(err => res.json(err))
      res.end();
  }
}
