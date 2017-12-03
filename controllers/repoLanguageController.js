const db = require("../models");

module.exports = {
  getRepoLanguage: function(req, res) {
    const repo_id = req.params.id;
    db.RepoLanguage
      .find({repo_id: repo_id})
      .then(dbRepoLang => res.json(dbRepoLang))
      .catch(err => res.status(422).json(err));
  },
  setRepoLanguage: function(req, res) {
    const obj = {
      repo_id: req.params.id,
      lang:    req.body.language
    }
    db.RepoLanguage
      .findOneAndUpdate({ repo_id: obj.repo_id }, obj, { upsert: true })
      .catch(err => res.json(err))
      res.end();
  },
  addRepoLanguage: function(req, res) {
    const obj = {
      repo_id: req.params.id,
      lang: req.body.language
    }
    db.RepoLanguage
      .findOneAndUpdate({ repo_id: obj.repo_id }, obj, { upsert: true })
      .catch(err => res.json(err))
      res.end();
  }
}
