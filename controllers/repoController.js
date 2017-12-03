const db = require("../models");

module.exports = {
  getRepo: function(req, res) {
    const repo_id = req.params.id;
    db.RepoOwner
      .find({repo_id: repo_id})
      .then(dbRepoLang => res.json(dbRepoLang))
      .catch(err => res.status(422).json(err));
  },
  addRepo: function(req, res) {
    const repoObj = {
      repo_id: req.params.id,
      owner_id: req.body.owner,
      language: req.body.language
    }
    db.RepoOwner
      .findOneAndUpdate({ repo_id: repoObj.repo_id },
                        { repo_id: repoObj.repo_id, owner_id: repoObj.owner_id },
                        { upsert: true })
      .then(e1 => {
        db.RepoLanguage
          .findOneAndUpdate({ repo_id: repoObj.repo_id },
                            { repo_id: repoObj.repo_id, language: repoObj.language },
                            { upsert: true })
          .then(e2 => {
            db.Repo
              .findOneAndUpdate({ repo_id: repoObj.repo_id },
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
