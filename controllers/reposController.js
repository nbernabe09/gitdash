const db = require("../models");

module.exports = {
  get: function(req, res) {
    const id = req.params.id;
    db.RepoOwner
      .find({repo_id: id})
      .then(repo => res.json(repo))
      .catch(err => res.status(422).json(err));
  },
  add: function(req, res) {
    const repoObj = {
      repo_id:  req.params.id,
      owner_id: req.body.owner,
      language: req.body.language
    }
    db.RepoOwner
      .findOneAndUpdate({ repo_id: repoObj.repo_id },
                        { repo_id: repoObj.repo_id, owner_id: repoObj.owner_id },
                        { upsert: true })
      .then(e1 => {
        db.RepoLanguage
          .findOneAndUpdate({ repo_id: id },
                            { repo_id: repoObj.repo_id, language: repoObj.language },
                            { upsert: true })
          .then(e2 => {
            db.Repo
              .findOneAndUpdate({ repo_id: id },
                                  repoObj,
                                { upsert: false })
              .catch(err => res.status(422).json(err));
          })
          .catch (err => res.status(422).json(err));
        })
      .catch(err => res.status(422).json(err));
      res.end();
  }
}
